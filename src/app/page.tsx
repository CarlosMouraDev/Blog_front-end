import { Container } from '@/components/Container/intex';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
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
        <Link className='w-full h-full overflow-hidden rounded-xl ' href='#'>
          <Image
            className='w-full h-full object-cover object-center group-hover:scale-105 transition'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Post'
            priority
          />
        </Link>
        <div className='flex flex-col gap-4 sm:justify-center'>
          <time
            className='text-slate-600 block text-sm/tight'
            dateTime='2025-08-05'
          >
            05/08/2025 15:00
          </time>

          <h1 className='text-2x1/tight font-extrabold sm:text-4xl'>
            <Link href='#'>Lorem ipsum dolor sit</Link>
          </h1>

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
