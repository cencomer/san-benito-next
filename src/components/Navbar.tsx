'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { toast } from 'react-hot-toast';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'oracion' | 'oraciones' | 'novena'>('oracion');
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Detectar pestaña activa basada en ruta
    if (pathname.includes('/oraciones-diarias')) {
      setActiveTab('oraciones');
    } else if (pathname.includes('/novena')) {
      setActiveTab('novena');
    } else {
      setActiveTab('oracion');
    }
  }, [pathname, searchParams]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleShare = async () => {
    try {
      const pageTitle = document.title;
      let shareText = 'Únete a esta novena de protección espiritual';
      
      if (pathname.includes('/oraciones-diarias')) {
        shareText = 'Descubre estas oraciones diarias con San Benito';
      } else if (pathname.includes('/novena')) {
        shareText = 'Acompáñame en esta novena de protección espiritual';
      }

      if (navigator.share) {
        await navigator.share({
          title: pageTitle,
          text: shareText,
          url: window.location.href
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        toast.success('Enlace copiado al portapapeles', {
          position: 'bottom-center',
          style: {
            background: darkMode ? '#1f2937' : '#ffffff',
            color: darkMode ? '#ffffff' : '#1f2937',
          }
        });
      } else {
        // Fallback para navegadores muy antiguos
        const textArea = document.createElement('textarea');
        textArea.value = window.location.href;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        toast.success('Enlace copiado', {
          position: 'bottom-center',
          style: {
            background: darkMode ? '#1f2937' : '#ffffff',
            color: darkMode ? '#ffffff' : '#1f2937',
          }
        });
      }
    } catch (err) {
      console.error('Error al compartir:', err);
      toast.error('Error al compartir', {
        position: 'bottom-center',
        style: {
          background: darkMode ? '#1f2937' : '#ffffff',
          color: darkMode ? '#ffffff' : '#1f2937',
        }
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md z-20 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center gap-4">
            <span className="text-2xl mr-2">✝️</span>
            <span className={`font-bold ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>San Benito</span>
            <button 
              onClick={toggleDarkMode}
              className={`${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} p-2 rounded-full shadow transition`}
              aria-label="Cambiar modo oscuro"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition relative py-1 px-2 rounded-md ${activeTab === 'oracion' ? (darkMode ? 'bg-gray-700' : 'bg-blue-50') : ''}`}
              aria-current={activeTab === 'oracion' ? 'page' : undefined}
            >
              Inicio
              {activeTab === 'oracion' && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-blue-500 rounded-full"></span>
              )}
            </Link>
            <Link 
              href="/oraciones-diarias" 
              className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition relative py-1 px-2 rounded-md ${activeTab === 'oraciones' ? (darkMode ? 'bg-gray-700' : 'bg-blue-50') : ''}`}
              aria-current={activeTab === 'oraciones' ? 'page' : undefined}
              prefetch={true}
            >
              Oraciones
              {activeTab === 'oraciones' && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-blue-500 rounded-full"></span>
              )}
            </Link>
            <Link 
              href="/novena" 
              className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition relative py-1 px-2 rounded-md ${activeTab === 'novena' ? (darkMode ? 'bg-gray-700' : 'bg-blue-50') : ''}`}
              aria-current={activeTab === 'novena' ? 'page' : undefined}
              prefetch={true}
            >
              Novena
              {activeTab === 'novena' && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-blue-500 rounded-full"></span>
              )}
            </Link>
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
        <div className={`md:hidden ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg transition-all duration-300 ease-in-out transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className={`block px-3 py-2 ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} ${activeTab === 'oracion' ? (darkMode ? 'bg-gray-600' : 'bg-blue-50') : ''}`}
              onClick={toggleMobileMenu}
              aria-current={activeTab === 'oracion' ? 'page' : undefined}
            >
              <div className="flex items-center">
                <span className="mr-2">🏠</span>
                Inicio
              </div>
            </Link>
            <Link 
              href="/oraciones-diarias" 
              className={`block px-3 py-2 ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} ${activeTab === 'oraciones' ? (darkMode ? 'bg-gray-600' : 'bg-blue-50') : ''}`}
              onClick={toggleMobileMenu}
              aria-current={activeTab === 'oraciones' ? 'page' : undefined}
            >
              <div className="flex items-center">
                <span className="mr-2">🙏</span>
                Oraciones
              </div>
            </Link>
            <Link 
              href="/novena" 
              className={`block px-3 py-2 ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} ${activeTab === 'novena' ? (darkMode ? 'bg-gray-600' : 'bg-blue-50') : ''}`}
              onClick={toggleMobileMenu}
              aria-current={activeTab === 'novena' ? 'page' : undefined}
            >
              <div className="flex items-center">
                <span className="mr-2">📿</span>
                Novena
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
