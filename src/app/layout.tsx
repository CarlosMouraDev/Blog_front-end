import { Container } from '@/components/Container/intex';
import './globals.css';
import { Header } from '@/components/Header';
import { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import ToastifyContainer from '@/components/ToastifyContainer';

export const metadata: Metadata = {
  title: {
    default: 'The blog - Feito com Next.js',
    template: '%s | The blog',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
        <ToastifyContainer />
      </body>
    </html>
  );
}
