import { useState, useEffect } from 'react';
import { RiSunLine, RiMoonClearLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme as 'light' | 'dark');
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full border border-accent/20 hover:border-accent transition-colors duration-500"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? 0 : 180,
          scale: 1
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative w-5 h-5 text-accent"
      >
        {theme === 'light' ? (
          <RiMoonClearLine className="w-full h-full" />
        ) : (
          <RiSunLine className="w-full h-full" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
