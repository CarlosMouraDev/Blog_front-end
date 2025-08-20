import clsx from 'clsx';
import { useId } from 'react';

type InputProps = {
  labelText?: string;
} & React.ComponentProps<'input'>;

export default function Input({ labelText = '', ...props }: InputProps) {
  const id = useId();
  return (
    <div className='flex flex-col gap-2'>
      {labelText && (
        <label htmlFor={id} className='block mb-1 font-medium'>
          {labelText}
        </label>
      )}
      <input
        className={clsx(
          'bg-white',
          'outline-0',
          'ring-2',
          'ring-slate-400',
          'rounded',
          'p-2',
          'text-base/tight',
          'transition',
          'focus:ring-blue-600',
          'placeholder-slate-300',
          'disabled:bg-slate-200',
          'disabled:text-slate-400',
          'disabled:cursor-not-allowed',
          'read-only:bg-slate-100',

          props.className,
        )}
        id={id}
        {...props}
      />
    </div>
  );
}
