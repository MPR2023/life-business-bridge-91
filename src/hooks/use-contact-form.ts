
import { useState, useEffect } from "react";

interface ContactFormData {
  name: string;
  email: string;
  service: string;
  specialist: string;
  message: string;
}

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    service: "",
    specialist: "",
    message: ""
  });
  const [cookieConsent, setCookieConsent] = useState<string | null>(null);
  
  // Check cookie consent status on component mount
  useEffect(() => {
    const consent = localStorage.getItem("cookiesAccepted");
    setCookieConsent(consent);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      service: "",
      specialist: "",
      message: ""
    });
  };

  const isFormValid = () => {
    return formData.name && formData.email && formData.message && formData.specialist;
  };

  return {
    formData,
    cookieConsent,
    handleChange,
    handleSelectChange,
    resetForm,
    isFormValid
  };
}
