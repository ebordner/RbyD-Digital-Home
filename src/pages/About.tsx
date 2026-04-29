import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Zap, 
  Target, 
  TrendingUp, 
  Quote,
  ShieldCheck,
  Rocket,
  Heart
} from "lucide-react";
import { Section, Button, Navbar, Footer } from "../components/Common";
import { Testimonial } from "../components/Testimonials";

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

export default function About() {
  return (
    <div className={`min-h-screen font-sans bg-[${COLORS.cream}] text-[${COLORS.navy}]`}>
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className={`absolute top-0 left-1/3 w-96 h-96 bg-[${COLORS.camel}]/10 blur-[120px] rounded-full`} />
        </div>
        
        <Section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={`inline-block px-4 py-1.5 rounded-full bg-[${COLORS.camel}]/10 text-[${COLORS.camel}] text-[13px] font-bold tracking-[0.3em] uppercase mb-6`}>
              About Elissa
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-8 leading-[1.1]">
              The Product Manager Who <br />
              <span className={`italic text-[${COLORS.camel}] text-5xl md:text-7xl`}>Threw Away Her Corporate Wardrobe</span>
            </h1>
            <p className={`text-xl text-[${COLORS.charcoal}] max-w-3xl mx-auto mb-12 leading-relaxed`}>
              I've spent over 20 years mastering something many people in the startup world are not deeply familiar with: the art and science of product management.
            </p>
          </motion.div>
        </Section>
      </header>

      {/* Story Section 1 */}
      <Section className="grid lg:grid-cols-2 gap-16 items-start">
        <div className={`space-y-8 text-[${COLORS.charcoal}] text-lg leading-relaxed`}>
          <p>
            I started in the late 90s—which is rare. I've never met anyone else who began their career in product management and stayed in it for two decades. Most people stumble into it. <span className={`text-[${COLORS.navy}] font-bold`}>I was born for it.</span>
          </p>
          <p>
            Over those 20 years, working with Fortune 500 companies, I ran into the same 10 failure points over and over again. The same structural mistakes. The same preventable disasters. Whether you're launching a product for an $8 billion telecommunications company or bootstrapping a startup in your garage, the failure points are identical.
          </p>
          <p>
            So I did what any engineer does when they see a recurring problem: <span className={`text-[${COLORS.navy}] font-bold`}>I systematically eliminated each one.</span>
          </p>
        </div>
        <div className={`bg-[${COLORS.bone}] p-8 rounded-3xl border border-[${COLORS.camel}]/20`}>
          <div className="flex gap-4 mb-6">
            <div className={`w-12 h-12 rounded-full bg-[${COLORS.camel}]/10 flex items-center justify-center shrink-0`}>
              <ShieldCheck className={`w-6 h-6 text-[${COLORS.camel}]`} />
            </div>
            <div>
              <h4 className={`text-xl font-serif font-bold text-[${COLORS.navy}] mb-2`}>Cracking the Code</h4>
              <p className={`text-[${COLORS.charcoal}]`}>
                With every product I brought to market, I engineered one more failure point out of the equation.
              </p>
            </div>
          </div>
          <div className={`bg-[${COLORS.cream}] p-6 rounded-2xl border border-[${COLORS.camel}]/10`}>
            <p className={`text-[11px] text-[${COLORS.camel}] uppercase tracking-[0.2em] font-bold mb-2`}>Final Corporate Launch</p>
            <p className={`text-[${COLORS.navy}] text-lg font-serif italic mb-4`}>
              In-home WiFi for one of the largest private telecommunications companies in the US.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className={`text-2xl font-bold text-[${COLORS.navy}]`}>1M</div>
                <div className={`text-[11px] text-[${COLORS.charcoal}] uppercase tracking-widest`}>Subscribers</div>
              </div>
              <div>
                <div className={`text-2xl font-bold text-[${COLORS.navy}]`}>$100M</div>
                <div className={`text-[11px] text-[${COLORS.charcoal}] uppercase tracking-widest`}>Revenue Year One</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* The Decision */}
      <div className={`bg-[${COLORS.bone}] py-24`}>
        <Section className="text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Then My Soul Said: It's Time to Go</h2>
          <p className={`text-xl text-[${COLORS.charcoal}] leading-relaxed mb-12 italic`}>
            "I left corporate on a Thursday. By Monday, my body had made a decision my mind was still processing—I threw away my entire corporate wardrobe. All of it. I haven't updated my resume since."
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className={`bg-[${COLORS.cream}] p-10 rounded-2xl border border-[${COLORS.camel}]/10`}>
              <h3 className={`font-bold text-[${COLORS.navy}] mb-6 uppercase tracking-widest text-lg`}>A Soul-Knowing</h3>
              <p className={`text-[${COLORS.charcoal}] text-lg leading-relaxed`}>
                It wasn't a calculated career move. It was a soul-knowing. Because here's what I couldn't unsee: the startup world was bleeding out, and I had the tourniquet.
              </p>
            </div>
            <div className={`bg-[${COLORS.cream}] p-10 rounded-2xl border border-[${COLORS.camel}]/10`}>
              <h3 className={`font-bold text-[${COLORS.navy}] mb-6 uppercase tracking-widest text-lg`}>The Math was Obvious</h3>
              <p className={`text-[${COLORS.charcoal}] text-lg leading-relaxed`}>
                I could spend another three years perfecting one more product for one more company, or I could take 20 years of engineered solutions and stop the massacre in the startup ecosystem.
              </p>
            </div>
          </div>
        </Section>
      </div>

      {/* The MVP Myth */}
      <Section className="relative">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className={`bg-[${COLORS.oxblood}]/[0.03] p-12 rounded-3xl border-2 border-[${COLORS.oxblood}]/10 relative overflow-hidden`}>
              <div className={`absolute top-0 left-0 w-1.5 h-full bg-[${COLORS.oxblood}]/40`} />
              <h3 className={`text-3xl font-serif font-bold mb-6 text-[${COLORS.oxblood}] flex items-center gap-3`}>
                <Zap className="w-8 h-8" />
                The MVP Myth
              </h3>
              <p className={`text-[${COLORS.charcoal}] mb-8 leading-relaxed font-medium`}>
                If MVPs were really the silver bullet everyone thinks they are, then 95% of startups wouldn't still be failing.
              </p>
              <div className="space-y-4">
                <div className={`flex items-center gap-3 text-[${COLORS.charcoal}]/70`}>
                  <XCircle className={`w-5 h-5 text-[${COLORS.oxblood}]`} />
                  <span className="line-through">MVP validates product.</span>
                </div>
                <div className={`flex items-center gap-3 text-[${COLORS.forest}] font-bold`}>
                  <CheckCircle2 className={`w-5 h-5 text-[${COLORS.forest}]`} />
                  <span>MVP+R™ validates revenue.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Killing 95% of Startups</h2>
            <p className={`text-lg text-[${COLORS.charcoal}] mb-6 leading-relaxed`}>
              The concept of MVP came out of Eric Ries' book The Lean Startup. And I am tired—exhausted—of watching everyone trip over the same blind spots.
            </p>
            <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed`}>
              We shouldn't be here 15-20 years later, still making the same mistakes. That's the gap that's costing founders everything.
            </p>
          </div>
        </div>
      </Section>

      {/* Testimonial Quote */}
      <Testimonial 
        variant="pull-quote"
        quote="I wish I had met Elissa six years ago. She would have saved me six years of my life and more money than I can even admit to myself."
        attribution="Startup Founder, Atlanta"
        className="[&>blockquote]:text-xl [&>blockquote]:md:text-2xl [&>blockquote]:lg:text-2xl"
      />

      {/* Scaling a Broken Foundation */}
      <Section className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">What Happens When You Scale a Broken Foundation</h2>
          <p className={`text-lg text-[${COLORS.charcoal}] mb-8 leading-relaxed`}>
            Founders iterate themselves out of business. They spend years and millions on version 1.1, 1.2, 1.3, only to find the market has moved on.
          </p>
          <div className={`bg-[${COLORS.bone}] p-6 rounded-2xl border-l-4 border-[${COLORS.oxblood}]`}>
            <p className={`text-[${COLORS.navy}] italic`}>
              "And if you think AI is going to fix this problem? It won't. If anything, AI just exposes the cracks faster."
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className={`bg-[${COLORS.cream}] p-10 rounded-2xl border border-[${COLORS.camel}]/10`}>
            <h4 className={`font-bold text-[${COLORS.navy}] mb-4 uppercase tracking-widest text-sm`}>The VC Perspective</h4>
            <p className={`text-[${COLORS.charcoal}] text-lg leading-relaxed`}>
              "You're talking our language. You can describe our problems better than we can. Better than the startup founders in our portfolio can."
            </p>
          </div>
          <div className={`bg-[${COLORS.cream}] p-10 rounded-2xl border border-[${COLORS.camel}]/10`}>
            <h4 className={`font-bold text-[${COLORS.navy}] mb-4 uppercase tracking-widest text-sm`}>Structural Soundness</h4>
            <p className={`text-[${COLORS.charcoal}] text-lg leading-relaxed`}>
              I've launched billion-dollar products. I know what structural soundness looks like. And I know how to build it.
            </p>
          </div>
        </div>
      </Section>

      {/* The Architecture */}
      <Section className="text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">The Architecture That Changes Everything</h2>
        <p className={`text-xl text-[${COLORS.charcoal}] mb-12 leading-relaxed`}>
          Most founders build the product, then figure out the business model. <span className={`text-[${COLORS.navy}] font-bold`}>I reverse that.</span> The financial business model informs what gets built—not the other way around.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className={`bg-[${COLORS.bone}] p-10 rounded-3xl border border-[${COLORS.camel}]/20`}>
            <Rocket className={`w-10 h-10 text-[${COLORS.camel}] mb-6`} />
            <h3 className="text-2xl font-serif font-bold mb-4">The Profitable Method™</h3>
            <p className={`text-[${COLORS.charcoal}] leading-relaxed`}>
              I eliminate the structural failure points that kill 95% of startups.
            </p>
          </div>
          <div className={`bg-[${COLORS.bone}] p-10 rounded-3xl border border-[${COLORS.camel}]/20`}>
            <TrendingUp className={`w-10 h-10 text-[${COLORS.camel}] mb-6`} />
            <h3 className="text-2xl font-serif font-bold mb-4">MVP+R™ Framework</h3>
            <p className={`text-[${COLORS.charcoal}] leading-relaxed`}>
              I architect revenue logic into the foundation...so scale increases valuation instead of fragility...especially in an AI-compressed market.
            </p>
          </div>
        </div>
      </Section>

      {/* Women Win */}
      <div className={`bg-[${COLORS.bone}] py-24`}>
        <Section className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`order-2 lg:order-1 bg-[${COLORS.cream}] p-12 rounded-3xl border border-[${COLORS.camel}]/10`}>
            <h3 className={`text-3xl font-serif font-bold mb-6 italic text-[${COLORS.navy}]`}>"Structural excellence is the great equalizer."</h3>
            <p className={`text-[${COLORS.charcoal}] leading-relaxed`}>
              When your foundation is sound, when your revenue logic is defensible, when your architecture is durable—gender, background, none of it matters. The numbers speak for themselves.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Women Win at the Table</h2>
            <p className={`text-lg text-[${COLORS.charcoal}] mb-6 leading-relaxed`}>
              I once worked with a female founder who thought the 2% VC funding ceiling was her limit. I beg to differ.
            </p>
            <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed`}>
              If you have everything locked and loaded—if you know your financials, if your architecture is structurally sound—you can walk into any room with any VC and get the money.
            </p>
          </div>
        </Section>
      </div>

      {/* The Movement */}
      <Section className="text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">The Movement I'm Building</h2>
        <p className={`text-xl text-[${COLORS.charcoal}] mb-12 leading-relaxed max-w-3xl mx-auto`}>
          For me, this is more than teaching frameworks. My goal is to fundamentally shift the way startups approach the product development process, because 95% startup failure is not a statistic that any of us should be comfortable with continuing to tolerate.
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {[
            "MVP+R as commonly known as MVP",
            "VCs requiring this framework for due diligence",
            "Taught in business schools globally",
            "Founders who architect, not iterate",
            "Drop the failure rate from 95%",
            "Save founders six years of their lives"
          ].map((goal, i) => (
            <div key={i} className={`flex gap-4 items-start bg-[${COLORS.bone}] p-6 rounded-2xl border border-[${COLORS.camel}]/10`}>
              <CheckCircle2 className={`w-6 h-6 text-[${COLORS.camel}] shrink-0`} />
              <span className={`text-[${COLORS.navy}] font-bold uppercase tracking-widest text-sm`}>{goal}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Personal Motivation */}
      <Section className="relative overflow-hidden">
        <div className={`absolute top-0 right-0 w-64 h-64 bg-[${COLORS.camel}]/10 blur-[100px] -z-10`} />
        <div className="max-w-3xl mx-auto text-center">
          <Heart className={`w-12 h-12 text-[${COLORS.oxblood}]/50 mx-auto mb-8`} />
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">This Is Personal</h2>
          <p className={`text-xl text-[${COLORS.charcoal}] leading-relaxed mb-12`}>
            This work isn't about my own business. Its about stopping the bleeding in our industry. It's about the founder risking their one shot at building something that matters. I know how to fix this. And I can't just watch anymore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>Get Your Diagnostic - $222</Button>
            <Button variant="outline">Book an Audit - $5K</Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

const XCircle = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
);
