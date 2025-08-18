import { deletePostAction } from '@/actions/post/delete-post-action';
import { findAllPostAdmin } from '@/lib/post/queries/admin';
import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';
import Link from 'next/link';
import DeletePostButton from '../DeletePostButton';
import ErrorMessage from '@/components/ErrorMessage';

export default async function PostsListAdmin() {
  const posts = await findAllPostAdmin();

  if (posts.length <= 0) {
    return (
      <ErrorMessage
        contentTitle='Ops 😅'
        content='Ainda não criamos nenhum post.'
      />
    );
  }

  return (
    <div className='mb-16'>
      {posts.map(post => {
        return (
          <div
            key={post.id}
            className={clsx(
              `py-2 px-2`,
              !post.published && `bg-slate-300`,
              'flex',
              'gap-2',
              'items-center',
              'justify-between',
            )}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

            {!post.published && (
              <span className='text-xs text-slate-600 italic'>
                (Não publicado)
              </span>
            )}
            <DeletePostButton id={post.id} title={post.title} />
          </div>
        );
      })}
    </div>
  );
}
