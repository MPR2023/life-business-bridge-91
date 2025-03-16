
import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    content: "I started the sessions with Paul & Cami without really knowing what I wanted, but after just a few meetings I gained a clear direction. They helped me discover my true motivation and take concrete steps toward my goals.",
    author: "Dana",
    position: ""
  },
  {
    id: 2,
    content: "I am deeply grateful for the support I received. Paul guided me through the process of developing my business, and I saw real results in just a few months!",
    author: "Radu",
    position: ""
  },
  {
    id: 3,
    content: "Cami has a warm and empathetic approach. She helped me better manage my emotions and regain my confidence. I wholeheartedly recommend her!",
    author: "Raul",
    position: ""
  },
  {
    id: 4,
    content: "I didn't believe I would be able to find solutions to my career problems so quickly, but with Paul's help, I managed to clarify my next steps and secure a new job.",
    author: "Olivia",
    position: ""
  },
  {
    id: 5,
    content: "Coaching with Cami was exactly what I needed. She motivated me to change my mindset and see opportunities where before I only saw obstacles.",
    author: "Isabella",
    position: ""
  },
  {
    id: 6,
    content: "Their coaching program is well-structured and tailored to my needs. I have learned to be more confident in myself and make better decisions, both at work and in my personal life.",
    author: "George",
    position: ""
  },
  {
    id: 7,
    content: "I confidently recommend Paul & Cami to anyone seeking genuine change. With their help, I found balance between my professional and personal life, which brought me peace and fulfillment.",
    author: "Marcu",
    position: ""
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
                  className="rounded-full bg-black border-gold text-gold hover:bg-black hover:text-silver hover:border-silver"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handleNext}
                  className="rounded-full bg-black border-gold text-gold hover:bg-black hover:text-silver hover:border-silver"
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
