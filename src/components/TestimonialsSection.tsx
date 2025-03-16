
import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    content: "Working with Paul & Cami transformed both my business approach and personal outlook. Their holistic coaching helped me increase revenue by 40% while reclaiming work-life balance.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Solutions"
  },
  {
    id: 2,
    content: "The business strategies Paul & Cami helped me implement were game-changing, but even more valuable was their guidance on aligning my company's growth with my personal values and vision.",
    author: "Michael Chen",
    position: "Founder, GreenPath Ventures"
  },
  {
    id: 3,
    content: "I was skeptical about coaching, but Paul & Cami's approach is different - practical, personalized and powerful. In six months, I've achieved more clarity and progress than in the previous three years.",
    author: "Amelia Rodriguez",
    position: "Director, Global Innovations"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
          <p className="text-softGray text-lg">
            Success stories from clients who transformed their businesses and lives
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-4 -top-4">
            <Quote className="h-16 w-16 text-gold/20" />
          </div>
          
          <div className="relative bg-lightGray rounded-lg p-8 md:p-12 shadow-sm z-10">
            <div className="min-h-[200px]">
              <p className="text-charcoal text-lg md:text-xl mb-8 italic">
                {testimonials[activeIndex].content}
              </p>
              <div>
                <p className="font-bold text-lg">{testimonials[activeIndex].author}</p>
                <p className="text-softGray">{testimonials[activeIndex].position}</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-8">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 w-2 rounded-full ${index === activeIndex ? 'bg-gold' : 'bg-gray-300'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-3">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handlePrev}
                  className="rounded-full border-gold text-gold hover:bg-gold/10 hover:text-gold"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handleNext}
                  className="rounded-full border-gold text-gold hover:bg-gold/10 hover:text-gold"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
