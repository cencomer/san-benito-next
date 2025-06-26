'use client';

import { useTheme } from "../context/ThemeContext";
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer className={`${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'} py-12`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center">
              <span className="mr-2">✝️</span>
              <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>San Benito App</span>
            </h3>
            <p className="text-sm">Oraciones y novena de protección espiritual</p>
            
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-200'} transition-all shadow-sm`}
                aria-label="Facebook"
              >
                <FaFacebook className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-200'} transition-all shadow-sm`}
                aria-label="Instagram"
              >
                <FaInstagram className={darkMode ? 'text-pink-400' : 'text-pink-600'} />
              </a>
              <a 
                href="https://wa.me/573001234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-200'} transition-all shadow-sm`}
                aria-label="WhatsApp"
              >
                <FaWhatsapp className={darkMode ? 'text-green-400' : 'text-green-600'} />
              </a>
              <a 
                href="mailto:contacto@sanbenito.app" 
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-200'} transition-all shadow-sm`}
                aria-label="Email"
              >
                <FaEnvelope className={darkMode ? 'text-red-400' : 'text-red-600'} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-lg">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
              <Link 
                href="/" 
                className={`hover:underline ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                href="/oraciones-diarias" 
                className={`hover:underline ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}
              >
                Oraciones diarias
              </Link>
            </li>
            <li>
              <Link 
                href="/novena" 
                className={`hover:underline ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}
              >
                Novena
              </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="font-semibold text-lg">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/terminos" 
                  className={`hover:underline ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}
                >
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacidad" 
                  className={`hover:underline ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link 
                  href="/contacto" 
                  className={`hover:underline ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} San Benito App. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
