import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  ShieldAlert, 
  Zap, 
  TrendingUp, 
  ChevronRight,
  Layers,
  Target,
  Search,
  Quote,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Section } from "../components/Common";

// --- Theme Constants ---
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

// --- Local Components for Boardroom Theme ---

const BoardroomButton = ({ children, variant = "primary", className = "", onClick }: { children: React.ReactNode; variant?: "primary" | "outline" | "secondary"; className?: string; onClick?: () => void }) => {
  const baseStyles = "inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 active:scale-95 uppercase tracking-widest text-[13px]";
  const variants = {
    primary: `bg-[${COLORS.navy}] text-[${COLORS.cream}] hover:bg-[${COLORS.black}] shadow-xl shadow-[${COLORS.navy}]/10`,
    secondary: `bg-[${COLORS.camel}] text-[${COLORS.black}] hover:bg-[${COLORS.gold}]`,
    outline: `border-2 border-[${COLORS.navy}] text-[${COLORS.navy}] hover:bg-[${COLORS.navy}] hover:text-[${COLORS.cream}]`
  };
  
  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Navbar7 = () => (
  <nav className={`fixed top-0 w-full z-50 bg-[${COLORS.cream}]/80 backdrop-blur-md border-b border-[${COLORS.camel}]/20 px-6 py-4 flex justify-between items-center`}>
    <Link to="/" className={`text-xl font-bold tracking-tighter flex items-center gap-2 text-[${COLORS.black}]`}>
      <div className={`w-8 h-8 bg-[${COLORS.navy}] rounded flex items-center justify-center`}>
        <Layers className={`w-5 h-5 text-[${COLORS.camel}]`} />
      </div>
      <span className="font-serif italic">Revenue by Design | Profit is a Design Decision</span>
    </Link>
    <div className={`hidden md:flex gap-8 text-[13px] font-bold uppercase tracking-[0.2em] text-[${COLORS.charcoal}]`}>
      <Link to="/" className={`hover:text-[${COLORS.camel}] transition-colors`}>Home</Link>
      <Link to="/about" className={`hover:text-[${COLORS.camel}] transition-colors`}>About</Link>
      <Link to="/mvp-r" className={`hover:text-[${COLORS.camel}] transition-colors`}>MVP+R™</Link>
      <Link to="/case-studies" className={`hover:text-[${COLORS.camel}] transition-colors`}>Case Studies</Link>
      <Link to="/audit" className={`hover:text-[${COLORS.camel}] transition-colors`}>Audit</Link>
      <Link to="/diagnostic" className={`hover:text-[${COLORS.camel}] transition-colors`}>Diagnostic</Link>
    </div>
    <BoardroomButton variant="outline" className="py-2 px-6">Contact</BoardroomButton>
  </nav>
);

const Footer7 = () => (
  <footer className={`bg-[${COLORS.navy}] py-24 border-t border-[${COLORS.camel}]/30 text-[${COLORS.cream}]`}>
    <Section className="text-center">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            <div className={`w-6 h-6 bg-[${COLORS.camel}] rounded flex items-center justify-center`}>
              <Layers className={`w-4 h-4 text-[${COLORS.navy}]`} />
            </div>
            <span className="font-serif italic text-2xl">Revenue By Design</span>
          </div>
          <div className={`text-[${COLORS.cream}]/70 text-sm font-medium`}>
            A service of Autostream Marketing LLC
          </div>
          <div className={`text-[${COLORS.cream}]/50 text-xs tracking-wide`}>
            107 Technology Parkway, Suite 680, Peachtree Corners, Ga 30092
          </div>
        </div>

        <div className={`flex flex-wrap justify-center gap-4 md:gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[${COLORS.camel}]`}>
          <Link to="/terms" className={`hover:text-[${COLORS.gold}] transition-colors`}>Terms & Conditions</Link>
          <span className="opacity-30">|</span>
          <Link to="/privacy" className={`hover:text-[${COLORS.gold}] transition-colors`}>Privacy Policy</Link>
          <span className="opacity-30">|</span>
          <Link to="/refund" className={`hover:text-[${COLORS.gold}] transition-colors`}>Refund Policy</Link>
        </div>

        <div className={`mt-12 pt-12 border-t border-[${COLORS.cream}]/10 w-full flex flex-col md:flex-row justify-between items-center gap-8`}>
          <div className={`text-[${COLORS.cream}]/40 text-[10px] font-bold uppercase tracking-widest`}>
            © 2026 Autostream Marketing LLC. All rights reserved.
          </div>
          <div className={`flex gap-6 text-[${COLORS.camel}]`}>
            <Zap className={`w-5 h-5 cursor-pointer hover:text-[${COLORS.gold}] transition-colors`} />
            <Target className={`w-5 h-5 cursor-pointer hover:text-[${COLORS.gold}] transition-colors`} />
            <Search className={`w-5 h-5 cursor-pointer hover:text-[${COLORS.gold}] transition-colors`} />
          </div>
        </div>
      </div>
    </Section>
  </footer>
);

// --- Testimonial Components for Home 7 ---

const Testimonial7 = ({ quote, attribution }: { quote: string; attribution: string; key?: any }) => (
  <div className={`bg-[#FDFCF0] p-4 md:p-5 rounded-2xl border border-[${COLORS.camel}]/20 shadow-sm hover:shadow-md transition-shadow group`}>
    <div className="mb-3">
      <Quote className={`w-6 h-6 text-[${COLORS.navy}]/20 group-hover:text-[${COLORS.navy}]/40 transition-colors`} />
    </div>
    <blockquote className={`text-[16px] leading-relaxed text-[${COLORS.black}] font-medium mb-4`}>
      “{quote}”
    </blockquote>
    <cite className={`text-[14px] text-[${COLORS.charcoal}]/60 not-italic font-bold uppercase tracking-widest`}>
      — {attribution}
    </cite>
  </div>
);

const TestimonialGrid7 = () => {
  const testimonials = [
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
    <Section className="py-12">
      <div className="text-center mb-12">
        <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-4 text-[${COLORS.navy}]`}>What Founders & VCs Say</h2>
        <p className={`text-[${COLORS.charcoal}]/60 text-lg uppercase tracking-widest font-bold text-xs`}>Real results from founders who architect before they scale</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {testimonials.map((t, i) => (
          <Testimonial7 key={i} quote={t.quote} attribution={t.attribution} />
        ))}
      </div>

      <div className="text-center">
        <button 
          className={`inline-flex items-center gap-2 text-[${COLORS.forest}] font-bold hover:opacity-80 transition-opacity uppercase tracking-[0.3em] text-[13px]`}
        >
          See more founder stories
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </Section>
  );
};

export default function Home7() {
  return (
    <div className={`min-h-screen font-sans bg-[${COLORS.cream}] text-[${COLORS.black}] selection:bg-[${COLORS.camel}] selection:text-[${COLORS.cream}]`}>
      <Navbar7 />

      {/* Hero Section */}
      <header className={`relative pt-48 pb-32 overflow-hidden border-b border-[${COLORS.camel}]/10`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
          <div className={`absolute top-0 left-1/4 w-96 h-96 bg-[${COLORS.camel}]/40 blur-[120px] rounded-full`} />
          <div className={`absolute bottom-0 right-1/4 w-96 h-96 bg-[${COLORS.navy}]/20 blur-[120px] rounded-full`} />
        </div>
        
        <Section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={`inline-block px-4 py-1.5 rounded-full bg-[${COLORS.camel}]/10 text-[${COLORS.camel}] text-[13px] font-bold tracking-[0.3em] uppercase mb-6 border border-[${COLORS.camel}]/20`}>
              The Top 5% Standard
            </span>
            <h1 className={`text-6xl md:text-8xl font-serif font-bold tracking-tight mb-8 leading-[1.1] text-[${COLORS.navy}]`}>
              What the <span className={`italic text-[${COLORS.camel}]`}>Top 5%</span> <br />
              Do Differently
            </h1>
            <p className={`text-xl md:text-2xl text-[${COLORS.charcoal}] max-w-3xl mx-auto mb-12 leading-relaxed`}>
              The Top 5% don't iterate their way to success. They architect before they scale. 
              They validate revenue architecture using the <span className={`text-[${COLORS.navy}] font-bold underline decoration-[${COLORS.camel}] underline-offset-4`}>MVP+R™ framework</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/mvp-r">
                <BoardroomButton>Learn more about MVP+R™ <ArrowRight className="w-4 h-4" /></BoardroomButton>
              </Link>
              <Link to="/diagnostic">
                <BoardroomButton variant="outline">View Diagnostic</BoardroomButton>
              </Link>
            </div>
          </motion.div>
        </Section>
      </header>

      <div className={`bg-[${COLORS.bone}] border-b border-[${COLORS.camel}]/10`}>
        <TestimonialGrid7 />
      </div>

      {/* Experience Section */}
      <Section id="experience" className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className={`aspect-[4/5] rounded-2xl overflow-hidden border-8 border-[${COLORS.bone}] shadow-2xl`}>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
              alt="Professional Portrait" 
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className={`absolute -bottom-8 -right-8 bg-[${COLORS.navy}] p-8 rounded-xl max-w-xs shadow-2xl border border-[${COLORS.camel}]/30`}>
            <div className={`text-4xl font-serif font-bold text-[${COLORS.camel}] mb-1`}>20Y</div>
            <div className={`text-[13px] text-[${COLORS.cream}] font-bold uppercase tracking-widest leading-tight`}>
              Fortune 500 Product Management Experience
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>I've Been in Both Rooms</h2>
          <div className={`space-y-6 text-[${COLORS.charcoal}] text-lg leading-relaxed`}>
            <p>
              I spent 20 years in Fortune 500 product management—starting in the late 90s, which is rare. 
              I've never met anyone else who began their career in product and stayed for two decades.
            </p>
            <p>
              Over those 20 years, I ran into the same 10 failure points over and over again. 
              So I systematically engineered each one out of the equation.
            </p>
            <div className={`bg-[${COLORS.bone}] p-8 rounded-xl border-l-4 border-[${COLORS.camel}] shadow-sm`}>
              <p className={`text-[${COLORS.navy}] font-bold mb-2 italic uppercase tracking-widest text-[13px]`}>My last corporate launch?</p>
              <p className={`text-[${COLORS.charcoal}]`}>
                In-home WiFi for one of the largest telecommunications companies in the United States. 
                One million subscribers. $100 million in revenue. Year one.
              </p>
            </div>
            <p>
              I didn't do that by iterating. I did it by <span className={`text-[${COLORS.navy}] font-bold`}>architecting revenue before scaling product</span>.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* Why Section */}
      <div className={`bg-[${COLORS.navy}] py-24 text-[${COLORS.cream}]`}>
        <Section className="text-center max-w-4xl">
          <h2 className={`text-4xl font-serif font-bold mb-12 text-[${COLORS.camel}]`}>Why I Left Fortune 500 for the Startup World</h2>
          <p className={`text-xl text-[${COLORS.cream}]/80 leading-relaxed mb-12`}>
            I could have stayed in corporate. Perfected one more product. Generated another $100 million. 
            But I hit my limit because I kept seeing the same pattern in the startup world: 
            <span className={`text-[${COLORS.camel}] italic`}> Brilliant founders. Solid ideas. Real traction. And they were bleeding out.</span>
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Capability", desc: "Founders are capable" },
              { icon: TrendingUp, title: "Effort", desc: "Working hard enough" },
              { icon: Layers, title: "Foundation", desc: "Missing architecture" }
            ].map((item, i) => (
              <div key={i} className={`bg-[${COLORS.cream}]/5 p-8 rounded-xl text-center border border-[${COLORS.camel}]/20 hover:border-[${COLORS.camel}]/50 transition-colors`}>
                <item.icon className={`w-8 h-8 text-[${COLORS.camel}] mx-auto mb-4`} />
                <h3 className="font-bold mb-2 uppercase tracking-widest text-[13px]">{item.title}</h3>
                <p className={`text-[16px] text-[${COLORS.cream}]/50`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* The MVP Myth */}
      <Section id="framework" className="relative">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className={`text-4xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>The MVP Myth That's Killing 95% of Startups</h2>
            <p className={`text-lg text-[${COLORS.charcoal}] mb-8 leading-relaxed`}>
              Everyone believes that if they have an MVP—a Minimum Viable Product—they've got their silver bullet. 
              I'm here to tell you: <span className={`text-[${COLORS.oxblood}] font-bold`}>If MVPs were enough, 95% of startups wouldn't still be failing.</span>
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-xl bg-[${COLORS.oxblood}]/10 flex items-center justify-center shrink-0 border border-[${COLORS.oxblood}]/20`}>
                  <XCircle className={`w-6 h-6 text-[${COLORS.oxblood}]`} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase tracking-widest text-[13px]">MVP validates product demand</h4>
                  <p className={`text-[${COLORS.charcoal}]/60 text-base`}>It doesn't validate revenue architecture.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-xl bg-[${COLORS.forest}]/10 flex items-center justify-center shrink-0 border border-[${COLORS.forest}]/20`}>
                  <CheckCircle2 className={`w-6 h-6 text-[${COLORS.forest}]`} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase tracking-widest text-[13px]">MVP+R™ validates revenue logic</h4>
                  <p className={`text-[${COLORS.charcoal}]/60 text-base`}>Ensures your foundation holds under scale.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`bg-[${COLORS.bone}] p-12 rounded-2xl border border-[${COLORS.camel}]/30 relative shadow-xl`}>
            <div className={`absolute -top-6 -left-6 w-24 h-24 bg-[${COLORS.gold}]/20 blur-3xl rounded-full`} />
            <h3 className={`text-3xl font-serif font-bold mb-6 text-[${COLORS.navy}]`}>MVP+R™</h3>
            <p className={`text-xl font-bold mb-8 text-[${COLORS.camel}] uppercase tracking-widest text-[13px]`}>
              Minimum Viable Product + Revenue Validation
            </p>
            <p className={`text-[${COLORS.charcoal}] mb-8 leading-relaxed`}>
              It's not enough to know people want your product. You have to know your revenue logic will hold under scale.
            </p>
            <Link to="/mvp-r" className="block">
              <BoardroomButton variant="secondary" className="w-full justify-center">See how MVP+R™ works →</BoardroomButton>
            </Link>
          </div>
        </div>
      </Section>

      {/* What's Actually Broken */}
      <div className={`bg-[${COLORS.navy}] py-24 border-y border-[${COLORS.camel}]/20`}>
        <Section>
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-serif font-bold mb-6 text-[${COLORS.camel}]`}>What's Actually Broken (And Why You Can't See It)</h2>
            <p className={`text-[${COLORS.cream}]/60 max-w-2xl mx-auto uppercase tracking-[0.2em] text-[13px] font-bold`}>
              You feel it. But you can't pinpoint it. That's because you're looking at symptoms, not structure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "We keep rebuilding features.",
              "Investors want traction, but revenue is inconsistent.",
              "I can't clearly explain how our pricing ties to margin.",
              "Our backend and our promise don't match.",
              "We're growing, but I don't trust the foundation."
            ].map((quote, i) => (
              <div key={i} className={`bg-[${COLORS.cream}]/5 p-8 rounded-xl italic text-[${COLORS.cream}]/80 border-l-2 border-[${COLORS.camel}]`}>
                "{quote}"
              </div>
            ))}
          </div>
          <div className={`mt-16 bg-[${COLORS.cream}] p-12 rounded-xl text-center border border-[${COLORS.camel}]/30 shadow-2xl`}>
            <p className={`text-2xl font-serif italic mb-8 text-[${COLORS.navy}]`}>
              Your product, your financial model, your tech stack, your customer journey, and your market validation aren't cross-referenced.
            </p>
            <p className={`text-[${COLORS.charcoal}]`}>
              There are <span className={`text-[${COLORS.navy}] font-bold underline decoration-[${COLORS.camel}]`}>gaps</span>. There are <span className={`text-[${COLORS.navy}] font-bold underline decoration-[${COLORS.camel}]`}>overlaps</span>. 
              And every time you scale, those gaps get exposed.
            </p>
          </div>
        </Section>
      </div>

      {/* Diagnostic Section */}
      <Section id="diagnostic" className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[${COLORS.camel}]/5 blur-[120px] rounded-full`} />
        </div>
        
        <div className="text-center mb-16">
          <span className={`text-[${COLORS.camel}] font-bold tracking-[0.4em] uppercase text-[13px]`}>Diagnostic</span>
          <h2 className={`text-5xl font-serif font-bold mt-4 mb-6 text-[${COLORS.navy}]`}>Find Out Where You're Exposed</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className={`lg:col-span-3 bg-[${COLORS.bone}] p-12 rounded-2xl border border-[${COLORS.camel}]/20 shadow-xl`}>
            <h3 className={`text-3xl font-serif font-bold mb-4 text-[${COLORS.navy}]`}>Revenue Architecture Diagnostic</h3>
            <div className={`text-4xl font-bold text-[${COLORS.camel}] mb-8`}>$222</div>
            <p className={`text-lg text-[${COLORS.charcoal}] mb-12 leading-relaxed`}>
              Find out exactly where your foundation is exposed—before you scale.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h4 className={`font-bold text-[${COLORS.navy}] flex items-center gap-2 uppercase tracking-widest text-[13px]`}>
                  <ShieldAlert className={`w-4 h-4 text-[${COLORS.oxblood}]`} /> This diagnostic reveals:
                </h4>
                <ul className={`space-y-3 text-[16px] text-[${COLORS.charcoal}]/70`}>
                  <li>• Where your revenue logic breaks under scale</li>
                  <li>• Where pricing and margin misalign</li>
                  <li>• Where your tech stack weakens lifecycle monetization</li>
                  <li>• Where AI compression could collapse your moat</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className={`font-bold text-[${COLORS.navy}] flex items-center gap-2 uppercase tracking-widest text-[13px]`}>
                  <CheckCircle2 className={`w-4 h-4 text-[${COLORS.forest}]`} /> You'll receive:
                </h4>
                <ul className={`space-y-3 text-[16px] text-[${COLORS.charcoal}]/70`}>
                  <li>• Fragility Scorecard across 6 critical dimensions</li>
                  <li>• Top 5 Failure Points identified in YOUR business</li>
                  <li>• Exposure Heat Map showing low → high risk zones</li>
                  <li>• 10-minute personalized breakdown video</li>
                </ul>
              </div>
            </div>
            
            <Link to="/diagnostic">
              <BoardroomButton className="w-full justify-center">Get Your Revenue Architecture Diagnostic - $222</BoardroomButton>
            </Link>
          </div>
          
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className={`bg-[${COLORS.navy}] p-8 rounded-2xl flex-1 border border-[${COLORS.camel}]/30 text-[${COLORS.cream}] shadow-xl`}>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-[13px]">Revenue Architecture Audit</h3>
              <div className={`text-2xl font-bold text-[${COLORS.camel}] mb-6`}>$5,000</div>
              <p className={`text-[16px] text-[${COLORS.cream}]/60 mb-8 leading-relaxed`}>
                Four intensive sessions to map your gaps and architect the fix.
              </p>
              <Link to="/audit">
                <BoardroomButton variant="outline" className={`w-full justify-center border-[${COLORS.camel}] text-[${COLORS.camel}] hover:bg-[${COLORS.camel}] hover:text-[${COLORS.navy}]`}>Book Your Audit - $5K</BoardroomButton>
              </Link>
            </div>
            <div className={`bg-[${COLORS.camel}] p-8 rounded-2xl text-[${COLORS.navy}] shadow-xl`}>
              <h3 className="text-xl font-bold mb-2 italic">Ready to scale?</h3>
              <p className={`text-[${COLORS.navy}]/80 text-[16px] mb-6`}>
                Don't invest another dollar into development until you know your foundation is solid.
              </p>
              <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.2em]">
                Book a Strategy Call <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className={`text-[${COLORS.charcoal}]/50 text-[13px] font-bold uppercase tracking-widest`}>
            Looking for something more intensive? <Link to="/revenue-architecture-intensive" className={`text-[${COLORS.navy}] hover:text-[${COLORS.camel}] underline transition-colors`}>Learn more about the Revenue Architecture Intensive (invitation only)</Link>
          </p>
        </div>
      </Section>

      {/* For You / Not For You */}
      <Section className="grid md:grid-cols-2 gap-12">
        <div className={`bg-[${COLORS.bone}] p-12 rounded-2xl border border-[${COLORS.forest}]/20 shadow-sm`}>
          <h3 className={`text-2xl font-serif font-bold mb-8 flex items-center gap-3 text-[${COLORS.forest}]`}>
            <CheckCircle2 className="w-6 h-6" /> This Is For You If:
          </h3>
          <ul className={`space-y-4 text-[${COLORS.charcoal}]`}>
            {[
              "You're a venture-backed founder who suspects something's structurally off",
              "You're tired of rework cycles and want to build it right this time",
              "You're about to scale and need to know what breaks first",
              "You're a VC or GP watching portfolio companies iterate themselves into irrelevance",
              "You refuse to be part of the 95%—you're building for the Top 5%"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-[16px]">
                <span className={`text-[${COLORS.forest}] font-bold`}>✔</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={`bg-[${COLORS.bone}] p-12 rounded-2xl border border-[${COLORS.oxblood}]/20 shadow-sm`}>
          <h3 className={`text-2xl font-serif font-bold mb-8 flex items-center gap-3 text-[${COLORS.oxblood}]`}>
            <XCircle className="w-6 h-6" /> This Is NOT For You If:
          </h3>
          <ul className={`space-y-4 text-[${COLORS.charcoal}]`}>
            {[
              "You think speed alone wins",
              "You're chasing valuation optics, not enterprise value",
              "You believe AI will fix structural problems (it won't—it exposes them faster)",
              "You're not ready to architect before you scale"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-[16px]">
                <span className={`text-[${COLORS.oxblood}] font-bold`}>✘</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Footer7 />
    </div>
  );
}
