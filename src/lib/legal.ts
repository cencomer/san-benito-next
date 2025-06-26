import legalData from '@/data/legal.json';

export function getLegalContent(type: 'terms' | 'privacy' | 'contact') {
  return {
    title: legalData[type].title,
    content: legalData[type].content
  };
}
