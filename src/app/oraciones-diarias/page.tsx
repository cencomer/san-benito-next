'use client';

import { useTheme } from '@/context/ThemeContext';
import DailyPrayerCard from '@/components/DailyPrayerCard';
import prayers from '@/data/prayers.json';

export default function DailyPrayersPage() {
  const { darkMode } = useTheme();
  return (
     <div className={`max-w-6xl mx-auto p-8 md:p-12 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <h1 className={`text-3xl font-bold text-center mb-8 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>Oraciones Diarias</h1>
      
      <div className="space-y-6">
        {prayers.dailyPrayers.map((prayer, index) => (
          <DailyPrayerCard
            key={index}
            title={prayer.title}
            emoji={prayer.emoji}
            borderColor={prayer.borderColor}
          >
            {prayer.content}
          </DailyPrayerCard>
        ))}
      </div>
    </div>
  );
}
