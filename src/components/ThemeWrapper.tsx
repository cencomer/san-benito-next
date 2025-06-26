'use client';

import { useTheme } from "@/context/ThemeContext";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { darkMode } = useTheme();
  
  return (
    <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {children}
    </div>
  );
}
