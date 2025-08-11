import { postRepository } from '@/repositories/post';
import PostCoverImage from '../PostCoverImage';
import { PostHeading } from '../PostHeading';
import { formatDatetime, formatRelativeDate } from '@/utils/format-datetime';

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {posts.map(post => {
        const postLink = `/post/${post.slug}`;

        return (
          <div key={post.id} className='flex flex-col group gap-4'>
            <PostCoverImage
              linkProps={{
                href: postLink,
              }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />
            <time
              className='text-slate-600 block text-sm/tight'
              dateTime={post.createdAt}
              title={formatDatetime(post.createdAt)}
            >
              {formatRelativeDate(post.createdAt)}
            </time>

            <PostHeading as='h1' url={postLink}>
              {post.title}
            </PostHeading>

            <p>{post.excerpt}</p>
          </div>
        );
      })}
    </div>
  );
}
