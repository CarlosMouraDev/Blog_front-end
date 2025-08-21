'use server';

import { IMAGE_UPLOAD_MAX_SIZE } from '@/lib/constants';

type UploadImageActionResult = {
  url: string;
  error: string;
};

export async function uploadImageAction(
  formData: FormData,
): Promise<UploadImageActionResult> {
  const makeResult = ({ url = '', error = '' }) => ({ url, error });

  if (!(formData instanceof FormData)) {
    return makeResult({ error: 'Dados inválidos' });
  }

  const file = formData.get('file');

  if (!(file instanceof File)) {
    return makeResult({ error: 'Dados inválidos.' });
  }

  if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
    return makeResult({
      error: `Arquivo muito grande.`,
    });
  }

  if (!file.type.startsWith('image/')) {
    return makeResult({
      error: 'O arquivo deve ser uma imagem.',
    });
  }
  return makeResult({ url: 'URL' });
}
