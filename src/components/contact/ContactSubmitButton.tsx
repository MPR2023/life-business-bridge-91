
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface ContactSubmitButtonProps {
  isSubmitting: boolean;
  disabled: boolean;
}

const ContactSubmitButton = ({ isSubmitting, disabled }: ContactSubmitButtonProps) => {
  return (
    <Button 
      type="submit" 
      className="w-full bg-black hover:bg-black text-gold border border-gold hover:text-silver hover:border-silver transition-colors"
      disabled={isSubmitting || disabled}
    >
      {isSubmitting ? (
        <span className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        </span>
      ) : (
        <span className="flex items-center justify-center">
          <Send className="mr-2 h-4 w-4" /> Send Message
        </span>
      )}
    </Button>
  );
};

export default ContactSubmitButton;
