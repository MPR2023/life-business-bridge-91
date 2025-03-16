
import { Button } from "@/components/ui/button";
import { Briefcase, Heart, ArrowRight, TrendingUp, Users, Target, BarChart3, Brain, Compass } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
          <p className="text-softGray text-lg">
            Tailored coaching solutions to help you excel in business and thrive in life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Business Coaching Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gold/10 h-12 w-12 flex items-center justify-center rounded-full mr-4">
                  <Briefcase className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-2xl font-bold">Business Coaching</h3>
              </div>
              <p className="text-softGray mb-6">
                Strategic guidance to optimize your business operations, enhance leadership skills, 
                and drive sustainable growth for your organization.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-gold mr-2 mt-0.5" />
                  <span className="text-charcoal">Growth Strategy</span>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-gold mr-2 mt-0.5" />
                  <span className="text-charcoal">Team Development</span>
                </div>
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-gold mr-2 mt-0.5" />
                  <span className="text-charcoal">Strategic Planning</span>
                </div>
                <div className="flex items-start">
                  <BarChart3 className="h-5 w-5 text-gold mr-2 mt-0.5" />
                  <span className="text-charcoal">Performance Optimization</span>
                </div>
              </div>
              
              <a href="#contact">
                <Button className="w-full bg-gold hover:bg-softGold text-white group">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
          
          {/* Life Coaching Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gold/10 h-12 w-12 flex items-center justify-center rounded-full mr-4">
                  <Heart className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-2xl font-bold">Life Coaching</h3>
              </div>
              <p className="text-softGray mb-6">
                Personalized support to help you discover your purpose, overcome obstacles, 
                and create a fulfilling life aligned with your deepest values.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <Brain className="h-5 w-5 text-gold mr-2 mt-0.5" />
                  <span className="text-charcoal">Mindset Transformation</span>
                </div>
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-gold mr-2 mt-0.5" />
                  <span className="text-charcoal">Goal Achievement</span>
                </div>
                <div className="flex items-start">
                  <Compass className="h-5 w-5 text-gold mr-2 mt-0.5" />
                  <span className="text-charcoal">Purpose Discovery</span>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-gold mr-2 mt-0.5" />
                  <span className="text-charcoal">Relationship Enhancement</span>
                </div>
              </div>
              
              <a href="#contact">
                <Button className="w-full bg-gold hover:bg-softGold text-white group">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Not sure which coaching service is right for you?</h3>
          <a href="#contact">
            <Button className="bg-charcoal hover:bg-charcoal/80 text-white px-8 py-6 text-lg">
              Schedule a Free Discovery Call
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
