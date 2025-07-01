
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BusinessCoaching = () => {
  return (
    <>
      <Link to="/blog" className="inline-flex items-center text-gold hover:text-gold/80 transition-colors mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Blog
      </Link>
      
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 gold-gradient">
        Business Coaching
      </h1>
      
      <div className="max-w-4xl mx-auto">
        <section className="border border-gold/20 rounded-lg p-8 bg-black/50">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gold">
            Coming Soon
          </h2>
          <p className="text-silver/80 leading-relaxed mb-6">
            We're preparing comprehensive articles on business strategy, leadership development, 
            and growth acceleration techniques. Our expert content will help entrepreneurs and 
            executives achieve their professional goals through proven methodologies and 
            actionable insights.
          </p>
          <p className="text-silver/80 leading-relaxed">
            Topics will include strategic planning, team management, performance optimization, 
            market expansion, and sustainable business growth strategies.
          </p>
        </section>
      </div>
    </>
  );
};

export default BusinessCoaching;
