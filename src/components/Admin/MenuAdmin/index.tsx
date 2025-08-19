'use client';

import clsx from 'clsx';
import {
  CircleXIcon,
  FileTextIcon,
  HouseIcon,
  MenuIcon,
  PlusIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);

  const navClasses = clsx(
    'bg-slate-900',
    'text-slate-100',
    'rounded-lg',
    'flex',
    'flex-col',
    'mb-8',
    'sm:flex-row',
    'sm:flex-wrap',
    !isOpen && 'h-10',
    !isOpen && 'overflow-hidden',
    'sm:overflow-visible',
    'sm:h-auto',
  );
  const linkClasses = clsx(
    '[&>svg]:w-[16px]',
    '[&>svg]:h-[16px]',
    'px-4',
    'flex',
    'items-center',
    'justify-start',
    'gap-2',
    'transition',
    'hover:bg-slate-800',
    'rounded-lg',
    'h-10',
    'shrink-0',
    'cursor-pointer',
  );

  const openCloseBtnClasses = clsx(
    linkClasses,
    'text-blue-200 italic sm:hidden',
  );

  return (
    <nav className={navClasses}>
      <button
        className={openCloseBtnClasses}
        onClick={() => setIsOpen(state => !state)}
      >
        {!isOpen && (
          <>
            <MenuIcon />
            Menu
          </>
        )}
        {isOpen && (
          <>
            <CircleXIcon />
            Menu
          </>
        )}
      </button>
      <a href='/' target='_blank' className={linkClasses}>
        <HouseIcon />
        Home
      </a>
      <Link className={linkClasses} href='/admin/post'>
        <FileTextIcon />
        Posts
      </Link>
      <Link className={linkClasses} href='/admin/post'>
        <PlusIcon />
        Criar post
      </Link>
    </nav>
  );
}
