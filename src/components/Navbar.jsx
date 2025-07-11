import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react'; // npm i lucide-react

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="w-full px-6 py-4 bg-twilight-bg dark:bg-twilight-bg text-twilight-text flex justify-between items-center shadow-md">
      {/* Left - Logo */}
      <div className="text-xl font-bold text-twilight-pink">
        SheCraft
      </div>

      {/* Center - Links */}
      <ul className="hidden md:flex gap-6 text-sm font-medium">
        <li><a href="#" className="hover:text-twilight-pink transition">Home</a></li>
        <li><a href="#" className="hover:text-twilight-pink transition">Services</a></li>
        <li><a href="#" className="hover:text-twilight-pink transition">Technologies</a></li>
        <li><a href="#" className="hover:text-twilight-pink transition">About</a></li>
        <li><a href="#" className="hover:text-twilight-pink transition">Contact</a></li>
      </ul>

      {/* Right - Dark mode toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full text-twilight-white bg-twilight-surface hover:bg-twilight-violet transition"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </nav>
  );
}
