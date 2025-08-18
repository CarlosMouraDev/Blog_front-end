'use client';

import { Bounce, ToastContainer } from 'react-toastify';

export default function ToastifyContainer() {
  return (
    <ToastContainer
      position='bottom-center'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      theme='light'
      transition={Bounce}
    />
  );
}
