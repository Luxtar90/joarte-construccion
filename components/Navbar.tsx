import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const menuItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      // Detectar sección activa
      const sections = menuItems.map(item => item.href.replace('#', ''));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-background/90 backdrop-blur-lg shadow-lg' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('inicio')}
            className="text-3xl font-light tracking-widest text-sky-200 hover:text-sky-400 transition-colors duration-300"
          >
            JOARTE
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href.replace('#', ''))}
                className={`text-sm uppercase tracking-wider transition-all duration-500
                  ${activeSection === item.href.replace('#', '') 
                    ? 'text-sky-400 font-medium'
                    : 'text-sky-200 hover:text-sky-400'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
            <motion.button 
              onClick={() => scrollToSection('contacto')}
              className="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Solicitar Cotización
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-sky-200 hover:text-sky-400 focus:outline-none transition-colors duration-300"
              aria-label="Menu"
            >
              {isOpen ? <RiCloseLine /> : <RiMenuLine />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-accent/10 md:hidden"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-6">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.href.replace('#', ''))}
                      className={`text-sm uppercase tracking-wider transition-all duration-500 block w-full text-left
                        ${activeSection === item.href.replace('#', '') 
                          ? 'text-sky-400 font-medium'
                          : 'text-sky-200 hover:text-sky-400'
                        }`}
                    >
                      {item.label}
                    </button>
                  </motion.div>
                ))}
                <motion.button 
                  onClick={() => scrollToSection('contacto')}
                  className="button w-full justify-center mt-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Solicitar Cotización
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-accent/30"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ transformOrigin: 'left' }}
      />
    </nav>
  );
};

export default Navbar;
