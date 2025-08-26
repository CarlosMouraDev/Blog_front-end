'use server';

import { PublicPost } from '@/dto/post/dto';

type createPostActionState = {
  formState: PublicPost;
  errors: string[];
};

export async function createPostAction(
  prevState: createPostActionState,
  formData: FormData,
): Promise<createPostActionState> {
  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ['Dados inválidos.'],
    };
  }

  const formDataObj = Object.fromEntries(formData.entries());

  return {
    formState: { ...prevState.formState },
    errors: [],
  };
}
