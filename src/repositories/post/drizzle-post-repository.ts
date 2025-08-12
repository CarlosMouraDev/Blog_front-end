import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';
import { postsTable } from '@/db/drizzle/schemas';
import { desc } from 'drizzle-orm';

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: desc(postsTable.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }
  async findAll(): Promise<PostModel[]>;
  async findById(id: string): Promise<PostModel>;
  async findBySlugPublic(slug: string): Promise<PostModel>;
}
