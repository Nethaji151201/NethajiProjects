import React, { useState, useEffect } from 'react';
import { useTheme } from '../theme/ThemeContext';
import { PROJECT_DETAILS } from '../common/constants/config';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 backdrop-blur-md bg-white/70 dark:bg-[#09090b]/70 shadow-sm border-b border-gray-100 dark:border-zinc-800/50' 
          : 'py-5 bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white transition-colors">
          {PROJECT_DETAILS.name}<span className="text-rose-500 dark:text-rose-400">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-rose-500 dark:text-gray-300 dark:hover:text-rose-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 text-gray-600 dark:text-gray-300"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-900 dark:text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#09090b] border-b border-gray-100 dark:border-zinc-800 py-4 px-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-gray-800 dark:text-gray-200 py-2 border-b border-gray-50 dark:border-zinc-800/50 mx-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
