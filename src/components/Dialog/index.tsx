import clsx from 'clsx';

type DialogProps = {
  isVisible?: boolean;
  title: string;
  content: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  disabled: boolean;
};

export default function Dialog({
  isVisible = false,
  title,
  content,
  onCancel,
  onConfirm,
  disabled,
}: DialogProps) {
  if (!isVisible) return false;

  function handleCancel() {
    if (disabled) return;

    onCancel();
  }
  return (
    <div
      className={clsx(
        'fixed',
        'z-50',
        'inset-0',
        'top-0',
        'bottom-0',
        'left-0',
        'right-0',
        'bg-black/50',
        'backdrop-blur-xs',
        'flex',
        'items-center',
        'justify-center',
      )}
      onClick={handleCancel}
    >
      <div
        className={clsx(
          'bg-slate-100',
          'p-6',
          'rounded-lg',
          'max-w-2xl',
          'mx-6',
          'flex',
          'flex-col',
          'gap-6',
          'shadow-lg',
          'shadow-black/30',
        )}
        role='dialog'
        aria-modal={true}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
        onClick={e => e.stopPropagation()}
      >
        <h3 id='dialog-title' className='text-xl font-extrabold'>
          {title}
        </h3>
        <p id='dialog-description'>{content}</p>
        <div className='flex items-center justify-around'>
          <button
            className={clsx(
              'bg-slate-200',
              'text-slate-950',
              'transition',
              'flex',
              'hover:bg-slate-300',
              'items-center',
              'justify-center',
              'py-2',
              'px-4',
              'rounded-lg',
              'cursor-pointer',
              'disabled:bg-slate-200',
              'disabled:text-slate-400',
              'disabled:cursor-not-allowed',
            )}
            autoFocus
            onClick={handleCancel}
            disabled={disabled}
          >
            cancelar
          </button>
          <button
            className={clsx(
              'bg-blue-500',
              'hover:bg-blue-600',
              'transition',
              'text-blue-50',
              'flex',
              'items-center',
              'justify-center',
              'py-2',
              'px-4',
              'rounded-lg',
              'cursor-pointer',
              'disabled:bg-slate-200',
              'disabled:text-slate-400',
              'disabled:cursor-not-allowed',
            )}
            onClick={onConfirm}
            disabled={disabled}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
