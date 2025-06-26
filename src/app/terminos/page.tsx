import LegalContent from '@/components/LegalContent';
import { getLegalContent } from '@/lib/legal';

export default function TerminosPage() {
  const { title, content } = getLegalContent('terms');
  return <LegalContent title={title} content={content} />;
}
