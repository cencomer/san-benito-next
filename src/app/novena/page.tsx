'use client';

import { useTheme } from '@/context/ThemeContext';
import NovenaDayCard from '@/components/NovenaDayCard';
import useNovenaProgress from '@/hooks/useNovenaProgress';
import prayers from '@/data/prayers.json';

export default function NovenaPage() {
  const { darkMode } = useTheme();
  const { completedDays, toggleDayCompleted, clearProgress } = useNovenaProgress();

  return (
    <div className={`max-w-6xl mx-auto p-8 md:p-12 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <h1 className={`text-3xl font-bold text-center mb-8 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>Novena a San Benito</h1>

      <div className="mb-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Preparación</h2>
        <div className="space-y-4">
          {prayers.novenaCommon.preparation.split('\n').map((p, i) => (
            <p key={`prep-${i}`}>{p}</p>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {prayers.novenaDays.map(day => (
          <NovenaDayCard
            key={day.day}
            day={day.day}
            title={day.title}
            prayer={day.prayer}
            isCompleted={completedDays.includes(day.day)}
            onToggleCompleted={toggleDayCompleted}
          />
        ))}
      </div>

      <div className="mt-12 p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Oración Final</h2>
        <div className="space-y-4">
          {prayers.novenaCommon.final.split('\n').map((p, i) => (
            <p key={`final-${i}`}>{p}</p>
          ))}
        </div>
      </div>

      {completedDays.length > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => {
              if (window.confirm('¿Estás seguro que deseas reiniciar tu progreso en la novena?\nSe borrarán todos los días marcados como completados.')) {
                clearProgress();
              }
            }}
            className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-red-700 hover:bg-red-600' : 'bg-red-500 hover:bg-red-600'} text-white transition flex items-center gap-2`}
          >
            <span>🗑️</span>
            <span>Limpiar progreso</span>
          </button>
        </div>
      )}
    </div>
  );
}
