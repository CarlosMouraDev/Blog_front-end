import { Container } from '@/components/Container/intex';
import { Header } from '@/components/Header';
import PostCoverImage from '@/components/PostCoverImage';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

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
            dateTime='2025-08-05'
          >
            05/08/2025 15:00
          </time>

          <PostHeading as='h1' url='#'>
            Lorem ipsum dolor sit amet.
          </PostHeading>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            maxime iste quos ut porro animi tempore saepe, voluptas iure ullam
            at corrupti molestias alias harum dolorem id rerum expedita,
            voluptates quasi maiores qui magnam aut tempora enim? Aspernatur,
            vero possimus!
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <h1 className='text-6xl font-bold text-center py-8'>footer</h1>
      </footer>
    </Container>
  );
}
