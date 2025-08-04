import { Container } from '@/components/Container/intex';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { postRepository } from '@/repositories/post';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <header>
        <h1 className='text-6xl font-bold text-center py-8'>Header</h1>
        <p className='text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          eveniet natus optio reprehenderit, necessitatibus mollitia sequi
          tempore nulla maxime dignissimos itaque obcaecati at et ducimus fuga
          nemo commodi cum? Officiis, ad quibusdam? Deleniti dolorum perferendis
          laboriosam saepe aperiam in minus beatae odio consequuntur nostrum
          natus eveniet consequatur maiores accusamus aliquid, a assumenda
          adipisci. Consectetur aspernatur enim at, ut suscipit quibusdam beatae
          nobis totam iste autem temporibus! Ratione qui iure velit distinctio,
          provident voluptate non voluptatum corporis quam odio culpa? Nostrum
          commodi similique autem nulla architecto molestiae ducimus facere! Nam
          labore dolorum dolor fuga, eaque quod ipsum aperiam tempore ad dolore
          odio, officia voluptate delectus, laboriosam nihil aliquid consequatur
          corporis cum! Soluta est perspiciatis nisi sequi id autem voluptates?
          Repellendus, rem provident. Repellendus consequuntur voluptatem sequi
          libero recusandae iusto repellat dolorem. Quae exercitationem aliquam
          illum. Quod earum molestiae exercitationem est et quae ex sapiente eum
          quasi cumque tenetur, reiciendis nihil natus, impedit quos ipsum
        </p>
      </header>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <h1 className='text-6xl font-bold text-center py-8'>footer</h1>
      </footer>
    </Container>
  );
}
