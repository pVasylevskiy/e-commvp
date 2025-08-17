'use client';

import { motion } from 'framer-motion';
import { useThemeStore } from '@/store/theme';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-5 h-5"
      >
        {theme === 'light' ? (
          <MoonIcon className="w-5 h-5 text-secondary" />
        ) : (
          <SunIcon className="w-5 h-5 text-secondary" />
        )}
      </motion.div>
    </motion.button>
  );
}
