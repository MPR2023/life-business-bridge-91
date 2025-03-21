
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookiesAccepted");
    if (!hasAccepted) {
      // Show cookie banner after a small delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    // Exit the website by redirecting to a different site
    window.location.href = "https://www.google.com";
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/90 border-t border-gold animate-fade-in">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-silver text-sm md:text-base md:mr-8 md:max-w-2xl">
          <p>
            We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies. 
            Our website also complies with GDPR regulations to protect your privacy and personal data.
          </p>
        </div>
        <div className="flex space-x-4">
          <Link 
            to="/legal#cookie-policy" 
            className="inline-flex items-center justify-center text-sm text-gold hover:text-silver transition-colors"
          >
            <FileText className="h-4 w-4 mr-1" />
            Learn More
          </Link>
          <Button 
            className="bg-black hover:bg-black text-gold border border-gold hover:text-silver hover:border-silver"
            onClick={handleAccept}
          >
            Accept
          </Button>
          <Button 
            variant="outline" 
            className="bg-black hover:bg-black border-gold text-gold hover:text-silver hover:border-silver"
            onClick={handleDecline}
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
