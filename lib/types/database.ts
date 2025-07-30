import { ObjectId } from 'mongodb';

export interface User {
  _id?: ObjectId;
  // Données Discord
  discordId: string;
  discordEmail: string;
  discordUsername: string;
  discordAvatar?: string;
  // Données du site
  siteUsername: string;
  nexonId?: string;
  role: 'admin' | 'moderator' | 'user';
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt: Date;
  // Profil optionnel
  profile?: {
    bio?: string;
    level?: number;
    favoriteDescendant?: string;
  };
}

export interface Descendant {
  _id?: ObjectId;
  name: string;
  element: 'Fire' | 'Electric' | 'Toxic' | 'Chill' | 'Non-Attribute';
  type: 'DPS' | 'Tank' | 'Support';
  rarity: 'Standard' | 'Rare' | 'Ultimate';
  description: string;
  skills: {
    passive: string;
    active: string;
    sub: string;
    ultimate: string;
  };
  stats: {
    hp: number;
    shield: number;
    mp: number;
    def: number;
  };
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Build {
  _id?: ObjectId;
  name: string;
  descendantId: string;
  author: string;
  description: string;
  weapons: {
    primary?: string;
    secondary?: string;
  };
  modules: string[];
  externalComponents: string[];
  tags: string[];
  rating: number;
  views: number;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Guide {
  _id?: ObjectId;
  title: string;
  content: string;
  author: string;
  category: 'Beginner' | 'Advanced' | 'Tips' | 'Strategy';
  tags: string[];
  views: number;
  likes: number;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}
