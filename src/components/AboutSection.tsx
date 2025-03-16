
import { User, Award, Lightbulb, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 silver-gradient">About Paul & Cami</h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
          <p className="text-silver text-lg">
            Paul & Cami is more than a business—it's your partner on the journey toward extraordinary success and lasting fulfillment. 
            Together, we'll ignite your vision, optimize your strategies, and empower personal and professional growth. 
            Dare to dream big, take action, and step into your full potential. 
            Your transformation starts now—join us, and let's make it happen!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          <div className="bg-black rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg animate-fade-in border border-gold" style={{ animationDelay: "0ms" }}>
            <div className="bg-gold/10 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <User className="h-8 w-8 text-gold" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gold-gradient">Who We Are</h3>
            <p className="text-silver">
              Certified business and life coaches with over 15 years of combined experience
              helping individuals and organizations achieve extraordinary results.
            </p>
          </div>

          <div className="bg-black rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg animate-fade-in border border-gold" style={{ animationDelay: "150ms" }}>
            <div className="bg-gold/10 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <Award className="h-8 w-8 text-gold" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gold-gradient">Our Expertise</h3>
            <p className="text-silver">
              We specialize in strategic business development, leadership enhancement,
              personal growth, and work-life integration for sustainable success.
            </p>
          </div>

          <div className="bg-black rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg animate-fade-in border border-gold" style={{ animationDelay: "300ms" }}>
            <div className="bg-gold/10 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <Lightbulb className="h-8 w-8 text-gold" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gold-gradient">Our Philosophy</h3>
            <p className="text-silver">
              We believe that true success comes from alignment between your business goals
              and personal values, creating harmony that drives sustainable growth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="bg-black rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg animate-fade-in border border-gold">
            <div className="bg-gold/10 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <Lightbulb className="h-8 w-8 text-gold" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gold-gradient">Mission</h3>
            <p className="text-silver">
              We believe in the power of your dreams and the strength of your story. 
              By lighting the way and celebrating each victory, we help you create the 
              future you deserve—one meaningful discovery at a time.
            </p>
          </div>

          <div className="bg-black rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg animate-fade-in border border-gold">
            <div className="bg-gold/10 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <Award className="h-8 w-8 text-gold" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gold-gradient">Vision</h3>
            <p className="text-silver">
              Our vision is to build a world where no dream is too daring, 
              no story is too small, and every step forward ignites an epic 
              celebration of human potential.
            </p>
          </div>

          <div className="bg-black rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg animate-fade-in border border-gold">
            <div className="bg-gold/10 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <Star className="h-8 w-8 text-gold" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gold-gradient">Guarantee</h3>
            <p className="text-silver">
              We are so confident in the impact of our coaching that we're 
              gifting you the first session—just come ready to grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
