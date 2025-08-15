import { formatDatetime, formatDistanceToNow } from '@/utils/format-datetime';

type PostDateProps = {
  dateTime: string;
};

export default function PostDate({ dateTime }: PostDateProps) {
  return (
    <time
      className='text-slate-600 text-sm/tight'
      dateTime={dateTime}
      title={formatDatetime(dateTime)}
    >
      {formatDistanceToNow(dateTime)}
    </time>
  );
}
