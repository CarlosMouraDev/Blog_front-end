'use client';

import Button from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckBox';
import InputText from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkDownEditor';
import { useState } from 'react';
import { ImageUploader } from '../ImageUploader';

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState('');

  return (
    <form action='' className='mb-16'>
      <div className='flex flex-col gap-6'>
        <InputText
          labelText='ID'
          name='id'
          placeholder='Id gerado automaticamente'
          type='text'
          defaultValue={''}
          readOnly
        />
        <InputText
          labelText='Slug'
          placeholder='Slug gerada automaticamente'
          name='slug'
          type='text'
          defaultValue={''}
          readOnly
        />

        <InputText
          labelText='Autor'
          placeholder='Digite o nome do autor do post'
          name='author'
          type='text'
          defaultValue={''}
        />

        <InputText
          labelText='Título'
          placeholder='Digite o título do post'
          name='title'
          type='text'
          defaultValue={''}
        />

        <InputText
          labelText='Excerto'
          placeholder='Digite o resumo do post'
          name='excerpt'
          type='text'
          defaultValue={''}
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
          defaultValue={''}
        />

        <InputCheckbox name='published' labelText='Publicar?' type='checkbox' />

        <div className='mt-4'>
          <Button className='w-full' type='submit'>
            Enviar
          </Button>
        </div>
      </div>
    </form>
  );
}
