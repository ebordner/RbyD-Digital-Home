import React from "react";
import { motion } from "motion/react";
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
  Search
} from "lucide-react";
import { Section } from "../components/Common";
import { TestimonialGrid } from "../components/Testimonials";

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
  const baseStyles = "inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 active:scale-95 uppercase tracking-widest text-xs";
  const variants = {
    primary: "bg-[#1B263B] text-[#FDFCF0] hover:bg-[#000000] shadow-xl shadow-[#1B263B]/10",
    secondary: "bg-[#C5A059] text-[#000000] hover:bg-[#D4AF37]",
    outline: "border-2 border-[#1B263B] text-[#1B263B] hover:bg-[#1B263B] hover:text-[#FDFCF0]"
  };
  
  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Navbar3 = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#FDFCF0]/80 backdrop-blur-md border-b border-[#C5A059]/20 px-6 py-4 flex justify-between items-center">
    <Link to="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 text-[#000000]">
      <div className="w-8 h-8 bg-[#1B263B] rounded flex items-center justify-center">
        <Layers className="w-5 h-5 text-[#C5A059]" />
      </div>
      <span className="font-serif italic">Revenue by Design | Profit is a Design Decision</span>
    </Link>
    <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#333333]">
      <Link to="/" className="hover:text-[#C5A059] transition-colors">Home</Link>
      <Link to="/about" className="hover:text-[#C5A059] transition-colors">About</Link>
      <Link to="/mvp-r" className="hover:text-[#C5A059] transition-colors">MVP+R™</Link>
      <Link to="/case-studies" className="hover:text-[#C5A059] transition-colors">Case Studies</Link>
      <Link to="/audit" className="hover:text-[#C5A059] transition-colors">Audit</Link>
      <Link to="/diagnostic" className="hover:text-[#C5A059] transition-colors">Diagnostic</Link>
    </div>
    <BoardroomButton variant="outline" className="py-2 px-6">Contact</BoardroomButton>
  </nav>
);

const Footer3 = () => (
  <footer className="bg-[#1B263B] py-24 border-t border-[#C5A059]/30 text-[#FDFCF0]">
    <Section className="text-center">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            <div className="w-6 h-6 bg-[#C5A059] rounded flex items-center justify-center">
              <Layers className="w-4 h-4 text-[#1B263B]" />
            </div>
            <span className="font-serif italic text-2xl">Revenue By Design</span>
          </div>
          <div className="text-[#FDFCF0]/70 text-sm font-medium">
            A service of Autostream Marketing LLC
          </div>
          <div className="text-[#FDFCF0]/50 text-xs tracking-wide">
            107 Technology Parkway, Suite 680, Peachtree Corners, Ga 30092
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A059]">
          <Link to="/terms" className="hover:text-[#D4AF37] transition-colors">Terms & Conditions</Link>
          <span className="opacity-30">|</span>
          <Link to="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
          <span className="opacity-30">|</span>
          <Link to="/refund" className="hover:text-[#D4AF37] transition-colors">Refund Policy</Link>
        </div>

        <div className="mt-12 pt-12 border-t border-[#FDFCF0]/10 w-full flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[#FDFCF0]/40 text-[10px] font-bold uppercase tracking-widest">
            © 2026 Autostream Marketing LLC. All rights reserved.
          </div>
          <div className="flex gap-6 text-[#C5A059]">
            <Zap className="w-5 h-5 cursor-pointer hover:text-[#D4AF37] transition-colors" />
            <Target className="w-5 h-5 cursor-pointer hover:text-[#D4AF37] transition-colors" />
            <Search className="w-5 h-5 cursor-pointer hover:text-[#D4AF37] transition-colors" />
          </div>
        </div>
      </div>
    </Section>
  </footer>
);

