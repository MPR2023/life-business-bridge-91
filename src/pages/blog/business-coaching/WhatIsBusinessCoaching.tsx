import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const WhatIsBusinessCoaching = () => {
  return (
    <>
      <Link to="/blog/business-coaching" className="inline-flex items-center text-gold hover:text-gold/80 transition-colors mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Business Coaching
      </Link>
      
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 gold-gradient">
        What Is Business Coaching?
      </h1>
      
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="border border-gold/20 rounded-lg p-8 bg-black/50">
          <p className="text-silver/80 leading-relaxed mb-8">
            In an era defined by rapid technological change and shifting market dynamics, business coaching has emerged as a critical driver of organizational success and personal leadership development. But what exactly is business coaching, and how does it differ from other forms of support such as consulting or life coaching? In this deep-dive post, we'll define business coaching, distinguish it from related practices, and explore its core benefits for leaders and organizations in 2025.
          </p>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gold">1. Defining Business Coaching</h3>
            <p className="text-silver/80 leading-relaxed mb-4">
              Business coaching is a collaborative, goal-oriented partnership between a trained coach and a business owner, executive, or leadership team. Unlike consultants—who diagnose problems and prescribe solutions—business coaches use powerful questions, active listening, and accountability structures to help clients uncover their own answers, accelerate strategic thinking, and implement sustainable change.
            </p>
            <ul className="list-disc list-inside text-silver/80 space-y-2 mb-4">
              <li><strong>Focus on the Client's Agenda:</strong> Coaches empower clients to set the objectives.</li>
              <li><strong>Structured, Ongoing Dialogue:</strong> Regular sessions foster progress tracking and course correction.</li>
              <li><strong>Accountability & Ownership:</strong> Coaches hold clients responsible for agreed-upon actions.</li>
            </ul>
            <blockquote className="border-l-4 border-gold pl-4 italic text-silver/90">
              "At its core, business coaching is a partnership … Through focused questions, strategic planning, and ongoing support, coaching helps you break through obstacles and reach your specific goals faster." — kajabi.com
            </blockquote>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gold">2. How it Differs from Other Coaching & Consulting</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gold/20">
                <thead>
                  <tr className="bg-gold/10">
                    <th className="border border-gold/20 p-3 text-left text-gold">Aspect</th>
                    <th className="border border-gold/20 p-3 text-left text-gold">Business Coaching</th>
                    <th className="border border-gold/20 p-3 text-left text-gold">Consulting</th>
                    <th className="border border-gold/20 p-3 text-left text-gold">Life Coaching</th>
                  </tr>
                </thead>
                <tbody className="text-silver/80">
                  <tr>
                    <td className="border border-gold/20 p-3 font-semibold">Primary Goal</td>
                    <td className="border border-gold/20 p-3">Business performance, strategy, operational excellence</td>
                    <td className="border border-gold/20 p-3">Problem diagnosis & expert solution delivery</td>
                    <td className="border border-gold/20 p-3">Personal growth, mindset shifts, work–life balance</td>
                  </tr>
                  <tr>
                    <td className="border border-gold/20 p-3 font-semibold">Approach</td>
                    <td className="border border-gold/20 p-3">Question-driven, client-led, reflective</td>
                    <td className="border border-gold/20 p-3">Advice-driven, directive, often prescriptive</td>
                    <td className="border border-gold/20 p-3">Holistic, values-based, emotional and behavioral focus</td>
                  </tr>
                  <tr>
                    <td className="border border-gold/20 p-3 font-semibold">Deliverables</td>
                    <td className="border border-gold/20 p-3">Action plans co-created by coach & client</td>
                    <td className="border border-gold/20 p-3">Reports, frameworks, tools</td>
                    <td className="border border-gold/20 p-3">Self-awareness exercises, habit formation</td>
                  </tr>
                  <tr>
                    <td className="border border-gold/20 p-3 font-semibold">Engagement Style</td>
                    <td className="border border-gold/20 p-3">Ongoing, accountability checkpoints</td>
                    <td className="border border-gold/20 p-3">Project-based, finite scope</td>
                    <td className="border border-gold/20 p-3">Session-based, may include personal life targets</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gold">3. Core Benefits of Business Coaching</h3>
            <ol className="list-decimal list-inside text-silver/80 space-y-2">
              <li><strong>Enhanced Strategic Clarity</strong> – translates vision into concrete roadmaps.</li>
              <li><strong>Improved Leadership Effectiveness</strong> – hones competencies like EI & decision-making.</li>
              <li><strong>Accountability & Execution</strong> – built-in check-ins boost follow-through.</li>
              <li><strong>Personalized Growth & Self-Awareness</strong> – surfaces blind spots and habits.</li>
              <li><strong>Sustainable Performance Uplift</strong> – compounding gains via iterative support.</li>
            </ol>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gold">4. When to Engage a Business Coach</h3>
            <ul className="list-disc list-inside text-silver/80 space-y-2">
              <li>Scaling a Startup</li>
              <li>Pivoting Strategy</li>
              <li>Leadership Transitions</li>
              <li>Post-Merger/Acquisition</li>
              <li>Performance Plateaus</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gold">5. Mini Case Study</h3>
            <p className="text-silver/80 leading-relaxed">
              <em>Maria's Agency Growth</em> – 75% revenue jump, 28% profit margin, +10 hours/week for strategy in 12 months.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gold">6. 5 Actionable Takeaways</h3>
            <ol className="list-decimal list-inside text-silver/80 space-y-2">
              <li>Define Clear Objectives</li>
              <li>Commit to Accountability</li>
              <li>Leverage 360-Degree Feedback</li>
              <li>Embed New Behaviors</li>
              <li>Measure & Adjust</li>
            </ol>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gold">7. Getting Started</h3>
            <ul className="list-disc list-inside text-silver/80 space-y-2">
              <li>Find the Right Fit (ICF-credentialed)</li>
              <li>Clarify Scope & Success Criteria</li>
              <li>Secure Leadership Buy-In</li>
              <li>Allocate Time & Resources</li>
              <li>Review Progress Regularly</li>
            </ul>
          </section>

          <section className="text-center">
            <p className="text-xl font-semibold text-gold mb-6">Ready to Transform Your Business?</p>
            <Link 
              to="/#contact" 
              className="mt-8 inline-block px-6 py-3 border border-gold rounded hover:bg-gold hover:text-black transition-colors"
            >
              👉 Schedule Your First Free Consult
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default WhatIsBusinessCoaching;
