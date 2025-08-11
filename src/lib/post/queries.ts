import { postRepository } from '@/repositories/post';
import { cache } from 'react';

export const findAllPublicPosts = cache(
  async () => await postRepository.findAllPublic(),
);

export const findPostBySlugCached = cache(
  async (slug: string) => await postRepository.findBySlug(slug),
);

export const findByIdCached = cache(
  async (id: string) => await postRepository.findById(id),
);
