
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black -z-10"></div>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block silver-gradient">Unlock Your</span>
              <span className="gold-gradient">Full Potential</span>
            </h1>
            <p className="text-silver text-lg md:text-xl max-w-md">
              Your vision, our guidance, endless possibilities. 
              Transform your business and life with expert coaching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#services">
                <Button className="bg-silver hover:bg-silver/80 text-gold px-6 py-6 text-lg border border-gold">
                  Explore Services
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="border-gold bg-black text-gold hover:bg-gold/10 px-6 py-6 text-lg">
                  Book a Consultation
                </Button>
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="gold-border rounded-lg overflow-hidden">
              <div className="bg-black p-1">
                <img 
                  src="/public/lovable-uploads/634ec27f-ca3c-41de-9de4-35135fa27955.png" 
                  alt="Paul & Cami Coaching" 
                  className="w-full h-auto max-h-64 object-contain rounded-lg"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-black p-6 rounded-lg shadow-lg border border-gold">
              <p className="text-gold italic font-medium">
                "YOUR VISION, OUR GUIDANCE, ENDLESS POSSIBILITIES"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
