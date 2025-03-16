
import { useIsMobile } from "@/hooks/use-mobile";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 silver-gradient">Get In Touch</h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
          <p className="text-silver text-lg">
            Ready to transform your business and life? We're here to help.
          </p>
        </div>

        <div className={`grid grid-cols-1 ${isMobile ? 'gap-6' : 'lg:grid-cols-5 gap-8'} max-w-5xl mx-auto`}>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
