import { postRepository } from '@/repositories/post';
import { notFound } from 'next/navigation';
import { cache } from 'react';

export const findAllPublicPostsCashed = cache(
  async () => await postRepository.findAllPublic(),
);

export const findPostBySlugCached = cache(async (slug: string) => {
  let post;

  try {
    post = await postRepository.findBySlugPublic(slug);
  } catch {
    post = undefined;
  }

  if (!post) notFound();
  return post;
});

export const findByIdCached = cache(
  async (id: string) => await postRepository.findById(id),
);
