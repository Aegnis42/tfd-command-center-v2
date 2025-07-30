import { NextResponse } from 'next/server';
import { AuthService } from '@/lib/services/authService';

export async function GET() {
  try {
    const user = await AuthService.getCurrentUser();
    
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Non authentifié' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        discordId: user.discordId,
        siteUsername: user.siteUsername,
        role: user.role,
      },
      permissions: {
        isAdmin: user.role === 'admin',
        isModerator: user.role === 'admin' || user.role === 'moderator',
      }
    });

  } catch (error) {
    console.error('Erreur lors de la vérification des permissions:', error);
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
