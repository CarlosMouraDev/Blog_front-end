import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <p className='py-8'>
        <span>Copyright &copy; {new Date().getFullYear()} - </span>
        <Link href='/'>The Blog</Link>
      </p>
    </footer>
  );
}
