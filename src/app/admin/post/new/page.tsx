import { ManagePostForm } from '@/components/Admin/ManagePostForm';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Criar post',
  description: 'Página para criar um novo post no blog.',
};

export default async function AdminPostNewPage() {
  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-xl font-extrabold'>Criar post</h1>
      <ManagePostForm mode='create' />
    </div>
  );
}
