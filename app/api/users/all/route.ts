import { NextResponse } from 'next/server';
import { UserService } from '@/lib/services/userService';

export async function GET() {
  try {
    const users = await UserService.getAllUsers(100, 0);
    
    return NextResponse.json({
      success: true,
      count: users.length,
      users: users
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la récupération des utilisateurs',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      },
      { status: 500 }
    );
  }
}
