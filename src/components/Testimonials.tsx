import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronDown, ChevronUp } from 'lucide-react';
import { Section } from './Common';

const COLORS = {
  cream: "#FDFCF0",
  bone: "#F2F0E4",
  camel: "#C5A059",
  navy: "#1B263B",
  charcoal: "#333333",
  black: "#000000",
  gold: "#D4AF37",
  forest: "#1B3022",
  oxblood: "#4A0E0E"
};

interface TestimonialProps {
  quote: string;
  attribution: string;
  className?: string;
  variant?: 'card' | 'pull-quote' | 'callout';
}

export const Testimonial: React.FC<TestimonialProps> = ({ 
  quote, 
  attribution, 
  className = "", 
  variant = 'card' 
}) => {
  if (variant === 'pull-quote') {
    return (
      <div className={`py-16 md:py-24 text-center max-w-4xl mx-auto px-6 bg-[${COLORS.bone}]/30 border-l-4 border-[${COLORS.forest}] ${className}`}>
        <Quote className={`w-16 h-16 text-[${COLORS.camel}]/30 mx-auto mb-8`} />
        <blockquote className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold italic text-[${COLORS.navy}] leading-tight mb-8`}>
          “{quote}”
        </blockquote>
        <cite className={`text-lg md:text-xl text-[${COLORS.camel}] not-italic font-bold uppercase tracking-widest`}>
          — {attribution}
        </cite>
      </div>
    );
  }

  if (variant === 'callout') {
    return (
      <div className={`bg-[${COLORS.bone}] p-8 md:p-12 rounded-[2rem] border border-[${COLORS.camel}]/20 relative overflow-hidden ${className}`}>
        <div className={`absolute top-0 left-0 w-1 h-full bg-[${COLORS.camel}]`} />
        <Quote className={`w-10 h-10 text-[${COLORS.camel}]/10 absolute top-6 right-8`} />
        <blockquote className={`text-xl md:text-2xl font-serif italic text-[${COLORS.navy}] leading-relaxed mb-6 relative z-10`}>
          “{quote}”
        </blockquote>
        <cite className={`text-[${COLORS.charcoal}] not-italic font-bold uppercase tracking-widest text-sm`}>
          — {attribution}
        </cite>
      </div>
    );
  }

  // Default 'card' variant
  return (
    <div className={`bg-[${COLORS.cream}] p-8 md:p-10 rounded-3xl border border-[${COLORS.camel}]/10 shadow-sm hover:shadow-md transition-shadow group ${className}`}>
      <div className="mb-6">
        <Quote className={`w-8 h-8 text-[${COLORS.camel}]/20 group-hover:text-[${COLORS.camel}]/40 transition-colors`} />
      </div>
      <blockquote className={`text-[18px] md:text-[20px] leading-relaxed text-[${COLORS.navy}] font-medium mb-8`}>
        “{quote}”
      </blockquote>
      <cite className={`text-[14px] md:text-[16px] text-[${COLORS.camel}] not-italic font-bold uppercase tracking-wider`}>
        — {attribution}
      </cite>
    </div>
  );
};

export const TestimonialGrid: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const mainTestimonials = [
    {
      quote: "I wish I had met Elissa six years ago. She would have saved me six years of my life and more money than I can even admit to myself.",
      attribution: "Startup Founder, Atlanta"
    },
    {
      quote: "You're talking our language. You can describe our problems better than we can. Better than the startup founders in our portfolio can.",
      attribution: "Venture Capital Firm"
    },
    {
      quote: "We were on version 1.3, rebuilding features we thought were done. Elissa showed us in one session what was structurally broken. We stopped spinning and started architecting. That clarity alone was worth 10x the investment.",
      attribution: "Series A Founder, SaaS"
    },
    {
      quote: "I thought being a woman at the table was my problem. Elissa showed me my financial model was the problem. Once we fixed the structure, investors stopped questioning me and started writing checks.",
      attribution: "Female Founder, MedTech"
    }
  ];

  const extraTestimonials = [
    {
      quote: "I walked into investor meetings confident, but I couldn't cleanly answer their questions about margin assumptions. After working with Elissa, I had the answers locked and loaded. We closed our round 6 weeks later.",
      attribution: "Seed Stage Founder, FinTech"
    },
    {
      quote: "As a GP, I was watching three portfolio companies make the same structural mistakes. Elissa gave me the language and framework to diagnose what was actually broken. Now I can underwrite durability, not just traction.",
      attribution: "General Partner, Early-Stage VC Fund"
    },
    {
      quote: "We were growing, but it felt fragile. I couldn't explain why. Elissa mapped it in one session—our customer journey had friction points we didn't see, and our tech stack couldn't deliver on our brand promise. Fixing those two things changed everything.",
      attribution: "Series A Founder, Marketplace"
    },
    {
      quote: "Elissa doesn't just tell you what's wrong. She shows you exactly where the revenue opportunities are hiding—before you build. We found a monetization path we hadn't even considered. It's now 40% of our revenue.",
      attribution: "Founder, AI-Powered SaaS"
    }
  ];

  return (
    <Section className="py-24">
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-4 text-[${COLORS.navy}]`}>What Founders & VCs Say</h2>
        <p className={`text-[${COLORS.charcoal}] text-lg`}>Real results from founders who architect before they scale</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {mainTestimonials.map((t, i) => (
          <Testimonial key={i} {...t} />
        ))}
      </div>

      <div className="text-center">
        <button 
          onClick={() => setShowMore(!showMore)}
          className={`inline-flex items-center gap-2 text-[${COLORS.camel}] font-bold hover:text-[${COLORS.gold}] transition-colors uppercase tracking-widest text-sm`}
        >
          {showMore ? "Show fewer stories" : "See more founder stories"}
          {showMore ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      <AnimatePresence>
        {showMore && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8 pt-12">
              {extraTestimonials.map((t, i) => (
                <Testimonial key={i} {...t} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};
