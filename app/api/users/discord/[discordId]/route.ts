import { NextResponse } from 'next/server';
import { UserService } from '@/lib/services/userService';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ discordId: string }> }
) {
  try {
    const { discordId } = await params;

    if (!discordId) {
      return NextResponse.json(
        { success: false, message: 'Discord ID requis' },
        { status: 400 }
      );
    }

    const user = await UserService.getUserByDiscordId(discordId);
    
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Utilisateur non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      user: user
    });

  } catch (error) {
    console.error('Erreur lors de la récupération de l\'utilisateur:', error);
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
