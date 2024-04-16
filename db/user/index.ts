"use server";

import { db } from "@/prisma/db";

/**
 * Récupère un utilisateur en fonction de son adresse e-mail.
 * 
 * @param email - L'adresse e-mail de l'utilisateur.
 * @returns Une promesse qui se résout avec l'utilisateur correspondant à l'adresse e-mail, ou null si aucun utilisateur n'est trouvé ou s'il y a une erreur.
 */
export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user;
  } catch (error) {
    return null;
  }
};

/**
 * Récupère un utilisateur par son identifiant.
 * @param id L'identifiant de l'utilisateur.
 * @returns Une promesse résolue avec l'utilisateur correspondant à l'identifiant, ou null si aucun utilisateur n'est trouvé ou s'il y a une erreur.
 */
export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });
    return user;
  } catch (error) {
    return null;
  }
};

/**
 * Récupère tous les utilisateurs de la base de données.
 *
 * @returns Une promesse qui se résout avec un tableau d'utilisateurs, ou null en cas d'erreur.
 */
export const getAllUsers = async () => {
  try {
    const user = await db.user.findMany({
      orderBy: {
        name: "asc",
      },
    });
    return user;
  } catch (error) {
    return null;
  }
};