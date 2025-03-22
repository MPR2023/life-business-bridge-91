
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, FileText } from "lucide-react";

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img 
            src="lovable-uploads/634ec27f-ca3c-41de-9de4-35135fa27955.png" 
            alt="PAUL&CAMI" 
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-silver hover:text-gold transition-colors duration-300">About</a>
          <a href="#services" className="text-silver hover:text-gold transition-colors duration-300">Services</a>
          <a href="#testimonials" className="text-silver hover:text-gold transition-colors duration-300">Testimonials</a>
          <a href="/legal" className="text-silver hover:text-gold transition-colors duration-300 flex items-center">
            <FileText className="h-4 w-4 mr-1" />
            Legal
          </a>
          <a href="#contact">
            <Button className="bg-black text-gold border border-gold hover:bg-black hover:text-silver hover:border-silver transition-colors">Contact Us</Button>
          </a>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-silver"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 absolute w-full py-4 px-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-silver hover:text-gold transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-silver hover:text-gold transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="text-silver hover:text-gold transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="/legal" 
              className="text-silver hover:text-gold transition-colors duration-300 py-2 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <FileText className="h-4 w-4 mr-2" />
              Legal
            </a>
            <a 
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="bg-black text-gold border border-gold hover:bg-black hover:text-silver hover:border-silver transition-colors w-full">Contact Us</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
