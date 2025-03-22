
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const PAUL_EMAIL = "paul@paulandcami.com"; 
const CAMI_EMAIL = "cami@paulandcami.com";
const EMAIL_ENDPOINT = "https://paulandcami.com/send-email.php";

interface ContactFormData {
  name: string;
  email: string;
  service: string;
  specialist: string;
  message: string;
}

export function useContactSubmit() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent, 
    formData: ContactFormData, 
    cookieConsent: string | null,
    resetForm: () => void
  ) => {
    e.preventDefault();
    
    // Check if user has declined cookies
    if (cookieConsent === "false") {
      toast({
        title: "Unable to send message",
        description: "You need to accept our cookie policy to send messages. Please refresh the page and accept the cookie policy.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const toEmail = formData.specialist === "paul" ? PAUL_EMAIL : CAMI_EMAIL;
      const toName = formData.specialist === "paul" ? "Paul" : "Cami";
      
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('service', formData.service || 'Not specified');
      formDataToSend.append('message', formData.message);
      formDataToSend.append('to_email', toEmail);
      formDataToSend.append('to_name', toName);
      
      console.log("Sending email to:", toEmail);
      console.log("Form data:", Object.fromEntries(formDataToSend));
      
      const response = await fetch(EMAIL_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formDataToSend
      });
      
      const result = await response.text();
      console.log("Server response:", result);
      
      if (result === "success") {
        toast({
          title: "Message sent successfully!",
          description: `Your message has been sent to ${toName}. We'll get back to you soon.`,
        });
        
        resetForm();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    handleSubmit
  };
}
