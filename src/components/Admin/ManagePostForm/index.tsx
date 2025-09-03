'use client';

import Button from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckBox';
import InputText from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkDownEditor';
import { useActionState, useEffect, useState } from 'react';
import { ImageUploader } from '../ImageUploader';
import { makePartialPublicPost, PublicPost } from '@/dto/post/dto';
import { createPostAction } from '@/actions/post/create-post-action';
import { toast } from 'react-toastify';
import { updatePostAction } from '@/actions/post/update-post-action copy';
import { useRouter, useSearchParams } from 'next/navigation';

type ManagePostFormUpdateProps = {
  mode: 'update';
  publicPost: PublicPost;
};

type ManagePostFormCreateProps = {
  mode: 'create';
};

type ManagePostFormProps =
  | ManagePostFormCreateProps
  | ManagePostFormUpdateProps;

export function ManagePostForm(props: ManagePostFormProps) {
  const { mode } = props;
  const searchParams = useSearchParams();
  const created = searchParams.get('created');
  const router = useRouter();

  let publicPost;
  if (mode === 'update') {
    publicPost = props.publicPost;
  }

  const actionsMap = {
    update: updatePostAction,
    create: createPostAction,
  };
  const initialState = {
    formState: makePartialPublicPost(publicPost),
    errors: [],
  };
  const [state, action, isPending] = useActionState(
    actionsMap[mode],
    initialState,
  );

  useEffect(() => {
    if (state.errors.length > 0) {
      toast.dismiss();
      state.errors.forEach(error => toast.error(error));
    }
  }, [state.errors]);

  useEffect(() => {
    if (state.success) {
      toast.dismiss();
      toast.success('Post atualizado com sucesso.');
    }
  }, [state.success]);

  useEffect(() => {
    if (created === '1') {
      toast.dismiss();
      toast.success('Post criado com sucesso.');
      const url = new URL(window.location.href);

      url.searchParams.delete('created');
      router.replace(url.toString());
    }
  }, [created]);

  const { formState } = state;

  // Campos controlados
  const [author, setAuthor] = useState(formState.author || '');
  const [title, setTitle] = useState(formState.title || '');
  const [excerpt, setExcerpt] = useState(formState.excerpt || '');
  const [coverImageUrl, setCoverImageUrl] = useState(
    formState.coverImageUrl || '',
  );
  const [published, setPublished] = useState(formState.published || false);
  const [contentValue, setContentValue] = useState(formState.content || '');

  // Atualiza campos controlados se formState mudar (ex: após submit)
  useEffect(() => {
    setAuthor(formState.author || '');
    setTitle(formState.title || '');
    setExcerpt(formState.excerpt || '');
    setCoverImageUrl(formState.coverImageUrl || '');
    setPublished(formState.published || false);
    setContentValue(formState.content || '');
  }, [formState]);

  return (
    <form action={action} className='mb-16'>
      <div className='flex flex-col gap-6'>
        <InputText
          labelText='ID'
          name='id'
          placeholder='Id gerado automaticamente'
          type='text'
          value={formState.id}
          disabled={isPending}
          readOnly
        />
        <InputText
          labelText='Slug'
          placeholder='Slug gerada automaticamente'
          name='slug'
          type='text'
          value={formState.slug}
          disabled={isPending}
          readOnly
        />

        <InputText
          labelText='Autor'
          placeholder='Digite o nome do autor do post'
          name='author'
          type='text'
          value={author}
          onChange={e => setAuthor(e.target.value)}
          disabled={isPending}
        />

        <InputText
          labelText='Título'
          placeholder='Digite o título do post'
          name='title'
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
          disabled={isPending}
        />

        <InputText
          labelText='Excerto'
          placeholder='Digite o resumo do post'
          name='excerpt'
          type='text'
          value={excerpt}
          onChange={e => setExcerpt(e.target.value)}
          disabled={isPending}
        />

        <MarkdownEditor
          labelText='Conteúdo'
          value={contentValue}
          setValue={setContentValue}
          textAreaName='content'
          disabled={isPending}
        />

        <ImageUploader disabled={isPending} />

        <InputText
          name='coverImageUrl'
          labelText='URL da imagem de capa'
          placeholder='Digite a URL da imagem de capa'
          type='text'
          value={coverImageUrl}
          onChange={e => setCoverImageUrl(e.target.value)}
          disabled={isPending}
        />

        <InputCheckbox
          name='published'
          labelText='Publicar?'
          type='checkbox'
          checked={published}
          onChange={e => setPublished(e.target.checked)}
          disabled={isPending}
        />

        <div className='mt-4'>
          <Button disabled={isPending} className='w-full' type='submit'>
            Enviar
          </Button>
        </div>
      </div>
    </form>
  );
}
