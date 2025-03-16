
import { Button } from "@/components/ui/button";
import { Briefcase, Heart, ArrowRight, Award, Zap, BarChart3, Compass, Lightbulb, TrendingUp } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 silver-gradient">Our Services</h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
          <p className="text-silver text-lg">
            Tailored coaching solutions to help you excel in business and thrive in life
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center gold-gradient">Paul's Coaching Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Business Breakthrough Coaching */}
            <div className="bg-black rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gold">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gold/10 h-12 w-12 flex items-center justify-center rounded-full mr-4">
                    <Briefcase className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-silver">Business Breakthrough Coaching</h3>
                </div>
                <p className="text-silver mb-6">
                  Strategic guidance to optimize your business operations, enhance leadership skills, 
                  and drive sustainable growth for your organization.
                </p>
                
                <a href="#contact">
                  <Button className="w-full bg-silver hover:bg-silver/80 text-gold border border-gold group">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Career Acceleration Coaching */}
            <div className="bg-black rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gold">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gold/10 h-12 w-12 flex items-center justify-center rounded-full mr-4">
                    <TrendingUp className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-silver">Career Acceleration Coaching</h3>
                </div>
                <p className="text-silver mb-6">
                  Expert guidance to fast-track your career progress, overcome professional obstacles,
                  and position yourself for advancement opportunities.
                </p>
                
                <a href="#contact">
                  <Button className="w-full bg-silver hover:bg-silver/80 text-gold border border-gold group">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Empowered Leadership Coaching */}
            <div className="bg-black rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gold">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gold/10 h-12 w-12 flex items-center justify-center rounded-full mr-4">
                    <Award className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-silver">Empowered Leadership Coaching</h3>
                </div>
                <p className="text-silver mb-6">
                  Develop your authentic leadership style, enhance your ability to inspire teams,
                  and create lasting positive impact in your organization.
                </p>
                
                <a href="#contact">
                  <Button className="w-full bg-silver hover:bg-silver/80 text-gold border border-gold group">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center gold-gradient">Cami's Coaching Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Life Design Coaching */}
            <div className="bg-black rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gold">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gold/10 h-12 w-12 flex items-center justify-center rounded-full mr-4">
                    <Heart className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-silver">Life Design Coaching</h3>
                </div>
                <p className="text-silver mb-6">
                  Personalized support to help you architect a fulfilling life aligned with your
                  values, passions, and purpose.
                </p>
                
                <a href="#contact">
                  <Button className="w-full bg-silver hover:bg-silver/80 text-gold border border-gold group">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Self-Discovery & Growth Coaching */}
            <div className="bg-black rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gold">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gold/10 h-12 w-12 flex items-center justify-center rounded-full mr-4">
                    <Compass className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-silver">Self-Discovery & Growth Coaching</h3>
                </div>
                <p className="text-silver mb-6">
                  Journey inward to discover your authentic self, unique strengths, and the limitless
                  potential that awaits your full expression.
                </p>
                
                <a href="#contact">
                  <Button className="w-full bg-silver hover:bg-silver/80 text-gold border border-gold group">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Momentum & Motivation Coaching */}
            <div className="bg-black rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gold">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gold/10 h-12 w-12 flex items-center justify-center rounded-full mr-4">
                    <Zap className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-silver">Momentum & Motivation Coaching</h3>
                </div>
                <p className="text-silver mb-6">
                  Break through barriers that hold you back and establish sustainable momentum
                  toward your most important goals and dreams.
                </p>
                
                <a href="#contact">
                  <Button className="w-full bg-silver hover:bg-silver/80 text-gold border border-gold group">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-silver">Not sure which coaching service is right for you?</h3>
          <a href="#contact">
            <Button className="bg-black hover:bg-black/80 text-gold border border-gold px-8 py-6 text-lg">
              Schedule a Free Discovery Call
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
