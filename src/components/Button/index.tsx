import clsx from 'clsx';

type ButtonProps = {
  variant?: 'default' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
} & React.ComponentProps<'button'>;

export default function Button({
  variant = 'default',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  const buttonVariants = {
    default: clsx('bg-blue-600 hover:bg-blue-700 text-blue-100'),
    ghost: clsx('bg-slate-300 hover:bg-slate-400 text-slate-900'),
    danger: clsx('bg-red-600 hover:bg-red-700  text-red-100'),
  };
  const sizeVariants = {
    sm: clsx(
      'text-xs/tight',
      'px-2',
      'py-1',
      'rounded-sm',
      '[&_svg]:w-3',
      '[&_svg]:h-3',
      'gap-1',
    ),
    md: clsx(
      'px-4',
      'py-2',
      'text-base/tight',
      'rounded-md',
      '[&_svg]:w-4',
      '[&_svg]:h-4',
      'gap-2',
    ),
    lg: clsx(
      'px-8',
      'py-4',
      'text-lg/tight',
      'rounded-lg',
      '[&_svg]:w-5',
      '[&_svg]:h-5',
      'gap-3',
    ),
  };

  const buttonCLasses = clsx(
    buttonVariants[variant],
    sizeVariants[size],
    'flex',
    'items-center',
    'justify-center',
    'transition',
    'disabled:bg-slate-200',
    'disabled:text-slate-500',
    'disabled:cursor-not-allowed',
    'disabled:cursor-not-allowed',
    props.className,
  );
  return (
    <button className={buttonCLasses} {...props}>
      {children}
    </button>
  );
}
