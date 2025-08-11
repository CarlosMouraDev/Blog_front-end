import clsx from 'clsx';
import PostCoverImage from '../PostCoverImage';
import { PostHeading } from '../PostHeading';
import { formatDatetime, formatRelativeDate } from '@/utils/format-datetime';

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
      <div className='flex flex-col gap-4 sm:justify-center'>
        <time
          className='text-slate-600 block text-sm/tight'
          dateTime={formatDatetime('2025-08-05')}
          title={formatDatetime('2025-08-05')}
        >
          {formatRelativeDate('05/08/2025 15:00')}
        </time>

        <PostHeading as='h1' url='#'>
          Lorem ipsum dolor sit amet.
        </PostHeading>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime
          iste quos ut porro animi tempore saepe, voluptas iure ullam at
          corrupti molestias alias harum dolorem id rerum expedita, voluptates
          quasi maiores qui magnam aut tempora enim? Aspernatur, vero possimus!
        </p>
      </div>
    </section>
  );
}
