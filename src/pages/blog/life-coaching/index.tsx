
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const posts = [
  {
    slug: "what-is-life-coaching",
    title: "What Is Life Coaching?",
    excerpt: "Life coaching is a forward-focused, performance-driven partnership … allowing clients to tap into guidance at their moment of need."
  }
];

const LifeCoachingIndex = () => {
  return (
    <>
      <Link to="/blog" className="inline-flex items-center text-gold hover:text-gold/80 transition-colors mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Blog
      </Link>
      
      <div className="max-w-4xl mx-auto py-12 space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 gold-gradient">Life Coaching</h1>
        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map(({ slug, title }) => (
              <Link
                key={slug}
                to={`/blog/life-coaching/${slug}`}
                className="block border border-gold/20 rounded-lg p-6 bg-black/50 hover:border-gold/40 hover:shadow-lg transition-all"
              >
                <h2 className="text-2xl font-semibold text-gold hover:text-gold/80 transition-colors">{title}</h2>
              </Link>
            ))}
          </div>
        ) : (
          <section className="border border-gold/20 rounded-lg p-8 bg-black/50">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gold">
              Coming Soon
            </h2>
            <p className="text-silver/80 leading-relaxed mb-6">
              We're developing expert articles on personal development, work-life balance, 
              goal setting, and mindfulness practices. Our content will help you create 
              a more fulfilling and purposeful life through proven coaching techniques 
              and transformational strategies.
            </p>
            <p className="text-silver/80 leading-relaxed">
              Topics will include personal goal achievement, stress management, 
              relationship building, time management, and holistic wellness approaches.
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default LifeCoachingIndex;
