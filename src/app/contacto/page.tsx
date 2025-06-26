import LegalContent from '@/components/LegalContent';
import { getLegalContent } from '@/lib/legal';

export default function ContactoPage() {
  const { title, content } = getLegalContent('contact');
  return <LegalContent title={title} content={content} />;
}
