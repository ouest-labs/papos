"use server";

import { auth } from '@/auth';
import { db } from '@/prisma/db';
import { revalidatePath } from 'next/cache';

/**
 * Crée un nouveau post.
 *
 * @param formData - Les données du formulaire pour créer le post.
 * @returns Une promesse qui se résout lorsque le post est créé.
 */
export const createPost = async (formData: FormData) => {
  const session = await auth()
  const desc = formData.get('desc') as string
  if (!session || !session.user || !session.user.id || !desc) {
    return;
  }
  await db.post.create({
    data: {
      desc: desc,
      userId: session.user.id
    }
  })
  revalidatePath("/", "page")
}

/**
 * Supprime un post en fonction de son identifiant.
 * @param id L'identifiant de l'article à supprimer.
 */
export const deletePost = async (id: number) => {
  await db.post.delete({
    where: {
      id: id
    }
  })
  revalidatePath("/", "page")
}