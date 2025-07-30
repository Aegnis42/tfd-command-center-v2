'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';

interface UsePermissionsResult {
  isAdmin: boolean;
  isModerator: boolean;
  role: 'admin' | 'moderator' | 'user' | null;
  loading: boolean;
  error: string | null;
}

export function usePermissions(): UsePermissionsResult {
  const { data: session, status } = useSession();
  const [permissions, setPermissions] = useState<UsePermissionsResult>({
    isAdmin: false,
    isModerator: false,
    role: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    async function checkPermissions() {
      if (status === 'loading') {
        return;
      }

      if (!session?.user?.discordId) {
        setPermissions({
          isAdmin: false,
          isModerator: false,
          role: null,
          loading: false,
          error: null,
        });
        return;
      }

      try {
        const response = await fetch(`/api/users/discord/${session.user.discordId}`);
        
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des permissions');
        }

        const data = await response.json();
        
        if (data.success && data.user) {
          const role = data.user.role;
          setPermissions({
            isAdmin: role === 'admin',
            isModerator: role === 'admin' || role === 'moderator',
            role: role,
            loading: false,
            error: null,
          });
        } else {
          setPermissions({
            isAdmin: false,
            isModerator: false,
            role: 'user',
            loading: false,
            error: null,
          });
        }
      } catch (error) {
        console.error('Erreur lors de la vérification des permissions:', error);
        setPermissions({
          isAdmin: false,
          isModerator: false,
          role: null,
          loading: false,
          error: error instanceof Error ? error.message : 'Erreur inconnue',
        });
      }
    }

    checkPermissions();
  }, [session, status]);

  return permissions;
}
