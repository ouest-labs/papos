"use server";

import { db } from "@/prisma/db";

/**
 * Récupère le compte en fonction de l'identifiant de l'utilisateur.
 * @param userId L'identifiant de l'utilisateur.
 * @returns Une promesse qui se résout avec le compte correspondant à l'identifiant de l'utilisateur, ou null si aucun compte n'est trouvé.
 */
export const getAccountByUserId = async (userId: string) => {
  try {
    const account = await db.account.findFirst({
      where: { userId },
    });
    return account;
  } catch {
    return null;
  }
};
