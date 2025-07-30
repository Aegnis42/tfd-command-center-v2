import NextAuth, { AuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import type { JWT } from 'next-auth/jwt';
import type { Session } from 'next-auth';
import type { DiscordProfile } from '@/types/next-auth';
import { UserService } from '@/lib/services/userService';

export const authOptions: AuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === 'discord' && profile) {
        try {
          const discordProfile = profile as DiscordProfile;
          
          // Vérifier que les données requises sont présentes
          if (!discordProfile.email) {
            console.error('Email Discord manquant');
            return false;
          }
          
          // Créer ou mettre à jour l'utilisateur dans la base de données
          const dbUser = await UserService.findOrCreateUserFromDiscord({
            id: discordProfile.id,
            email: discordProfile.email,
            username: discordProfile.username,
            image: discordProfile.image_url || discordProfile.avatar,
          });
          
          console.log('Utilisateur enregistré/mis à jour:', dbUser.siteUsername);
          return true;
        } catch (error) {
          console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.discordId = (profile as DiscordProfile)?.id;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      if (session.user) {
        session.user.discordId = token.discordId;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
