
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-charcoal">
            <span className="gold-gradient">PAUL&CAMI</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-charcoal hover:text-gold transition-colors duration-300">About</a>
          <a href="#services" className="text-charcoal hover:text-gold transition-colors duration-300">Services</a>
          <a href="#testimonials" className="text-charcoal hover:text-gold transition-colors duration-300">Testimonials</a>
          <a href="#contact">
            <Button className="bg-gold hover:bg-softGold text-white">Contact Us</Button>
          </a>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-charcoal"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 absolute w-full py-4 px-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-charcoal hover:text-gold transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-charcoal hover:text-gold transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="text-charcoal hover:text-gold transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="bg-gold hover:bg-softGold text-white w-full">Contact Us</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
