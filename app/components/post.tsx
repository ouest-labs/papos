import { BinaryLike, createHash } from 'crypto';
import { Blockquote, BlockquoteAuthor } from '@/components/ui/blockquote';

import { SupprimerPost } from '@/components/modules';
import { auth } from '@/auth';
import { db } from '@/prisma/db';
import timeAgo from '@/lib/time-ago';

function anonymizeUsername(username: BinaryLike) {
  return createHash('sha256')
    .update(username)
    .digest('hex')
    .substring(0, 5);
}

export default async function Posts() {
  const session = await auth();
  const posts = await db.post.findMany({
    include: {
      user: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const postsAnonyms = posts.map(post => ({
    ...post,
    user: {
      ...post.user,
      name: anonymizeUsername(post.user.name)
    }
  }));

  return (
    <section className='z-0 my-5 container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {postsAnonyms.map((item, i) => (
          <div key={i} className="space-y-2">
            <Blockquote>
              {item.desc}
            </Blockquote>
            <BlockquoteAuthor>
              {`${item.user.name} — ${timeAgo(new Date(item.createdAt))}`}
              {session?.user?.id === item.user.id && <SupprimerPost id={item.id} />}
            </BlockquoteAuthor>
          </div>
        ))}
      </div>
    </section>
  );
}
