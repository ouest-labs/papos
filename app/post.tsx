import { Blockquote, BlockquoteAuthor } from '@/components/ui/blockquote';

import { SupprimerPost } from '@/components/modules';
import { auth } from '@/auth';
import { createHash } from 'crypto';
import { db } from '@/prisma/db';
import timeAgo from '@/lib/time-ago';

function anonymizeUsername(username) {
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
    <div className='p-5 w-full flex flex-col h-fit justify-between space-y-2'>
      <section className='h-[calc(100vh-165px)] overflow-auto'>
        <article className='container'>
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
        </article>
      </section>
    </div>
  );
}
