'use client';

import { useTheme } from '../context/ThemeContext';
import prayersData from '../data/prayers.json';
import Link from 'next/link';

export default function Home() {
  const { darkMode } = useTheme();
  
  return (
    <div className={`max-w-6xl mx-auto p-8 md:p-12 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Oración Principal */}
      <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg mb-8`}>
        <h2 className={`text-2xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-700'} mb-4`}>🙏 Oración con la Medalla de San Benito</h2>
        <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {prayersData.mainPrayer.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Sección de navegación */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link 
          href="/oraciones-diarias"
          className={`p-6 rounded-xl shadow-lg transition-all hover:shadow-xl hover:scale-[1.01] ${darkMode ? 'bg-blue-900/50 hover:bg-blue-900/70' : 'bg-blue-50 hover:bg-blue-100'}`}
        >
          <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>🧎‍♂️ Oraciones Diarias</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Accede a las oraciones diarias recomendadas para tu devoción.
          </p>
        </Link>

        <Link 
          href="/novena"
          className={`p-6 rounded-xl shadow-lg transition-all hover:shadow-xl hover:scale-[1.01] ${darkMode ? 'bg-purple-900/50 hover:bg-purple-900/70' : 'bg-purple-50 hover:bg-purple-100'}`}
        >
          <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>📿 Novena a San Benito</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Realiza la novena de 9 días con oraciones especiales para cada día.
          </p>
        </Link>
      </div>
    </div>
  );
}
