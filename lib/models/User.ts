export interface User {
  _id?: string;
  discordId: string;
  discordEmail: string;
  discordUsername: string;
  siteUsername: string;
  nexonId?: string;
  role: 'user' | 'admin' | 'moderator';
  createdAt: Date;
  lastLoginAt: Date;
}

export interface CreateUserData {
  discordId: string;
  discordEmail: string;
  discordUsername: string;
  siteUsername: string;
  nexonId?: string;
  role?: 'user' | 'admin' | 'moderator';
}
