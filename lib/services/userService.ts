import { getDatabase } from '../mongodb';
import { User } from '../types/database';
import { UserAPI } from '../types/api';
import { ObjectId } from 'mongodb';

export class UserService {
  private static async getCollection() {
    const db = await getDatabase();
    const collection = db.collection<User>('users');
    
    // Créer un index unique sur discordId si il n'existe pas
    try {
      await collection.createIndex({ discordId: 1 }, { unique: true, sparse: true });
    } catch {
      // L'index existe déjà ou autre erreur, on continue
      console.log('Index discordId déjà existant ou erreur lors de la création');
    }
    
    return collection;
  }

  // Helper pour convertir un User MongoDB en UserAPI
  private static toAPI(user: User): UserAPI {
    return {
      ...user,
      _id: user._id?.toString(),
    };
  }

  static async createUser(userData: Omit<UserAPI, '_id' | 'createdAt' | 'updatedAt' | 'lastLoginAt'>): Promise<UserAPI> {
    const collection = await this.getCollection();
    const now = new Date();
    
    const user: Omit<User, '_id'> = {
      ...userData,
      createdAt: now,
      updatedAt: now,
      lastLoginAt: now,
    };

    const result = await collection.insertOne(user);
    return { ...user, _id: result.insertedId.toString() };
  }

  static async findOrCreateUserFromDiscord(profile: {
    id: string;
    email: string;
    username: string;
    image?: string;
  }): Promise<UserAPI> {
    const collection = await this.getCollection();
    
    // Chercher l'utilisateur par Discord ID
    const existingUser = await collection.findOne({ discordId: profile.id });
    
    if (existingUser) {
      // Mettre à jour la dernière connexion et les infos Discord
      const updatedUser = await collection.findOneAndUpdate(
        { discordId: profile.id },
        { 
          $set: { 
            lastLoginAt: new Date(),
            discordEmail: profile.email,
            discordUsername: profile.username,
            discordAvatar: profile.image,
            updatedAt: new Date()
          } 
        },
        { returnDocument: 'after' }
      );
      return updatedUser ? this.toAPI(updatedUser) : this.toAPI(existingUser);
    }

    // Créer un nouveau utilisateur
    const userData: Omit<UserAPI, '_id' | 'createdAt' | 'updatedAt' | 'lastLoginAt'> = {
      discordId: profile.id,
      discordEmail: profile.email,
      discordUsername: profile.username,
      discordAvatar: profile.image,
      siteUsername: profile.username, // Par défaut, même pseudo que Discord
      role: 'user',
    };

    return await this.createUser(userData);
  }

  static async getUserByDiscordId(discordId: string): Promise<UserAPI | null> {
    const collection = await this.getCollection();
    const user = await collection.findOne({ discordId });
    return user ? this.toAPI(user) : null;
  }

  static async getUserById(id: string): Promise<UserAPI | null> {
    const collection = await this.getCollection();
    const user = await collection.findOne({ _id: new ObjectId(id) });
    return user ? this.toAPI(user) : null;
  }

  static async getUserByEmail(email: string): Promise<UserAPI | null> {
    const collection = await this.getCollection();
    const user = await collection.findOne({ email });
    return user ? this.toAPI(user) : null;
  }

  static async getUserByUsername(username: string): Promise<UserAPI | null> {
    const collection = await this.getCollection();
    const user = await collection.findOne({ username });
    return user ? this.toAPI(user) : null;
  }

  static async updateUser(id: string, updateData: Partial<UserAPI>): Promise<UserAPI | null> {
    const collection = await this.getCollection();
    
    // Retirer l'_id des données de mise à jour
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, ...updateFields } = updateData;
    
    const result = await collection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          ...updateFields, 
          updatedAt: new Date() 
        } 
      },
      { returnDocument: 'after' }
    );

    return result ? this.toAPI(result) : null;
  }

  static async deleteUser(id: string): Promise<boolean> {
    const collection = await this.getCollection();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
  }

  static async getAllUsers(limit: number = 50, skip: number = 0): Promise<UserAPI[]> {
    const collection = await this.getCollection();
    const users = await collection
      .find({})
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .toArray();

    return users.map(user => this.toAPI(user));
  }

  static async getUsersCount(): Promise<number> {
    const collection = await this.getCollection();
    return await collection.countDocuments();
  }
}
