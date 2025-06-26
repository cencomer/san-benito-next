import LegalContent from '@/components/LegalContent';
import { getLegalContent } from '@/lib/legal';

export default function PrivacidadPage() {
  const { title, content } = getLegalContent('privacy');
  return <LegalContent title={title} content={content} />;
}
