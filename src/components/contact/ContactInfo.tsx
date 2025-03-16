
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="lg:col-span-2 bg-black p-8 rounded-lg shadow-sm border border-gold">
      <h3 className="text-2xl font-bold mb-6 gold-gradient">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-gold/10 h-10 w-10 flex items-center justify-center rounded-full mr-4">
            <Mail className="h-5 w-5 text-gold" />
          </div>
          <div>
            <p className="font-medium text-gold">Email Us</p>
            <a href="mailto:paul@paulandcami.com" className="text-silver hover:text-gold block">
              paul@paulandcami.com
            </a>
            <a href="mailto:cami@paulandcami.com" className="text-silver hover:text-gold block">
              cami@paulandcami.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-gold/10 h-10 w-10 flex items-center justify-center rounded-full mr-4">
            <Phone className="h-5 w-5 text-gold" />
          </div>
          <div>
            <p className="font-medium text-gold">Call Us</p>
            <a href="tel:+40753338026" className="text-silver hover:text-gold block">
              Paul: +40 753 338 026
            </a>
            <a href="tel:+40740684901" className="text-silver hover:text-gold block">
              Cami: +40 740 684 901
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-gold/10 h-10 w-10 flex items-center justify-center rounded-full mr-4">
            <MapPin className="h-5 w-5 text-gold" />
          </div>
          <div>
            <p className="font-medium text-gold">Our Office</p>
            <address className="text-silver not-italic">
              B-dul Decebal, nr. 2, cam. 210,<br />
              Arad, Romania
            </address>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gold/20">
        <h4 className="font-bold mb-4 text-gold">Business Hours</h4>
        <p className="text-silver mb-2">Monday - Friday: 9:00 AM - 7:00 PM</p>
        <p className="text-silver">Weekend: By appointment only</p>
      </div>
    </div>
  );
};

export default ContactInfo;
