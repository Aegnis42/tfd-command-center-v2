// Types pour NextAuth.js avec Discord
import type { DefaultSession, DefaultUser } from 'next-auth';
import type { DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    accessToken?: string;
    user: {
      discordId?: string;
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    discordId?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    accessToken?: string;
    discordId?: string;
  }
}

export interface DiscordProfile {
  id: string;
  username: string;
  discriminator: string;
  avatar?: string;
  email?: string;
  image_url?: string;
  verified?: boolean;
}
