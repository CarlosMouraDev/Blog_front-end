import { findAllPostAdmin } from '@/lib/post/queries/admin';

export default async function PostsListAdmin() {
  const posts = await findAllPostAdmin();
  return (
    <div className='py-16 text-6x1'>
      {posts.map(post => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}
