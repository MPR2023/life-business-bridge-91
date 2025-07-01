
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const posts = [
  { slug: "what-is-business-coaching", title: "What Is Business Coaching?" },
];

const BusinessCoachingIndex = () => {
  return (
    <>
      <Link to="/blog" className="inline-flex items-center text-gold hover:text-gold/80 transition-colors mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Blog
      </Link>
      
      <div className="max-w-4xl mx-auto py-12 space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 gold-gradient">Business Coaching</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map(({ slug, title }) => (
            <Link
              key={slug}
              to={`/blog/business-coaching/${slug}`}
              className="block border border-gold/20 rounded-lg p-6 bg-black/50 hover:border-gold/40 hover:shadow-lg transition-all"
            >
              <h2 className="text-2xl font-semibold text-gold hover:text-gold/80 transition-colors">{title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BusinessCoachingIndex;
