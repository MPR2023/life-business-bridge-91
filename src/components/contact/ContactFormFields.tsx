
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ContactFormFieldsProps {
  formData: {
    name: string;
    email: string;
    service: string;
    specialist: string;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
  disabled: boolean;
}

const ContactFormFields = ({ 
  formData, 
  handleChange, 
  handleSelectChange,
  disabled 
}: ContactFormFieldsProps) => {
  return (
    <>
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
          disabled={disabled}
        />
      </div>
      
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
          disabled={disabled}
        />
      </div>
      
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-silver mb-1">
          Service of Interest
        </label>
        <Select 
          value={formData.service} 
          onValueChange={(value) => handleSelectChange("service", value)}
          disabled={disabled}
        >
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
          disabled={disabled}
        />
      </div>
      
      <div>
        <label htmlFor="specialist" className="block text-sm font-medium text-silver mb-1">
          Choose Your Specialist <span className="text-red-400">*</span>
        </label>
        <Select 
          value={formData.specialist} 
          onValueChange={(value) => handleSelectChange("specialist", value)}
          required
          disabled={disabled}
        >
          <SelectTrigger className="bg-black/50 border-gold/50 text-silver">
            <SelectValue placeholder="Select a specialist" />
          </SelectTrigger>
          <SelectContent className="bg-black border-gold/50 text-silver">
            <SelectItem value="paul" className="focus:bg-gold/20 focus:text-gold">Paul - paul@paulandcami.com</SelectItem>
            <SelectItem value="cami" className="focus:bg-gold/20 focus:text-gold">Cami - cami@paulandcami.com</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default ContactFormFields;
