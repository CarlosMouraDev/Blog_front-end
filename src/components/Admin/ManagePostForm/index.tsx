'use client';

import Button from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckBox';
import InputText from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkDownEditor';
import { useActionState, useState } from 'react';
import { ImageUploader } from '../ImageUploader';
import { makePartialPublicPost, PublicPost } from '@/dto/post/dto';
import { createPostAction } from '@/actions/post/create-post-action';

type ManagePostFormProps = {
  publicPost?: PublicPost;
};

export function ManagePostForm({ publicPost }: ManagePostFormProps) {
  const initialState = {
    formState: makePartialPublicPost(publicPost),
    errors: [],
  };
  const [state, action, isPending] = useActionState(
    createPostAction,
    initialState,
  );

  const { formState } = state;
  const [contentValue, setContentValue] = useState(publicPost?.content || '');

  return (
    <form action='' className='mb-16'>
      <div className='flex flex-col gap-6'>
        <InputText
          labelText='ID'
          name='id'
          placeholder='Id gerado automaticamente'
          type='text'
          defaultValue={formState.id}
          readOnly
        />
        <InputText
          labelText='Slug'
          placeholder='Slug gerada automaticamente'
          name='slug'
          type='text'
          defaultValue={formState.slug}
          readOnly
        />

        <InputText
          labelText='Autor'
          placeholder='Digite o nome do autor do post'
          name='author'
          type='text'
          defaultValue={formState.author}
        />

        <InputText
          labelText='Título'
          placeholder='Digite o título do post'
          name='title'
          type='text'
          defaultValue={formState.title}
        />

        <InputText
          labelText='Excerto'
          placeholder='Digite o resumo do post'
          name='excerpt'
          type='text'
          defaultValue={formState.excerpt}
        />

        <MarkdownEditor
          labelText='Conteúdo'
          value={contentValue}
          setValue={setContentValue}
          textAreaName='content'
          disabled={false}
        />

        <ImageUploader />

        <InputText
          name='coverImageUrl'
          labelText='URL da imagem de capa'
          placeholder='Digite a URL da imagem de capa'
          type='text'
          defaultValue={formState.coverImageUrl}
        />

        <InputCheckbox
          name='published'
          labelText='Publicar?'
          type='checkbox'
          defaultChecked={formState.published}
        />

        <div className='mt-4'>
          <Button className='w-full' type='submit'>
            Enviar
          </Button>
        </div>
      </div>
    </form>
  );
}
