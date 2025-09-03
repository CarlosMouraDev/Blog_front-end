import { hashPassword } from '@/lib/login/password-hashing';

(async () => {
  const minhaSenha = ''; // DO NOT FORGET TO REMOVE YOUR PASSWORD LATER
  const hashDaSuaSenhaEmBase64 = await hashPassword(minhaSenha);

  console.log({ hashDaSuaSenhaEmBase64 });
})();
