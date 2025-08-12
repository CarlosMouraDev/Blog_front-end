import { Container } from '@/components/Container/intex';
import FeaturedPost from '@/components/FeaturedPost';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Suspense fallback={<SpinLoader />}>
      <FeaturedPost />
      <PostsList />
    </Suspense>
  );
}
