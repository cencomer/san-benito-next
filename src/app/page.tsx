'use client';

import { useState } from 'react';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import useNovenaProgress from '../hooks/useNovenaProgress';
import DailyPrayerCard from '../components/DailyPrayerCard';
import NovenaDayCard from '../components/NovenaDayCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import prayersData from '../data/prayers.json';
import { FaRegTrashCan } from "react-icons/fa6";
// Image and Link imports removed as they were unused

function HomeContent() {
  const [activeTab, setActiveTab] = useState('oracion');
  // Mobile menu state and toggle removed as they were unused

  const { dailyPrayers, novenaDays } = prayersData;
  const { darkMode, toggleDarkMode } = useTheme();
  const { completedDays, toggleDayCompleted, clearProgress } = useNovenaProgress();
  const [showClearModal, setShowClearModal] = useState(false);
  const completedCount = completedDays.length;
  
  return (
    <>
      <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-overlay'} text-gray-800 font-sans`}>
        <Navbar />

        {/* Dark Mode Toggle */}
        <div className="fixed top-20 right-4 z-10">
          <button 
            onClick={toggleDarkMode}
            className={`${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} p-2 rounded-full shadow transition`}
            aria-label="Cambiar modo oscuro"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Main Content */}
        <main className="pt-24 pb-10 px-4 sm:px-8 max-w-4xl mx-auto">
          <header className={`text-center mb-10 ${darkMode ? 'bg-gray-800/80' : 'bg-white/10'} backdrop-blur-lg rounded-xl p-6 shadow`}>
            <h1 className={`text-5xl font-extrabold ${darkMode ? 'text-blue-400' : 'text-blue-800'} drop-shadow-sm`}>San Benito</h1>
            <p className={`text-lg mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>🙏 Oración y 🕊️ Novena de protección espiritual</p>
          </header>

          {/* Tab Navigation */}
          <nav className="flex justify-center flex-wrap gap-2 mb-6">
            <button 
              onClick={() => setActiveTab('oracion')}
              className={`px-4 py-2 rounded-full shadow transition ${activeTab === 'oracion' ? 'bg-blue-600 text-white' : darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Oración
            </button>
            {novenaDays.map((day) => (
              <button
                key={`tab-${day.day}`}
                onClick={() => setActiveTab(`dia-${day.day}`)}
                className={`px-4 py-2 rounded-full shadow transition ${activeTab === `dia-${day.day}` ? 'bg-blue-600 text-white' : darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                Día {day.day}
              </button>
            ))}
          </nav>

          {/* Tab Content */}
          <div className="space-y-8">
            {activeTab === 'oracion' ? (
              <section id="oracion" className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg`}>
                <h2 className={`text-2xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-700'} mb-4`}>🙏 Oración con la Medalla de San Benito</h2>
                <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {prayersData.mainPrayer.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <hr className={`my-6 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} />

                <div id="oraciones-diarias" className="mt-6">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-4 flex items-center`}>
                    <span className="mr-2">🧎‍♂️</span> Oraciones Diarias
                  </h3>

                  {dailyPrayers.map((prayer) => (
                    <DailyPrayerCard 
                      key={prayer.title}
                      title={prayer.title}
                      emoji={prayer.emoji}
                      borderColor={prayer.borderColor}
                    >
                      {prayer.content}
                    </DailyPrayerCard>
                  ))}
                </div>
              </section>
            ) : (
              <section>
                <div className={`space-y-4 shadow-md rounded-xl border-t border-b mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'} p-6`}>
                  <p>{prayersData.novenaCommon.preparation}</p>
                </div>
                {novenaDays.map((day) => (
                  activeTab === `dia-${day.day}` && (
                    <NovenaDayCard
                      key={`novena-day-${day.day}`}
                      day={day.day}
                      title={day.title}
                      prayer={day.prayer}
                      isCompleted={completedDays.includes(day.day)}
                      onToggleCompleted={toggleDayCompleted}
                    />
                  )
                ))}
              </section>
            )}
          </div>
        </main>
      </div>
      <Footer />
      <div className="fixed bottom-4 right-4 flex items-center gap-4">
        {completedCount > 0 && (
          <div className={`px-4 py-2 rounded-full shadow ${
            darkMode ? 'bg-gray-800 text-green-300' : 'bg-green-100 text-green-800'
          }`}>
            {completedCount} día{completedCount !== 1 ? 's' : ''} completado{completedCount !== 1 ? 's' : ''}
          </div>
        )}
        <button 
          onClick={() => setShowClearModal(true)}
          className="bg-red-500 text-white px-4 py-2 rounded-full shadow hover:bg-red-600 transition flex items-center gap-2"
        >
          <span><FaRegTrashCan /></span>
          <span>Limpiar</span>
        </button>
      </div>

      {/* Modal de confirmación */}
      {showClearModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`p-6 rounded-xl shadow-xl max-w-md w-full ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h3 className={`text-xl font-bold mb-4 ${
              darkMode ? 'text-red-400' : 'text-red-600'
            }`}>Confirmar</h3>
            <p className={`mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>¿Estás seguro de que deseas borrar todo tu progreso?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowClearModal(false)}
                className={`px-4 py-2 rounded-lg ${
                  darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  clearProgress();
                  setShowClearModal(false);
                }}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
              >
                Limpiar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}
