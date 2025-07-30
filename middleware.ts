import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware() {
    // Le middleware se contente de vérifier l'authentification
    // La vérification des rôles admin se fait côté client et serveur
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
);

// Pages qui nécessitent une authentification
export const config = {
  matcher: ['/admin/:path*', '/profile/:path*', '/settings/:path*']
};
