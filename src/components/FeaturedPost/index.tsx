import clsx from 'clsx';
import PostCoverImage from '../PostCoverImage';
import PostSummary from '../PostSummary';
import { findAllPublicPosts } from '@/lib/post/queries';

export default async function FeaturedPost() {
  const posts = await findAllPublicPosts();
  const post = posts[0];

  const slug = 'placeholder';

  const postLink = `/post/${slug}`;

  return (
    <section
      className={clsx(
        'grid',
        'grid-cols-1',
        'gap-8',
        'mb-16',
        'sm:grid-cols-2',
        'group',
      )}
    >
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: post.coverImageUrl,
          alt: post.title,
          priority: true,
        }}
      />

      <PostSummary
        postLink={postLink}
        postHeading={'h1'}
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        title={post.title}
      />
    </section>
  );
}
