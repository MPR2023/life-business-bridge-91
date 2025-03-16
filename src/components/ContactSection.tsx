
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Success message
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 silver-gradient">Get In Touch</h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
          <p className="text-silver text-lg">
            Ready to transform your business and life? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
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
              <p className="text-silver mb-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-silver">Weekend: By appointment only</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-black p-8 rounded-lg shadow-sm border border-gold">
            <h3 className="text-2xl font-bold mb-6 gold-gradient">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-silver mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-black/50 border-gold/50 text-silver"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-silver mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-black/50 border-gold/50 text-silver"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-silver mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+40 700 000 000"
                    className="w-full bg-black/50 border-gold/50 text-silver"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-silver mb-1">
                  Service of Interest
                </label>
                <Select value={formData.service} onValueChange={handleSelectChange}>
                  <SelectTrigger className="bg-black/50 border-gold/50 text-silver">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-gold/50 text-silver">
                    <SelectItem value="business-breakthrough" className="focus:bg-gold/20 focus:text-gold">Business Breakthrough Coaching</SelectItem>
                    <SelectItem value="career-acceleration" className="focus:bg-gold/20 focus:text-gold">Career Acceleration Coaching</SelectItem>
                    <SelectItem value="empowered-leadership" className="focus:bg-gold/20 focus:text-gold">Empowered Leadership Coaching</SelectItem>
                    <SelectItem value="life-design" className="focus:bg-gold/20 focus:text-gold">Life Design Coaching</SelectItem>
                    <SelectItem value="self-discovery" className="focus:bg-gold/20 focus:text-gold">Self-Discovery & Growth Coaching</SelectItem>
                    <SelectItem value="momentum-motivation" className="focus:bg-gold/20 focus:text-gold">Momentum & Motivation Coaching</SelectItem>
                    <SelectItem value="not-sure" className="focus:bg-gold/20 focus:text-gold">Not Sure Yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-silver mb-1">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals and how we can help..."
                  rows={5}
                  required
                  className="w-full bg-black/50 border-gold/50 text-silver"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-silver hover:bg-silver/80 text-gold border border-gold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
