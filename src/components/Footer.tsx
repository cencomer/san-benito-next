'use client';

import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer className={`${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'} py-8 mt-12`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">San Benito App</h3>
            <p className="text-sm mt-1">Oraciones y novena de protección espiritual</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Términos</a>
            <a href="#" className="hover:underline">Privacidad</a>
            <a href="#" className="hover:underline">Contacto</a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} San Benito App. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
