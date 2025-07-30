import { NextResponse } from 'next/server';
import { UserService } from '@/lib/services/userService';

export async function PATCH(request: Request) {
  try {
    const { discordId, role } = await request.json();

    if (!discordId || !role) {
      return NextResponse.json(
        { success: false, message: 'discordId et role sont requis' },
        { status: 400 }
      );
    }

    if (!['user', 'admin', 'moderator'].includes(role)) {
      return NextResponse.json(
        { success: false, message: 'Role invalide. Doit être: user, admin, ou moderator' },
        { status: 400 }
      );
    }

    // Trouver l'utilisateur par Discord ID
    const user = await UserService.getUserByDiscordId(discordId);
    
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Utilisateur non trouvé' },
        { status: 404 }
      );
    }

    // Mettre à jour le rôle
    const updated = await UserService.updateUser(user._id!, { role });

    if (!updated) {
      return NextResponse.json(
        { success: false, message: 'Erreur lors de la mise à jour' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Utilisateur ${user.siteUsername} mis à jour avec le rôle ${role}`,
      user: updated
    });

  } catch (error) {
    console.error('Erreur lors de la mise à jour du rôle:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur serveur',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      },
      { status: 500 }
    );
  }
}
