import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { theme, classes } from '../../utils/theme';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far the user has scrolled
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      
      setScrollProgress(scrolled);
      setIsScrolled(winScroll > 20);

      // Update active section
      const sections = ['home', 'portfolio', 'experience', 'skills', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
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
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    // { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];



  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-${theme.animation.fast} ${
      isScrolled ? `bg-primary-900/95 shadow-lg backdrop-blur-sm` : 'bg-transparent'
    }`}>
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-700">
        <div 
          className={`h-full bg-accent-primary transition-all duration-${theme.animation.fast} ease-out`}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className={classes.container}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="/images/atom.jpg" 
                alt="Atom Logo" 
                className="h-8 w-8 rounded-full object-cover"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm transition-all px-3 py-2 rounded-md text-white font-semibold ${
                  activeSection === item.id
                    ? 'opacity-100'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${theme.colors.text.primary} p-2 rounded-md hover:bg-white/10 transition-colors`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-${theme.animation.medium} ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`px-2 pt-2 pb-3 space-y-1 bg-primary-900/95 backdrop-blur-sm`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base text-white font-semibold ${
                activeSection === item.id
                  ? 'opacity-100 bg-white/10'
                  : 'opacity-70 hover:opacity-100 hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
