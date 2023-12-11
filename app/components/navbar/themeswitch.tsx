'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  console.log(theme);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme === 'light' ? (
        <button onClick={() => setTheme('dark')}>
          <Moon />
        </button>
      ) : (
        <button onClick={() => setTheme('light')}>
          <Sun />
        </button>
      )}
    </>
  );
};

export default ThemeSwitch;
