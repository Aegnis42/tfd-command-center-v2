import { NextRequest, NextResponse } from 'next/server';
import { UserService } from '@/lib/services/userService';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '50');
    const skip = parseInt(searchParams.get('skip') || '0');
    
    const users = await UserService.getAllUsers(limit, skip);
    const totalCount = await UserService.getUsersCount();
    
    return NextResponse.json({
      success: true,
      data: users,
      pagination: {
        total: totalCount,
        limit,
        skip,
        hasMore: skip + limit < totalCount,
      },
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Erreur lors de la récupération des utilisateurs',
      error: error instanceof Error ? error.message : 'Erreur inconnue',
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation de base
    if (!body.username || !body.email || !body.role) {
      return NextResponse.json({
        success: false,
        message: 'Champs requis manquants: username, email, role',
      }, { status: 400 });
    }

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await UserService.getUserByEmail(body.email);
    if (existingUser) {
      return NextResponse.json({
        success: false,
        message: 'Un utilisateur avec cet email existe déjà',
      }, { status: 409 });
    }

    const existingUsername = await UserService.getUserByUsername(body.username);
    if (existingUsername) {
      return NextResponse.json({
        success: false,
        message: 'Ce nom d\'utilisateur est déjà pris',
      }, { status: 409 });
    }

    const newUser = await UserService.createUser(body);
    
    return NextResponse.json({
      success: true,
      message: 'Utilisateur créé avec succès',
      data: newUser,
    }, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Erreur lors de la création de l\'utilisateur',
      error: error instanceof Error ? error.message : 'Erreur inconnue',
    }, { status: 500 });
  }
}
