import React, { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { name: 'Home', href: 'home' },
  { name: 'Architecture', href: 'architecture' },
  { name: 'Deployment', href: 'deployment' },
  { name: 'Team', href: 'team' },
  { name: 'FAQ', href: 'faq' },
  { name: 'Contact', href: 'contact' }
];

export default function Header({ activeSection, onSectionChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (href: string) => {
    onSectionChange(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-black/50 backdrop-blur-lg z-50 border-b border-blue-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Brain className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-white neon-text">AI Architecture Assistant</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.1 }}
                className={`nav-link text-lg font-medium transition-colors ${
                  activeSection === item.href
                    ? 'text-blue-400 neon-text'
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => handleNavClick(item.href)}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-blue-400" />
            ) : (
              <Menu className="h-6 w-6 text-blue-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-lg border-b border-blue-500/20"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full text-left py-3 px-4 rounded-lg transition-colors ${
                    activeSection === item.href
                      ? 'bg-blue-600/20 text-blue-400 neon-text'
                      : 'text-gray-300 hover:bg-blue-600/10 hover:text-white'
                  }`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}