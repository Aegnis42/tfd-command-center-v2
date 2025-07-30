import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

export async function GET() {
  try {
    // Test de connexion à la base de données
    const db = await getDatabase();
    
    // Test simple : obtenir les stats de la base de données
    const admin = db.admin();
    const result = await admin.ping();
    
    return NextResponse.json({
      success: true,
      message: 'Connexion à MongoDB Atlas réussie !',
      database: db.databaseName,
      ping: result,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Erreur de connexion MongoDB:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Erreur de connexion à MongoDB Atlas',
      error: error instanceof Error ? error.message : 'Erreur inconnue',
    }, { status: 500 });
  }
}

export async function POST() {
  return NextResponse.json({
    message: 'POST method not implemented for database test',
  }, { status: 405 });
}
