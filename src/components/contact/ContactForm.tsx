
import { useContactForm } from "@/hooks/use-contact-form";
import { useContactSubmit } from "@/hooks/use-contact-submit";
import CookieConsentWarning from "./CookieConsentWarning";
import ContactFormFields from "./ContactFormFields";
import ContactSubmitButton from "./ContactSubmitButton";

const ContactForm = () => {
  const { 
    formData, 
    cookieConsent, 
    handleChange, 
    handleSelectChange, 
    resetForm, 
    isFormValid 
  } = useContactForm();
  
  const { isSubmitting, handleSubmit } = useContactSubmit();

  const onSubmit = (e: React.FormEvent) => {
    handleSubmit(e, formData, cookieConsent, resetForm);
  };

  return (
    <div className="lg:col-span-3 bg-black p-6 md:p-8 rounded-lg shadow-sm border border-gold">
      <h3 className="text-2xl font-bold mb-6 gold-gradient">Send a Message</h3>
      
      <CookieConsentWarning show={cookieConsent === "false"} />
      
      <form onSubmit={onSubmit} className="space-y-4 md:space-y-5">
        <ContactFormFields 
          formData={formData}
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
          disabled={cookieConsent === "false"}
        />
        
        <ContactSubmitButton 
          isSubmitting={isSubmitting}
          disabled={!isFormValid() || cookieConsent === "false"}
        />
      </form>
    </div>
  );
};

export default ContactForm;
