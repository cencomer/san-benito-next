'use client';

import { useState } from 'react';
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Novena de San Benito',
          text: 'Únete a esta novena de protección espiritual',
          url: window.location.href
        });
      } else {
        // Fallback para navegadores que no soportan Web Share API
        await navigator.clipboard.writeText(window.location.href);
        alert('Enlace copiado al portapapeles');
      }
    } catch (err) {
      console.error('Error al compartir:', err);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md z-20 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <span className="text-2xl mr-2">✝️</span>
            <span className={`font-bold ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>San Benito</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#oracion" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition`}>Inicio</Link>
            <Link href="#oraciones-diarias" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition`}>Oraciones</Link>
            <Link href="#dias-container" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition`}>Novena</Link>
            <button 
              onClick={handleShare}
              className="bg-green-600 text-white px-4 py-1 rounded-full shadow hover:bg-green-700 transition flex items-center gap-2"
            >
              <span>↗️</span>
              <span>Compartir</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} focus:outline-none`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="#oracion" 
              className={`block px-3 py-2 ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}
              onClick={toggleMobileMenu}
            >
              Inicio
            </Link>
            <Link 
              href="#oraciones-diarias" 
              className={`block px-3 py-2 ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}
              onClick={toggleMobileMenu}
            >
              Oraciones
            </Link>
            <Link 
              href="#dias-container" 
              className={`block px-3 py-2 ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}
              onClick={toggleMobileMenu}
            >
              Novena
            </Link>
            <button 
              className={`block w-full text-left px-3 py-2 ${darkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-800'} flex items-center gap-2`}
              onClick={() => {
                handleShare();
                toggleMobileMenu();
              }}
            >
              <span>↗️</span>
              <span>Compartir</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
