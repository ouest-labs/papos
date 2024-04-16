import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from 'react';

interface UseAuthProps {
  onSignIn: (provider: "google" | "github") => Promise<void>;
  isLoading: {
    google: boolean;
    github: boolean;
  };
}


/**
 * Hook pour gérer l'authentification OAuth.
 *
 * @returns Un objet contenant la fonction `onSignIn` et l'état `isLoading`.
 */
export const useAuth = (): UseAuthProps => {
  const [isLoading, setIsLoading] = useState<{ google: boolean; github: boolean }>({
    google: false,
    github: false
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || DEFAULT_LOGIN_REDIRECT;

  const onSignIn = async (provider: "google" | "github") => {
    setIsLoading({ ...isLoading, [provider]: true });
    await signIn(provider, { callbackUrl });
    setIsLoading({ ...isLoading, [provider]: false });
  };

  return { onSignIn, isLoading };
};
