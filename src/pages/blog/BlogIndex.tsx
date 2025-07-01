
import { Link } from "react-router-dom";

const BlogIndex = () => {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 gold-gradient">
        Blog
      </h1>
      
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="border border-gold/20 rounded-lg p-8 bg-black/50 hover:border-gold/40 transition-colors">
          <Link to="business-coaching" className="block">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gold hover:text-gold/80 transition-colors">
              Business Coaching
            </h2>
            <p className="text-silver/80 leading-relaxed">
              Expert articles on business strategy, leadership development, 
              and growth acceleration techniques to help entrepreneurs and executives 
              achieve their professional goals.
            </p>
          </Link>
        </section>

        <section className="border border-gold/20 rounded-lg p-8 bg-black/50 hover:border-gold/40 transition-colors">
          <Link to="life-coaching" className="block">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gold hover:text-gold/80 transition-colors">
              Life Coaching
            </h2>
            <p className="text-silver/80 leading-relaxed">
              Expert articles on personal development, work-life balance, 
              goal setting, and mindfulness practices to help you create a more 
              fulfilling and purposeful life.
            </p>
          </Link>
        </section>

        <section className="border border-gold/20 rounded-lg p-8 bg-black/50 hover:border-gold/40 transition-colors">
          <Link to="ai-implementations" className="block">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gold hover:text-gold/80 transition-colors">
              AI Implementations
            </h2>
            <p className="text-silver/80 leading-relaxed">
              Expert articles on artificial intelligence integration, 
              automation strategies, and digital transformation to help businesses 
              leverage cutting-edge technology for competitive advantage.
            </p>
          </Link>
        </section>
      </div>
    </>
  );
};

export default BlogIndex;
