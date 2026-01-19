import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Moon, Sun, Lock } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: (event: React.MouseEvent) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'glass-panel border-slate-700/50 py-2' 
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Updated with Hotlinked Image */}
          <a href="#" className="flex items-center gap-3 group">
             <div className="relative h-12 flex items-center">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpYFp78-p19I6f851-g_p9XmNf6t_28vD2e99eS4-o8o1eR2i6d1eR2i6d1eR2i6d1eR2i6d1eR2i6d1eR2i6d1eR2i6d1eR2i6d1eR2i6d1eR2i6d1eR2i6d=s0" 
                  alt="MBSYS Logo" 
                  className="h-full object-contain filter dark:brightness-200 transition-all group-hover:scale-105"
                />
             </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
            
            <button 
              onClick={onToggleTheme}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all text-slate-600 dark:text-slate-300 shadow-inner"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="flex items-center gap-4 pl-6 border-l border-slate-200 dark:border-slate-700">
               <div className="text-right hidden lg:block">
                  <p className="text-[9px] uppercase tracking-tighter text-slate-500 dark:text-slate-400 font-bold">Secure Support Line</p>
                  <p className="font-tech font-bold text-lg text-slate-900 dark:text-white leading-none">+91 988-6374-122</p>
               </div>
               <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-[0_0_15px_rgba(239,68,68,0.4)] animate-pulse-slow">
                 <Phone size={18} />
               </div>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
                onClick={onToggleTheme}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 shadow-2xl">
          <div className="px-4 py-8 space-y-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
             <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
               <div className="flex items-center justify-center gap-2 text-slate-500">
                  <Lock size={14} />
                  <span className="text-[10px] uppercase font-bold">Encrypted Session</span>
               </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;