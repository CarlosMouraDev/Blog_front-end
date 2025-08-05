import Link from 'next/link';

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};

export function PostHeading({
  children,
  url,
  as: Tag = 'h2',
}: PostHeadingProps) {
  const headingClasssesMap = {
    h1: 'text-2x1/tight font-extrabold sm:text-4xl',
    h2: 'text-2x1/tight font-extrabold sm:text-4xl',
  };

  return (
    <Tag className={headingClasssesMap[Tag]}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
