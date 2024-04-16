import { useSession } from "next-auth/react";

/**
 * Hook pour récupérer l'utilisateur actuellement connecté.
 * Utilise la session pour obtenir les informations de l'utilisateur.
 * @returns L'objet représentant l'utilisateur actuellement connecté.
 */
export const useCurrentUser = () => {
  const session = useSession();
  return session.data?.user;
};