'use client';

import { useTheme } from '../context/ThemeContext';
import { FaCheck, FaBookOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
    <motion.div 
      className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-xl shadow-lg mb-12 relative transition-all duration-300 hover:shadow-xl ${isCompleted ? (darkMode ? 'ring-2 ring-green-500' : 'ring-2 ring-green-400') : ''}`}
      whileHover={{ scale: 1.01 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="absolute -top-6 -right-4 flex items-center gap-2">
        {isCompleted && (
          <motion.span 
            className={`text-xs px-2 py-1 rounded-full font-semibold ${darkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-800'}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500 }}
          >
            Completado
          </motion.span>
        )}
        <motion.button 
          onClick={() => onToggleCompleted?.(day)}
          className={`p-3 rounded-full flex items-center justify-center ${darkMode ? 'border-gray-600' : 'border-gray-300'} ${
            isCompleted 
              ? 'bg-green-500 text-white shadow-lg' 
              : `${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} shadow`
          } transition-all`}
          aria-label={isCompleted ? 'Marcar como no completado' : 'Marcar como completado'}
          whileTap={{ scale: 0.95 }}
        >
          {isCompleted ? (
            <FaCheck className="text-lg" />
          ) : (
            <div className="flex flex-col items-center">
              <FaBookOpen className={`text-sm mb-0.5 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
              <span className={`text-xs ${darkMode ? 'text-white' : 'text-gray-800'}`}>Día {day}</span>
            </div>
          )}
        </motion.button>
      </div>
      
      <h3 className={`text-xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-700'} mb-4`}>
        Día {day}: {title}
      </h3>
      <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
        {prayer.split('\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </motion.div>
  );
}
