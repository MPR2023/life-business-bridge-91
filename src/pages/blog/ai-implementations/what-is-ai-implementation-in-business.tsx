import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const WhatIsAIImplementationInBusiness = () => {
  return (
    <>
      <Link to="/blog/ai-implementations" className="inline-flex items-center text-gold hover:text-gold/80 transition-colors mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to AI Implementations
      </Link>
      
      <article className="max-w-4xl mx-auto py-12 space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 gold-gradient">
          What Is AI Implementation in Business?
        </h1>
        
        {/* POST CONTENT GOES HERE - Please provide the full content */}
        <div className="space-y-6 text-silver/80 leading-relaxed">
          <p>
            [Content placeholder - please provide the full post content including all sections, headings, and text]
          </p>
        </div>
        
        <section className="text-center mt-12">
          <Link
            to="/#contact"
            className="inline-block px-6 py-3 border border-gold rounded hover:bg-gold hover:text-black transition-colors"
          >
            👉 Book a Free 30-Minute AI Roadmap Consult
          </Link>
        </section>
      </article>
    </>
  );
};

export default WhatIsAIImplementationInBusiness;