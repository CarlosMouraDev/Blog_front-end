import { uploadImageAction } from '@/actions/upload/upload-image-action';
import Button from '@/components/Button';
import { IMAGE_UPLOAD_MAX_SIZE } from '@/lib/constants';
import { startTransition, useRef, useTransition } from 'react';
import { toast } from 'react-toastify';

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useTransition();

  function handleChooseFile() {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  function handleChange() {
    if (!fileInputRef.current) return;
    const fileInput = fileInputRef.current;
    const file = fileInput.files?.[0];

    if (!file) return;

    if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
      const readableMaxSize = IMAGE_UPLOAD_MAX_SIZE / 1024;
      toast.error(
        `Imagem muito grande. O tamanho máximo é: ${readableMaxSize}KB.`,
      );
      fileInput.value = '';
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    startTransition(async () => {
      const result = await uploadImageAction();
      if (result.error) {
        toast.error(`Erro ao enviar imagem: ${result.error}`);
        return;
      }

      toast.success(`Imagem enviada com sucesso: ${result.url}`);
    });

    fileInput.value = '';
  }
  return (
    <div className='flex flex-col gap-2 py-4'>
      <Button onClick={handleChooseFile} type='button' className='self-start'>
        Enviar Imagem
      </Button>
      <input
        name='file'
        type='file'
        accept='image/*'
        onChange={handleChange}
        ref={fileInputRef}
      />
    </div>
  );
}
