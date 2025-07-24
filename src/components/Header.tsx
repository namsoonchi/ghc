import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-br from-[#1C4E80] via-[#00796B] to-[#1C4E80] shadow-lg z-50 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-64 h-32 bg-gradient-to-bl from-[#7CB342]/30 to-[#33691E]/20 rounded-full -translate-y-16 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-24 bg-gradient-to-tr from-[#00ACC1]/30 to-[#00796B]/20 rounded-full translate-y-12 -translate-x-24"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Heart className="w-8 h-8 text-white" fill="currentColor" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#7CB342] rounded-full"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">CareConnect</h1>
              <p className="text-xs text-[#7CB342] font-medium">HOME HEALTH AIDE</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-[#7CB342] transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-[#7CB342] transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-[#7CB342] transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-[#7CB342] transition-colors duration-300 font-medium"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#7CB342] text-white px-6 py-2 rounded-full hover:bg-[#33691E] transition-colors duration-300 font-medium"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-[#7CB342] transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#00ACC1]/30 bg-gradient-to-b from-[#1C4E80] to-[#00796B]">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-[#7CB342] transition-colors duration-300 font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-[#7CB342] transition-colors duration-300 font-medium text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-[#7CB342] transition-colors duration-300 font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-white hover:text-[#7CB342] transition-colors duration-300 font-medium text-left"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#7CB342] text-white px-6 py-3 rounded-full hover:bg-[#33691E] transition-colors duration-300 font-medium text-center"
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;