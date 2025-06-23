'use client';

import { useTheme } from '../context/ThemeContext';

interface NovenaDayCardProps {
  day: number;
  title: string;
  prayer: string;
  isCompleted?: boolean;
  onToggleCompleted?: (day: number) => void;
}

export default function NovenaDayCard({ 
  day, 
  title, 
  prayer,
  isCompleted = false,
  onToggleCompleted
}: NovenaDayCardProps) {
  const { darkMode } = useTheme();
  
  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg mb-6 relative`}>
      <div className="absolute top-2 right-2 flex items-center gap-2">
        {isCompleted && (
          <span className={`text-xs font-semibold ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
            Completado
          </span>
        )}
        <button 
          onClick={() => onToggleCompleted?.(day)}
          className={`p-2 rounded-full border-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'} ${
            isCompleted 
              ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' 
              : 'bg-gray-200 hover:bg-gray-300 shadow'
          } transition-all`}
          aria-label={isCompleted ? 'Marcar como no completado' : 'Marcar como completado'}
        >
          {isCompleted ? '✓' : 'Día ' + day}
        </button>
      </div>
      
      <h3 className={`text-xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-700'} mb-4`}>
        Día {day}: {title}
      </h3>
      <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {prayer.split('\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
