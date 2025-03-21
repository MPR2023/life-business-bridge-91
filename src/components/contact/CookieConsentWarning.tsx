
import { AlertTriangle } from "lucide-react";

interface CookieConsentWarningProps {
  show: boolean;
}

const CookieConsentWarning = ({ show }: CookieConsentWarningProps) => {
  if (!show) return null;
  
  return (
    <div className="mb-6 p-4 border border-red-400 bg-red-900/20 rounded-md flex items-start">
      <AlertTriangle className="text-red-400 mr-2 mt-0.5 flex-shrink-0" />
      <div>
        <p className="text-red-400 font-medium">Cookie Policy Declined</p>
        <p className="text-silver text-sm mt-1">
          You've declined our cookie policy. To send messages, you need to accept our cookie policy. 
          Please refresh the page and accept when prompted.
        </p>
      </div>
    </div>
  );
};

export default CookieConsentWarning;
