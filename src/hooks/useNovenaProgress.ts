'use client';

import { useState, useEffect } from 'react';

export default function useNovenaProgress() {
  const [completedDays, setCompletedDays] = useState<number[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('novenaProgress');
    if (saved) {
      setCompletedDays(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage when completedDays changes
  useEffect(() => {
    localStorage.setItem('novenaProgress', JSON.stringify(completedDays));
  }, [completedDays]);

  const toggleDayCompleted = (day: number) => {
    setCompletedDays(prev => 
      prev.includes(day) 
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const clearProgress = () => {
    setCompletedDays([]);
    localStorage.removeItem('novenaProgress');
  };

  return { completedDays, toggleDayCompleted, clearProgress };
}