export default function Home3() {
  return (
    <div className="min-h-screen font-sans bg-[#FDFCF0] text-[#000000] selection:bg-[#C5A059] selection:text-[#FDFCF0]">
      <Navbar3 />

      {/* Hero Section */}
      <header className="relative pt-48 pb-32 overflow-hidden border-b border-[#C5A059]/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C5A059]/40 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1B263B]/20 blur-[120px] rounded-full" />
        </div>
        
        <Section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#C5A059]/10 text-[#C5A059] text-[10px] font-bold tracking-[0.3em] uppercase mb-6 border border-[#C5A059]/20">
              The Top 5% Standard
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-8 leading-[1.1] text-[#1B263B]">
              What the <span className="italic text-[#C5A059]">Top 5%</span> <br />
              Do Differently
            </h1>
            <p className="text-xl md:text-2xl text-[#333333] max-w-3xl mx-auto mb-12 leading-relaxed">
              The Top 5% don't iterate their way to success. They architect before they scale. 
              They validate revenue architecture using the <span className="text-[#1B263B] font-bold underline decoration-[#C5A059] underline-offset-4">MVP+R™ framework</span>.
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

      <div className="bg-[#F2F0E4] py-12 border-b border-[#C5A059]/10">
        <TestimonialGrid />
      </div>

      {/* Experience Section */}
      <Section id="experience" className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border-8 border-[#F2F0E4] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
              alt="Professional Portrait" 
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-[#1B263B] p-8 rounded-xl max-w-xs shadow-2xl border border-[#C5A059]/30">
            <div className="text-4xl font-serif font-bold text-[#C5A059] mb-1">20Y</div>
            <div className="text-[10px] text-[#FDFCF0] font-bold uppercase tracking-widest leading-tight">
              Fortune 500 Product Management Experience
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif font-bold mb-8 text-[#1B263B]">I've Been in Both Rooms</h2>
          <div className="space-y-6 text-[#333333] text-lg leading-relaxed">
            <p>
              I spent 20 years in Fortune 500 product management—starting in the late 90s, which is rare. 
              I've never met anyone else who began their career in product and stayed for two decades.
            </p>
            <p>
              Over those 20 years, I ran into the same 10 failure points over and over again. 
              So I systematically engineered each one out of the equation.
            </p>
            <div className="bg-[#F2F0E4] p-8 rounded-xl border-l-4 border-[#C5A059] shadow-sm">
              <p className="text-[#1B263B] font-bold mb-2 italic uppercase tracking-widest text-xs">My last corporate launch?</p>
              <p className="text-[#333333]">
                In-home WiFi for one of the largest telecommunications companies in the United States. 
                One million subscribers. $100 million in revenue. Year one.
              </p>
            </div>
            <p>
              I didn't do that by iterating. I did it by <span className="text-[#1B263B] font-bold">architecting revenue before scaling product</span>.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* Why Section */}
      <div className="bg-[#1B263B] py-24 text-[#FDFCF0]">
        <Section className="text-center max-w-4xl">
          <h2 className="text-4xl font-serif font-bold mb-12 text-[#C5A059]">Why I Left Fortune 500 for the Startup World</h2>
          <p className="text-xl text-[#FDFCF0]/80 leading-relaxed mb-12">
            I could have stayed in corporate. Perfected one more product. Generated another $100 million. 
            But I hit my limit because I kept seeing the same pattern in the startup world: 
            <span className="text-[#C5A059] italic"> Brilliant founders. Solid ideas. Real traction. And they were bleeding out.</span>
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Capability", desc: "Founders are capable" },
              { icon: TrendingUp, title: "Effort", desc: "Working hard enough" },
              { icon: Layers, title: "Foundation", desc: "Missing architecture" }
            ].map((item, i) => (
              <div key={i} className="bg-[#FDFCF0]/5 p-8 rounded-xl text-center border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors">
                <item.icon className="w-8 h-8 text-[#C5A059] mx-auto mb-4" />
                <h3 className="font-bold mb-2 uppercase tracking-widest text-sm">{item.title}</h3>
                <p className="text-xs text-[#FDFCF0]/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* The MVP Myth */}
      <Section id="framework" className="relative">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-8 text-[#1B263B]">The MVP Myth That's Killing 95% of Startups</h2>
            <p className="text-lg text-[#333333] mb-8 leading-relaxed">
              Everyone believes that if they have an MVP—a Minimum Viable Product—they've got their silver bullet. 
              I'm here to tell you: <span className="text-[#4A0E0E] font-bold">If MVPs were enough, 95% of startups wouldn't still be failing.</span>
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#4A0E0E]/10 flex items-center justify-center shrink-0 border border-[#4A0E0E]/20">
                  <XCircle className="w-6 h-6 text-[#4A0E0E]" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase tracking-widest text-xs">MVP validates product demand</h4>
                  <p className="text-[#333333]/60 text-sm">It doesn't validate revenue architecture.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1B3022]/10 flex items-center justify-center shrink-0 border border-[#1B3022]/20">
                  <CheckCircle2 className="w-6 h-6 text-[#1B3022]" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase tracking-widest text-xs">MVP+R™ validates revenue logic</h4>
                  <p className="text-[#333333]/60 text-sm">Ensures your foundation holds under scale.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F2F0E4] p-12 rounded-2xl border border-[#C5A059]/30 relative shadow-xl">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#D4AF37]/20 blur-3xl rounded-full" />
            <h3 className="text-3xl font-serif font-bold mb-6 text-[#1B263B]">MVP+R™</h3>
            <p className="text-xl font-bold mb-8 text-[#C5A059] uppercase tracking-widest text-sm">
              Minimum Viable Product + Revenue Validation
            </p>
            <p className="text-[#333333] mb-8 leading-relaxed">
              It's not enough to know people want your product. You have to know your revenue logic will hold under scale.
            </p>
            <Link to="/mvp-r" className="block">
              <BoardroomButton variant="secondary" className="w-full justify-center">See how MVP+R™ works →</BoardroomButton>
            </Link>
          </div>
        </div>
      </Section>

      {/* What's Actually Broken */}
      <div className="bg-[#1B263B] py-24 border-y border-[#C5A059]/20">
        <Section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6 text-[#C5A059]">What's Actually Broken (And Why You Can't See It)</h2>
            <p className="text-[#FDFCF0]/60 max-w-2xl mx-auto uppercase tracking-[0.2em] text-[10px] font-bold">
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
              <div key={i} className="bg-[#FDFCF0]/5 p-8 rounded-xl italic text-[#FDFCF0]/80 border-l-2 border-[#C5A059]">
                "{quote}"
              </div>
            ))}
          </div>
          <div className="mt-16 bg-[#FDFCF0] p-12 rounded-xl text-center border border-[#C5A059]/30 shadow-2xl">
            <p className="text-2xl font-serif italic mb-8 text-[#1B263B]">
              Your product, your financial model, your tech stack, your customer journey, and your market validation aren't cross-referenced.
            </p>
            <p className="text-[#333333]">
              There are <span className="text-[#1B263B] font-bold underline decoration-[#C5A059]">gaps</span>. There are <span className="text-[#1B263B] font-bold underline decoration-[#C5A059]">overlaps</span>. 
              And every time you scale, those gaps get exposed.
            </p>
          </div>
        </Section>
      </div>

      {/* Diagnostic Section */}
      <Section id="diagnostic" className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/5 blur-[120px] rounded-full" />
        </div>
        
        <div className="text-center mb-16">
          <span className="text-[#C5A059] font-bold tracking-[0.4em] uppercase text-[10px]">Diagnostic</span>
          <h2 className="text-5xl font-serif font-bold mt-4 mb-6 text-[#1B263B]">Find Out Where You're Exposed</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-[#F2F0E4] p-12 rounded-2xl border border-[#C5A059]/20 shadow-xl">
            <h3 className="text-3xl font-serif font-bold mb-4 text-[#1B263B]">Revenue Architecture Diagnostic</h3>
            <div className="text-4xl font-bold text-[#C5A059] mb-8">$222</div>
            <p className="text-lg text-[#333333] mb-12 leading-relaxed">
              Find out exactly where your foundation is exposed—before you scale.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h4 className="font-bold text-[#1B263B] flex items-center gap-2 uppercase tracking-widest text-[10px]">
                  <ShieldAlert className="w-4 h-4 text-[#4A0E0E]" /> This diagnostic reveals:
                </h4>
                <ul className="space-y-3 text-sm text-[#333333]/70">
                  <li>• Where your revenue logic breaks under scale</li>
                  <li>• Where pricing and margin misalign</li>
                  <li>• Where your tech stack weakens lifecycle monetization</li>
                  <li>• Where AI compression could collapse your moat</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-[#1B263B] flex items-center gap-2 uppercase tracking-widest text-[10px]">
                  <CheckCircle2 className="w-4 h-4 text-[#1B3022]" /> You'll receive:
                </h4>
                <ul className="space-y-3 text-sm text-[#333333]/70">
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
            <div className="bg-[#1B263B] p-8 rounded-2xl flex-1 border border-[#C5A059]/30 text-[#FDFCF0] shadow-xl">
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-xs">Revenue Architecture Audit</h3>
              <div className="text-2xl font-bold text-[#C5A059] mb-6">$5,000</div>
              <p className="text-sm text-[#FDFCF0]/60 mb-8 leading-relaxed">
                Four intensive sessions to map your gaps and architect the fix.
              </p>
              <Link to="/audit">
                <BoardroomButton variant="outline" className="w-full justify-center border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#1B263B]">Book Your Audit - $5K</BoardroomButton>
              </Link>
            </div>
            <div className="bg-[#C5A059] p-8 rounded-2xl text-[#1B263B] shadow-xl">
              <h3 className="text-xl font-bold mb-2 italic">Ready to scale?</h3>
              <p className="text-[#1B263B]/80 text-sm mb-6">
                Don't invest another dollar into development until you know your foundation is solid.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]">
                Book a Strategy Call <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#333333]/50 text-[10px] font-bold uppercase tracking-widest">
            Looking for something more intensive? <Link to="/revenue-architecture-intensive" className="text-[#1B263B] hover:text-[#C5A059] underline transition-colors">Learn more about the Revenue Architecture Intensive (invitation only)</Link>
          </p>
        </div>
      </Section>

      {/* For You / Not For You */}
      <Section className="grid md:grid-cols-2 gap-12">
        <div className="bg-[#F2F0E4] p-12 rounded-2xl border border-[#1B3022]/20 shadow-sm">
          <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3 text-[#1B3022]">
            <CheckCircle2 className="w-6 h-6" /> This Is For You If:
          </h3>
          <ul className="space-y-4 text-[#333333]">
            {[
              "You're a venture-backed founder who suspects something's structurally off",
              "You're tired of rework cycles and want to build it right this time",
              "You're about to scale and need to know what breaks first",
              "You're a VC or GP watching portfolio companies iterate themselves into irrelevance",
              "You refuse to be part of the 95%—you're building for the Top 5%"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="text-[#1B3022] font-bold">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#F2F0E4] p-12 rounded-2xl border border-[#4A0E0E]/20 shadow-sm">
          <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3 text-[#4A0E0E]">
            <XCircle className="w-6 h-6" /> This Is NOT For You If:
          </h3>
          <ul className="space-y-4 text-[#333333]">
            {[
              "You think speed alone wins",
              "You're chasing valuation optics, not enterprise value",
              "You believe AI will fix structural problems (it won't—it exposes them faster)",
              "You're not ready to architect before you scale"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="text-[#4A0E0E] font-bold">✘</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Footer3 />
    </div>
  );
}
