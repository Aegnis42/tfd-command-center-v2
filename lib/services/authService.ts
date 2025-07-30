import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { UserService } from './userService';
import { PermissionService } from './permissionService';

export interface AuthenticatedUser {
  id: string;
  discordId: string;
  discordEmail: string;
  discordUsername: string;
  siteUsername: string;
  role: 'admin' | 'moderator' | 'user';
  discordAvatar?: string;
  nexonId?: string;
}

export class AuthService {
  static async getCurrentUser(): Promise<AuthenticatedUser | null> {
    try {
      const session = await getServerSession(authOptions);
      
      if (!session?.user?.discordId) {
        return null;
      }

      const user = await UserService.getUserByDiscordId(session.user.discordId);
      
      if (!user) {
        return null;
      }

      return {
        id: user._id!,
        discordId: user.discordId,
        discordEmail: user.discordEmail,
        discordUsername: user.discordUsername,
        siteUsername: user.siteUsername,
        role: user.role,
        discordAvatar: user.discordAvatar,
        nexonId: user.nexonId,
      };
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'utilisateur actuel:', error);
      return null;
    }
  }

  static async requireAuth(): Promise<AuthenticatedUser> {
    const user = await this.getCurrentUser();
    if (!user) {
      throw new Error('Authentification requise');
    }
    return user;
  }

  static async requireAdmin(): Promise<AuthenticatedUser> {
    const user = await this.requireAuth();
    const isAdmin = await PermissionService.isAdmin(user.discordId);
    
    if (!isAdmin) {
      throw new Error('Privilèges administrateur requis');
    }
    
    return user;
  }

  static async requireModerator(): Promise<AuthenticatedUser> {
    const user = await this.requireAuth();
    const isModerator = await PermissionService.isModerator(user.discordId);
    
    if (!isModerator) {
      throw new Error('Privilèges modérateur ou administrateur requis');
    }
    
    return user;
  }
}
