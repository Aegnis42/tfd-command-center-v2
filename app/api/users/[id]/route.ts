import { NextRequest, NextResponse } from 'next/server';
import { UserService } from '@/lib/services/userService';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await UserService.getUserById(params.id);
    
    if (!user) {
      return NextResponse.json({
        success: false,
        message: 'Utilisateur non trouvé',
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'utilisateur:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Erreur lors de la récupération de l\'utilisateur',
      error: error instanceof Error ? error.message : 'Erreur inconnue',
    }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    
    const updatedUser = await UserService.updateUser(params.id, body);
    
    if (!updatedUser) {
      return NextResponse.json({
        success: false,
        message: 'Utilisateur non trouvé',
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      message: 'Utilisateur mis à jour avec succès',
      data: updatedUser,
    });
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Erreur lors de la mise à jour de l\'utilisateur',
      error: error instanceof Error ? error.message : 'Erreur inconnue',
    }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const deleted = await UserService.deleteUser(params.id);
    
    if (!deleted) {
      return NextResponse.json({
        success: false,
        message: 'Utilisateur non trouvé',
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      message: 'Utilisateur supprimé avec succès',
    });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'utilisateur:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Erreur lors de la suppression de l\'utilisateur',
      error: error instanceof Error ? error.message : 'Erreur inconnue',
    }, { status: 500 });
  }
}
