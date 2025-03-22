
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, FileText } from "lucide-react";

// Custom X icon (formerly Twitter)
const XIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="h-5 w-5 text-gold"
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-silver pt-16 pb-8 border-t border-gold/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="mb-4">
              <img 
                src="/public/lovable-uploads/634ec27f-ca3c-41de-9de4-35135fa27955.png" 
                alt="PAUL&CAMI" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-silver mb-4">
              Transforming businesses and lives through expert coaching and guidance.
              Your vision, our guidance, endless possibilities.
            </p>
            
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/profile.php?id=61572141846128" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-black/30 hover:bg-gold border border-gold h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="h-5 w-5 text-gold" />
              </a>
              <a 
                href="https://www.instagram.com/paul_n_cami/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-black/30 hover:bg-gold border border-gold h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="h-5 w-5 text-gold" />
              </a>
              <a 
                href="https://www.linkedin.com/company/paulandcami" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-black/30 hover:bg-gold border border-gold h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5 text-gold" />
              </a>
              <a 
                href="https://x.com/_Coach_Paul_" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-black/30 hover:bg-gold border border-gold h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <XIcon />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 gold-gradient">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-silver hover:text-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-silver hover:text-gold transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-silver hover:text-gold transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-silver hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/legal" className="text-silver hover:text-gold transition-colors flex items-center">
                  <FileText className="h-4 w-4 mr-2" /> Legal & Privacy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 gold-gradient">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-silver hover:text-gold transition-colors">
                  Business Coaching
                </a>
              </li>
              <li>
                <a href="#services" className="text-silver hover:text-gold transition-colors">
                  Life Coaching
                </a>
              </li>
              <li>
                <a href="#services" className="text-silver hover:text-gold transition-colors">
                  Career Coaching
                </a>
              </li>
              <li>
                <a href="#services" className="text-silver hover:text-gold transition-colors">
                  Leadership Coaching
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 gold-gradient">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gold mr-3 mt-0.5" />
                <div>
                  <a href="mailto:paul@paulandcami.com" className="text-silver hover:text-gold transition-colors block">
                    paul@paulandcami.com
                  </a>
                  <a href="mailto:cami@paulandcami.com" className="text-silver hover:text-gold transition-colors block">
                    cami@paulandcami.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gold mr-3 mt-0.5" />
                <div>
                  <a href="tel:+40753338026" className="text-silver hover:text-gold transition-colors block">
                    Paul: +40 753 338 026
                  </a>
                  <a href="tel:+40740684901" className="text-silver hover:text-gold transition-colors block">
                    Cami: +40 740 684 901
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-3 mt-0.5" />
                <address className="text-silver not-italic">
                  B-dul Decebal, nr. 2, cam. 210,<br />
                  Arad, Romania
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gold/20 text-center text-silver/70">
          <p>&copy; {currentYear} MPR Management 2019. All rights reserved. <a href="/legal" className="hover:text-gold transition-colors">Legal & Privacy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
