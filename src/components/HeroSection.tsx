
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black -z-10"></div>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="block silver-gradient">Unlock Your</span>
            <span className="gold-gradient">Full Potential</span>
          </h1>
          <p className="text-silver text-lg md:text-xl max-w-lg mx-auto mb-8">
            Your vision, our guidance, endless possibilities. 
            Transform your business and life with expert coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#services">
              <Button className="bg-black hover:bg-black text-gold px-6 py-6 text-lg border border-gold hover:text-silver hover:border-silver transition-colors">
                Explore Services
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="bg-black hover:bg-black border-gold text-gold hover:text-silver hover:border-silver px-6 py-6 text-lg transition-colors">
                Book a Consultation
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
