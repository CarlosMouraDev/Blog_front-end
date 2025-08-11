import clsx from 'clsx';
import PostCoverImage from '../PostCoverImage';
import { PostHeading } from '../PostHeading';
import { formatDatetime, formatRelativeDate } from '@/utils/format-datetime';
import PostSummary from '../PostSummary';

export default function FeaturedPost() {
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
          href: '#',
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: '/images/bryen_9.png',
          alt: 'post image',
          priority: true,
        }}
      />

      <PostSummary
        postLink={postLink}
        postHeading={'h1'}
        createdAt={'2025-04-12T06:31:23.411Z'}
        excerpt={
          'O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO.'
        }
        title={'Rotina matinal de pessoas altamente eficazes'}
      />
    </section>
  );
}
