import { UserService } from './userService';

export class PermissionService {
  static async isAdmin(discordId: string): Promise<boolean> {
    try {
      const user = await UserService.getUserByDiscordId(discordId);
      return user?.role === 'admin';
    } catch (error) {
      console.error('Erreur lors de la vérification admin:', error);
      return false;
    }
  }

  static async isModerator(discordId: string): Promise<boolean> {
    try {
      const user = await UserService.getUserByDiscordId(discordId);
      return user?.role === 'moderator' || user?.role === 'admin';
    } catch (error) {
      console.error('Erreur lors de la vérification modérateur:', error);
      return false;
    }
  }

  static async getUserRole(discordId: string): Promise<'admin' | 'moderator' | 'user' | null> {
    try {
      const user = await UserService.getUserByDiscordId(discordId);
      return user?.role || null;
    } catch (error) {
      console.error('Erreur lors de la récupération du rôle:', error);
      return null;
    }
  }

  static async hasPermission(discordId: string, requiredRole: 'admin' | 'moderator' | 'user'): Promise<boolean> {
    try {
      const user = await UserService.getUserByDiscordId(discordId);
      if (!user) return false;

      switch (requiredRole) {
        case 'admin':
          return user.role === 'admin';
        case 'moderator':
          return user.role === 'admin' || user.role === 'moderator';
        case 'user':
          return true; // Tous les utilisateurs connectés ont au minimum le rôle user
        default:
          return false;
      }
    } catch (error) {
      console.error('Erreur lors de la vérification des permissions:', error);
      return false;
    }
  }
}
