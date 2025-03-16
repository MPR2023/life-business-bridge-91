
import { User, Award, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Paul & Cami</h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
          <p className="text-softGray text-lg">
            We bridge the gap between business excellence and personal fulfillment,
            providing expert coaching to transform both your professional ventures and personal life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="bg-lightGray rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: "0ms" }}>
            <div className="bg-gold/10 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <User className="h-8 w-8 text-gold" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
            <p className="text-softGray">
              Certified business and life coaches with over 15 years of combined experience
              helping individuals and organizations achieve extraordinary results.
            </p>
          </div>

          <div className="bg-lightGray rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: "150ms" }}>
            <div className="bg-gold/10 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <Award className="h-8 w-8 text-gold" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Expertise</h3>
            <p className="text-softGray">
              We specialize in strategic business development, leadership enhancement,
              personal growth, and work-life integration for sustainable success.
            </p>
          </div>

          <div className="bg-lightGray rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="bg-gold/10 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <Lightbulb className="h-8 w-8 text-gold" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Philosophy</h3>
            <p className="text-softGray">
              We believe that true success comes from alignment between your business goals
              and personal values, creating harmony that drives sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
