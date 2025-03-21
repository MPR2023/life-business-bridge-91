
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Legal = () => {
  const [activeTab, setActiveTab] = useState<"privacy" | "cookie">("privacy");
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Check if there's a hash in the URL to set the active tab
    if (window.location.hash === "#cookie-policy") {
      setActiveTab("cookie");
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-silver">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 gold-gradient text-center">Legal Information</h1>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex border border-gold/50 rounded-md">
              <button
                className={`px-4 py-2 text-sm md:text-base md:px-6 md:py-3 ${
                  activeTab === "privacy" 
                    ? "bg-gold/20 text-gold" 
                    : "bg-transparent text-silver hover:text-gold"
                }`}
                onClick={() => setActiveTab("privacy")}
              >
                Privacy Policy & GDPR
              </button>
              <button
                className={`px-4 py-2 text-sm md:text-base md:px-6 md:py-3 ${
                  activeTab === "cookie" 
                    ? "bg-gold/20 text-gold" 
                    : "bg-transparent text-silver hover:text-gold"
                }`}
                onClick={() => setActiveTab("cookie")}
              >
                Cookie Policy
              </button>
            </div>
          </div>
          
          {/* Content Area */}
          <div className="bg-black/50 border border-gold/30 rounded-lg p-6 md:p-8">
            {activeTab === "privacy" && (
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4 gold-gradient">Privacy Policy and GDPR Compliance Statement</h2>
                <p className="text-silver mb-4">Last Updated: {currentDate}</p>
                
                <p className="text-silver mb-4">
                  This Privacy Policy and GDPR Compliance Statement ("Policy") explains how MPR Management 2019 SRL ("we", "us", or "our") collects, processes, stores, and protects personal data on the website paulandcami.com ("Website"). This Policy is designed to comply with the European Union's General Data Protection Regulation (GDPR) (Regulation (EU) 2016/679) and applicable Romanian legislation, ensuring transparency and protection of your personal data.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">1. Controller Information</h3>
                <p className="text-silver mb-4">
                  <strong>Data Controller:</strong><br />
                  MPR Management 2019 SRL<br />
                  Cod Unic de Înregistrare: 50669061<br />
                  Nr. Înmatriculare: J2024029245004<br />
                  Address: Arad, Fanatantele, nr. 134<br />
                  Email: paul@paulandcami.com
                </p>
                <p className="text-silver mb-4">
                  <strong>Note:</strong> As a small company, no Data Protection Officer (DPO) has been appointed. The responsibility for data protection rests with Paul Motorca.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">2. Data We Collect and Process</h3>
                <p className="text-silver mb-4">
                  We process personal data collected through our Website using the following mechanisms:
                </p>
                
                <h4 className="text-lg font-medium mb-2 mt-4">2.1. Contact Form</h4>
                <p className="text-silver mb-4">
                  <strong>Data Collected:</strong> Name and Email Address<br />
                  <strong>Purpose:</strong> To respond to inquiries or requests for information about our services.<br />
                  <strong>Legal Basis:</strong> Legitimate interest (the individual seeks to be contacted and we rely on the necessity of responding to the inquiry).<br />
                  <strong>Retention:</strong> Data will be stored for one year from collection. If you request deletion sooner, please contact us.
                </p>
                
                <h4 className="text-lg font-medium mb-2 mt-4">2.2. Cookies and LocalStorage</h4>
                <p className="text-silver mb-4">
                  <strong>Cookie/LocalStorage Item:</strong> cookiesAccepted<br />
                  <strong>Purpose:</strong> To remember that the user has accepted the cookie consent banner so that the banner is not shown on subsequent visits.<br />
                  <strong>Storage Mechanism:</strong> Stored in the user's localStorage; persists until cleared by the user.<br />
                  <strong>Classification:</strong> Necessary/Functional<br />
                  <strong>Legal Basis:</strong> Consent is obtained explicitly before any non-essential cookies (e.g., those used for Google Analytics) are activated.
                </p>
                
                <h4 className="text-lg font-medium mb-2 mt-4">2.3. Google Analytics</h4>
                <p className="text-silver mb-4">
                  <strong>Data Collected:</strong> Anonymized usage data (e.g., pages visited, time on site)<br />
                  <strong>Purpose:</strong> To analyze website traffic and improve the Website's functionality and user experience.<br />
                  <strong>Legal Basis:</strong> Consent is obtained explicitly prior to activating analytics cookies.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">3. Data Storage and Security</h3>
                
                <h4 className="text-lg font-medium mb-2 mt-4">3.1. Hosting and Data Storage</h4>
                <p className="text-silver mb-4">
                  <strong>Hosting Provider:</strong> Your website is hosted by Romarg SRL.<br />
                  <strong>Data Storage:</strong> All data is securely stored on Romarg's state-of-the-art servers located within the European Union.<br />
                  <strong>Compliance and Certifications:</strong> Romarg adheres to the EU/US Privacy Shield and follows strict data protection standards to ensure GDPR compliance.
                </p>
                
                <h4 className="text-lg font-medium mb-2 mt-4">3.2. Security Measures</h4>
                <p className="text-silver mb-4">
                  <strong>Infrastructure:</strong> Romarg uses an advanced security infrastructure, including secure environments and advanced security modules to prevent unauthorized access.<br />
                  <strong>Access Controls:</strong> Data access is restricted to authorized personnel only, utilizing secure authentication methods.<br />
                  <strong>Encryption and Audits:</strong> We rely on the security measures provided by Romarg, which include encryption standards and regular security audits.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">4. Legal Basis for Processing</h3>
                <p className="text-silver mb-4">
                  For all personal data processing activities on our Website, we rely on the following legal bases:
                </p>
                <ul className="list-disc pl-6 mb-4 text-silver">
                  <li><strong>Explicit Consent:</strong> Used for activating non-essential cookies and Google Analytics.</li>
                  <li><strong>Legitimate Interest:</strong> Applied to processing data submitted via the contact form, as the individual's inquiry necessitates a response.</li>
                  <li><strong>Contractual Necessity:</strong> Where applicable, for the proper provision of services.</li>
                </ul>
                <p className="text-silver mb-4">
                  You have the right to withdraw your consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">5. Data Subject Rights</h3>
                <p className="text-silver mb-4">
                  Under the GDPR, you have the following rights regarding your personal data:
                </p>
                <ul className="list-disc pl-6 mb-4 text-silver">
                  <li><strong>Right of Access:</strong> You may request access to the personal data we hold about you.</li>
                  <li><strong>Right to Rectification:</strong> You can request corrections to any inaccurate or incomplete data.</li>
                  <li><strong>Right to Erasure:</strong> You can request the deletion of your personal data. (Note: Data from the contact form is retained for one year unless a request for earlier deletion is received.)</li>
                  <li><strong>Right to Restrict Processing:</strong> You may ask us to restrict processing of your data.</li>
                  <li><strong>Right to Data Portability:</strong> You have the right to receive your data in a structured, commonly used, and machine-readable format.</li>
                  <li><strong>Right to Object:</strong> You can object to the processing of your data based on legitimate interests, or for marketing or analytics purposes.</li>
                  <li><strong>Right to Withdraw Consent:</strong> You may withdraw your consent at any time. This does not affect the lawfulness of processing carried out before your withdrawal.</li>
                </ul>
                <p className="text-silver mb-4">
                  To exercise any of these rights, please contact us at:<br />
                  Email: paul@paulandcami.com
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">6. Data Breach Notification</h3>
                <p className="text-silver mb-4">
                  <strong>Breach Handling:</strong> In the event of a data breach, our hosting provider, Romarg, is responsible for detecting, reporting, and managing the breach according to their internal procedures.<br />
                  <strong>Notification Process:</strong> Should a breach occur, Romarg will inform us promptly. We will then inform you and the relevant supervisory authority as required by law.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">7. Data Transfers</h3>
                <p className="text-silver mb-4">
                  <strong>International Transfers:</strong> No personal data processed on our Website is transferred to any third country. All data remains within the European Union.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">8. Data Retention and Deletion</h3>
                <p className="text-silver mb-4">
                  <strong>Retention Period:</strong> Personal data collected via the contact form is retained for one year from the date of collection.<br />
                  <strong>Deletion Policy:</strong> After one year, data will be securely deleted. If you request deletion or modification of your data before this period, please contact us at paul@paulandcami.com.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">9. Updates to This Policy</h3>
                <p className="text-silver mb-4">
                  We regularly review and update our Privacy Policy and internal data processing practices to ensure ongoing compliance with legal requirements. Updates will be published on our Website, and the "Last Updated" date at the top of this Policy will reflect any changes.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">10. Contact Information</h3>
                <p className="text-silver mb-4">
                  For any questions, concerns, or requests regarding your personal data or this Policy, please contact:<br />
                  MPR Management 2019 SRL<br />
                  Address: Arad, Fanatantele, nr. 134<br />
                  Email: paul@paulandcami.com
                </p>
              </div>
            )}
            
            {activeTab === "cookie" && (
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4 gold-gradient">Cookie Compliance Statement</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">1. Introduction</h3>
                <p className="text-silver mb-4">
                  This Cookie Compliance Statement explains how paulandcami.com ("the Website") uses cookies, embedded scripts, and similar technologies to collect and store information, as well as how your data is processed. The Website is operated by MPR Management 2019 SRL<br />
                  Cod Unic de Înregistrare: 50669061<br />
                  Nr. Înmatriculare: J2024029245004<br />
                  Arad, Fanatantele, nr. 134
                </p>
                <p className="text-silver mb-4">
                  The Website provides information about our business, including our mission, vision, values, services, and includes a contact form for users to submit their name and email if they wish to get in touch.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">2. Cookie and Data Storage Information</h3>
                
                <h4 className="text-lg font-medium mb-2 mt-4">2.1. What Are Cookies and Similar Technologies?</h4>
                <p className="text-silver mb-4">
                  Cookies are small text files or pieces of data stored on your device that help us improve your user experience. In our case, we also use localStorage to remember your preferences, such as whether you have accepted our cookie consent banner.
                </p>
                
                <h4 className="text-lg font-medium mb-2 mt-4">2.2. Types of Cookies and Storage Used</h4>
                <p className="text-silver mb-4">
                  <strong>A. Functional/Necessary Cookies</strong><br />
                  <strong>Name:</strong> cookiesAccepted<br />
                  <strong>Purpose:</strong> Remembers that the user has accepted the cookie consent banner, preventing the banner from displaying on subsequent visits.<br />
                  <strong>Lifespan:</strong> Persistent – stored in localStorage until the browser storage is cleared.<br />
                  <strong>Type:</strong> First-party cookie equivalent (set by the Website itself).<br />
                  <strong>Classification:</strong> Necessary/Functional
                </p>
                
                <p className="text-silver mb-4">
                  <strong>B. Analytics and Marketing Cookies</strong><br />
                  <strong>Google Analytics:</strong><br />
                  <strong>Purpose:</strong> To collect anonymized data for website traffic analysis and to help improve the Website's functionality and performance.<br />
                  <strong>Consent Requirement:</strong> These cookies are only activated after explicit consent from the user.
                </p>
                
                <p className="text-silver mb-4">
                  <strong>C. Embedded Scripts and Other Third-Party Integrations</strong><br />
                  <strong>Embedded Scripts:</strong><br />
                  <strong>Purpose:</strong> These may include social media plugins or other tools that require user consent before activation.<br />
                  <strong>Consent Requirement:</strong> All such scripts are subject to explicit consent prior to their execution.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">3. Consent Mechanism</h3>
                
                <h4 className="text-lg font-medium mb-2 mt-4">3.1. Cookie Consent Banner</h4>
                <p className="text-silver mb-4">
                  When you first visit the Website, a floating cookie consent bar will appear. This bar:
                </p>
                <ul className="list-disc pl-6 mb-4 text-silver">
                  <li>Offers the option to Accept or Reject non-essential cookies.</li>
                  <li>Provides a clear link to this Cookie Compliance Statement and additional cookie information.</li>
                  <li>Ensures that no non-essential cookies, including those for Google Analytics or embedded scripts, are activated until explicit consent is given.</li>
                </ul>
                
                <h4 className="text-lg font-medium mb-2 mt-4">3.2. Consent Model</h4>
                <p className="text-silver mb-4">
                  <strong>Explicit Consent:</strong><br />
                  All cookies beyond the strictly necessary functional ones (e.g., cookiesAccepted) require explicit consent from the user. This means that your personal data is only processed for analytics, marketing, and customer support purposes once you opt in.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">4. Legal Basis for Data Processing</h3>
                <p className="text-silver mb-4">
                  <strong>User Consent:</strong><br />
                  All data processing related to cookies (analytics, marketing, customer support) is based on the consent provided by the user. You have the right to accept or reject non-essential cookies, and your choice is respected and recorded.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">5. Data Processing and Storage</h3>
                
                <h4 className="text-lg font-medium mb-2 mt-4">5.1. Information Collected</h4>
                <p className="text-silver mb-4">
                  <strong>Contact Form Data:</strong><br />
                  Collected Information: Name and email address when users submit a contact form.
                </p>
                <p className="text-silver mb-4">
                  <strong>Cookies/LocalStorage:</strong><br />
                  Used to store user consent preferences and track anonymous usage data (in the case of analytics).
                </p>
                
                <h4 className="text-lg font-medium mb-2 mt-4">5.2. Data Storage and Retention</h4>
                <p className="text-silver mb-4">
                  <strong>Storage Location:</strong><br />
                  All personal data is stored securely on our hosting environment provided by Romarg Clouding, a reputable cloud provider based in Romania.
                </p>
                <p className="text-silver mb-4">
                  <strong>Retention Period:</strong><br />
                  Personal data is retained for one year from the date of collection. Users may request early deletion or corrections by contacting us at paul@paulandcami.com.
                </p>
                
                <h4 className="text-lg font-medium mb-2 mt-4">5.3. Security Measures</h4>
                <p className="text-silver mb-4">
                  <strong>Technical and Organizational Measures:</strong><br />
                  We rely on the security infrastructure offered by our cloud provider, which includes encryption, secure servers, and regular audits. These measures ensure that your data is protected against unauthorized access or breaches.
                </p>
                
                <h4 className="text-lg font-medium mb-2 mt-4">5.4. International Data Transfers</h4>
                <p className="text-silver mb-4">
                  <strong>EU Data Transfer:</strong><br />
                  There are no transfers of personal data outside the European Union.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">6. User Rights and How to Exercise Them</h3>
                <p className="text-silver mb-4">
                  Under applicable data protection laws, you have the following rights regarding your personal data:
                </p>
                <ul className="list-disc pl-6 mb-4 text-silver">
                  <li><strong>Right to Access:</strong> Request access to the personal data we hold about you.</li>
                  <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                  <li><strong>Right to Erasure:</strong> Request deletion of your personal data, subject to our retention policy. If you wish to exercise this right sooner than the standard one-year retention period, please contact us at paul@paulandcami.com.</li>
                  <li><strong>Right to Withdraw Consent:</strong> You may withdraw your consent for data processing at any time. This will not affect the lawfulness of processing based on consent before its withdrawal.</li>
                  <li><strong>Right to Data Portability:</strong> Request a copy of your data in a structured, commonly used, and machine-readable format.</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">7. Updates to this Cookie Compliance Statement</h3>
                <p className="text-silver mb-4">
                  This document may be updated periodically to reflect changes in our cookie usage or regulatory requirements. We recommend reviewing this statement regularly to stay informed about how we protect your privacy.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">8. Contact Information</h3>
                <p className="text-silver mb-4">
                  For any questions or requests related to this Cookie Compliance Statement or your personal data, please contact us:<br />
                  MPR Management 2019 SRL<br />
                  Arad, Fanatantele, nr. 134<br />
                  Email: paul@paulandcami.com
                </p>
                
                <p className="text-silver mt-8 italic">
                  This comprehensive cookie compliance file outlines our commitment to transparency and user control regarding personal data and cookie usage. Please review it carefully and feel free to reach out if you need any further information.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Legal;
