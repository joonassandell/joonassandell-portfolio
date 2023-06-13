import { HomePage } from '@/features/Home';
import { getSitemap } from '@/lib/utility';

const { id, title } = getSitemap('home');

export default function Page() {
  return <HomePage id={id} title={title} />;
}