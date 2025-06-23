'use client';

import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

export default function DailyPrayerCard({ 
  title, 
  emoji, 
  borderColor, 
  children 
}: {
  title: string;
  emoji: string;
  borderColor: string;
  children: React.ReactNode;
}) {
  const { darkMode } = useTheme();
  // Modal state removed as it was unused

  const copyToClipboard = () => {
    const textToCopy = children?.toString() || '';
    navigator.clipboard.writeText(textToCopy)
      .then(() => alert('Texto copiado al portapapeles'))
      .catch(err => console.error('Error al copiar texto:', err));
  };

  return (
    <>
      <div className={`border-l-4 ${borderColor} pl-4 mb-6`}>
        <h4 className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-700'} text-lg mb-2 flex items-center`}>
          <span className="mr-2 text-blue-500" aria-hidden="true">{emoji}</span>
          {title}
        </h4>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
          {children}
        </p>
        <div className="flex gap-2 mt-3">
          <button 
            onClick={copyToClipboard}
            className={`text-xs ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} flex items-center`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copiar
          </button>
        </div>
      </div>
    </>
  );
}
