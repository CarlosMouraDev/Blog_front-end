import { findPostBySlugCached } from '@/lib/post/queries';
type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug);

  return <h1 className='text-7x1 font-extrabold py-16'>{post.title}</h1>;
}
