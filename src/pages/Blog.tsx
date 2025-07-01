
const Blog = () => {
  return (
    <div className="min-h-screen bg-black text-silver pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 gold-gradient">
          Blog
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="border border-gold/20 rounded-lg p-8 bg-black/50">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gold">
              Business Coaching
            </h2>
            <p className="text-silver/80 leading-relaxed">
              Coming soon: expert articles on business strategy, leadership development, 
              and growth acceleration techniques to help entrepreneurs and executives 
              achieve their professional goals.
            </p>
          </section>

          <section className="border border-gold/20 rounded-lg p-8 bg-black/50">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gold">
              Life Coaching
            </h2>
            <p className="text-silver/80 leading-relaxed">
              Coming soon: expert articles on personal development, work-life balance, 
              goal setting, and mindfulness practices to help you create a more 
              fulfilling and purposeful life.
            </p>
          </section>

          <section className="border border-gold/20 rounded-lg p-8 bg-black/50">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gold">
              AI Implementations
            </h2>
            <p className="text-silver/80 leading-relaxed">
              Coming soon: expert articles on artificial intelligence integration, 
              automation strategies, and digital transformation to help businesses 
              leverage cutting-edge technology for competitive advantage.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog;
