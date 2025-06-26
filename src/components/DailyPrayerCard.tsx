'use client';

import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

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
  const [isAnimating, setIsAnimating] = useState(false);

  const copyToClipboard = () => {
    const textToCopy = children?.toString() || '';
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        toast.success('Texto copiado', {
          position: 'bottom-center',
          style: {
            background: darkMode ? '#1f2937' : '#ffffff',
            color: darkMode ? '#ffffff' : '#1f2937',
          }
        });
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 1000);
      })
      .catch(err => {
        console.error('Error al copiar texto:', err);
        toast.error('Error al copiar', {
          position: 'bottom-center',
          style: {
            background: darkMode ? '#1f2937' : '#ffffff',
            color: darkMode ? '#ffffff' : '#1f2937',
          }
        });
      });
  };

  return (
    <div className={`border-l-4 ${borderColor} pl-4 mb-6 transition-all duration-300 hover:shadow-md hover:translate-x-1 ${darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-blue-50'} rounded-r-lg p-3`}>
      <h4 className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-700'} text-lg mb-2 flex items-center`}>
        <span className="mr-2" aria-hidden="true">{emoji}</span>
        {title}
      </h4>
      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-3`}>
        {children}
      </p>
      <button 
        onClick={copyToClipboard}
        className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm transition-all ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-blue-400' : 'bg-blue-100 hover:bg-blue-200 text-blue-600'} ${isAnimating ? 'animate-pulse' : ''}`}
        aria-label={`Copiar oración: ${title}`}
      >
        <FaCopy className={isAnimating ? 'text-green-500' : ''} />
        <span>Copiar oración</span>
      </button>
    </div>
  );
}
