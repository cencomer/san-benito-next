'use client';

import { useTheme } from "@/context/ThemeContext";

interface LegalContentProps {
  title: string;
  content: string[];
}

export default function LegalContent({ title, content }: LegalContentProps) {
  const { darkMode } = useTheme();
  return (
    <div className={`max-w-6xl mx-auto p-8 md:p-12 shadow-md rounded-b-xl mt-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <h1 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h1>
      <div className={`prose prose-lg ${darkMode ? 'dark:prose-invert text-gray-300' : 'text-gray-700'}`}>
        {content.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
