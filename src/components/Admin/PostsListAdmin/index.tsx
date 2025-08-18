import { deletePostAction } from '@/actions/post/delete-post-action';
import { findAllPostAdmin } from '@/lib/post/queries/admin';
import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';
import Link from 'next/link';
import DeletePostButton from '../DeletePostButton';

export default async function PostsListAdmin() {
  const posts = await findAllPostAdmin();
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
      <div
        className={clsx(
          'fixed',
          'z-50',
          'inset-0',
          'top-0',
          'bottom-0',
          'left-0',
          'right-0',
          'bg-black/50',
          'backdrop-blur-xs',
          'flex',
          'items-center',
          'justify-center',
        )}
      >
        <div
          className={clsx(
            'bg-slate-100',
            'p-6',
            'rounded-lg',
            'max-w-2xl',
            'mx-6',
            'flex',
            'flex-col',
            'gap-6',
            'shadow-lg',
            'shadow-black/30',
          )}
        >
          <h3 className='text-xl font-extrabold'>Titulo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus,
            facere eum ipsum porro cupiditate sit facilis consequuntur expedita
            sunt fuga! Maiores laborum, distinctio labore, nihil at nobis quo
            alias corrupti et delectus ea officia incidunt sequi minus eius
            voluptas? Perspiciatis.
          </p>
          <div className='flex items-center justify-around'>
            <button
              className={clsx(
                'bg-slate-200',
                'text-slate-950',
                'transition',
                'flex',
                'hover:bg-slate-300',
                'items-center',
                'justify-center',
                'py-2',
                'px-4',
                'rounded-lg',
                'cursor-pointer',
              )}
              autoFocus
            >
              cancelar
            </button>
            <button
              className={clsx(
                'bg-blue-500',
                'hover:bg-blue-600',
                'transition',
                'text-blue-50',
                'flex',
                'items-center',
                'justify-center',
                'py-2',
                'px-4',
                'rounded-lg',
                'cursor-pointer',
              )}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
