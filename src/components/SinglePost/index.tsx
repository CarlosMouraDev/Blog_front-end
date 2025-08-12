import Image from 'next/image';
import { findPostBySlugCached } from '@/lib/post/queries';
import { PostHeading } from '../PostHeading';
import PostDate from '../PostDate';

type SinglePostProps = {
  slug: string;
};

export default async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <div>
      <header className='group flex flex-col gap-4 mb-4'>
        <Image
          className='rounded-xl'
          src={post.coverImageUrl}
          width={1200}
          height={720}
          alt={post.title}
        />

        <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>

        <p>
          {post.author} | <PostDate dateTime={post.createdAt} />
        </p>
      </header>

      <p className='text-xl mb-4 text-slate-600'>{post.excerpt}</p>

      <div>{post.content}</div>
    </div>
  );
}
