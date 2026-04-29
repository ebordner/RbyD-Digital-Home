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
  Plus
} from "lucide-react";
import { Section, Button, Navbar, Footer } from "../components/Common";

// Custom Navbar for Home2 to match the light theme
const NavbarLight = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#F9F7F2] border-b border-[#1a1a1a]/10 px-6 py-4 flex justify-between items-center">
    <Link to="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 text-[#1a1a1a]">
      <div className="w-8 h-8 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
        <Layers className="w-5 h-5 text-[#F9F7F2]" />
      </div>
      <span className="font-serif italic">Revenue by Design | Profit is a Design Decision</span>
    </Link>
    <div className="hidden md:flex gap-8 text-sm font-medium text-[#1a1a1a]/60">
      <Link to="/" className="hover:text-[#1a1a1a] transition-colors">Home</Link>
      <Link to="/about" className="hover:text-[#1a1a1a] transition-colors">About</Link>
      <Link to="/mvp-r" className="hover:text-[#1a1a1a] transition-colors">MVP+R™</Link>
      <Link to="/case-studies" className="hover:text-[#1a1a1a] transition-colors">Case Studies</Link>
      <Link to="/audit" className="hover:text-[#1a1a1a] transition-colors">Audit</Link>
      <Link to="/diagnostic" className="hover:text-[#1a1a1a] transition-colors">Diagnostic</Link>
    </div>
    <button className="border border-[#1a1a1a] text-[#1a1a1a] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#1a1a1a] hover:text-[#F9F7F2] transition-all">
      Contact
    </button>
  </nav>
);

export default function Home2() {
  return (
    <div className="min-h-screen font-sans bg-[#F9F7F2] text-[#1a1a1a] selection:bg-[#1a1a1a] selection:text-[#F9F7F2]">
      <NavbarLight />

      {/* Hero Section - Split Layout */}
      <header className="pt-32 border-b border-[#1a1a1a]">
        <div className="grid lg:grid-cols-2 min-h-[80vh]">
          <div className="p-8 md:p-16 flex flex-col justify-center border-r border-[#1a1a1a]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-50">The Top 5% Standard</span>
                <div className="h-[1px] w-12 bg-[#1a1a1a]/20"></div>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-8 leading-[0.9]">
                What the <br />
                <span className="italic font-normal">Top 5%</span> <br />
                Do Differently
              </h1>
              <p className="text-lg md:text-xl text-[#1a1a1a]/70 max-w-md mb-12 leading-relaxed">
                The Top 5% don't iterate their way to success. They architect before they scale. 
                They validate revenue architecture using the MVP+R™ framework.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/mvp-r" className="group flex items-center gap-3 font-bold text-lg">
                  Learn more <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/diagnostic" className="group flex items-center gap-3 font-bold text-lg opacity-50 hover:opacity-100 transition-opacity">
                  View Diagnostic <Plus className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="relative overflow-hidden bg-[#1a1a1a]/5">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="h-full w-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Portrait" 
                className="w-full h-full object-cover grayscale brightness-90"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute bottom-12 left-0 vertical-rl rotate-180 text-[10px] font-bold tracking-[0.5em] uppercase opacity-30 pointer-events-none">
              REVENUE ARCHITECTURE • EST 1998
            </div>
          </div>
        </div>
      </header>

      {/* Experience Section - Grid Layout */}
      <section className="border-b border-[#1a1a1a]">
        <div className="grid md:grid-cols-3">
          <div className="p-12 border-b md:border-b-0 md:border-r border-[#1a1a1a] flex flex-col justify-between">
            <h2 className="text-3xl font-serif font-bold mb-8">I've Been in Both Rooms</h2>
            <div className="text-sm opacity-60 uppercase tracking-widest font-bold">Experience</div>
          </div>
          <div className="p-12 md:col-span-2 space-y-8">
            <p className="text-2xl md:text-3xl font-serif leading-tight">
              I spent 20 years in Fortune 500 product management—starting in the late 90s. 
              I systematically engineered failure points out of the equation.
            </p>
            <div className="grid sm:grid-cols-2 gap-12 pt-8 border-t border-[#1a1a1a]/10">
              <div>
                <div className="text-5xl font-serif font-bold mb-2">20Y</div>
                <p className="text-sm opacity-60">Fortune 500 Product Management Experience</p>
              </div>
              <div>
                <div className="text-5xl font-serif font-bold mb-2">$100M</div>
                <p className="text-sm opacity-60">Revenue generated in year one for my last corporate launch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="border-b border-[#1a1a1a] bg-[#1a1a1a] text-[#F9F7F2]">
        <div className="grid lg:grid-cols-2">
          <div className="p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-[#F9F7F2]/20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Why I Left Fortune 500</h2>
            <p className="text-xl opacity-70 leading-relaxed">
              I hit my limit because I kept seeing the same pattern: Brilliant founders. Solid ideas. Real traction. And they were bleeding out.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {[
              { title: "Capability", desc: "Founders are capable" },
              { title: "Effort", desc: "Working hard enough" },
              { title: "Foundation", desc: "Missing architecture" }
            ].map((item, i) => (
              <div key={i} className="p-12 border-b sm:border-b-0 sm:border-r border-[#F9F7F2]/20 last:border-r-0 flex flex-col justify-center">
                <div className="text-xs font-bold tracking-widest uppercase mb-4 opacity-40">0{i+1}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The MVP Myth */}
      <section className="border-b border-[#1a1a1a]">
        <div className="grid lg:grid-cols-2">
          <div className="p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">The MVP Myth That's Killing 95% of Startups</h2>
            <p className="text-lg opacity-70 mb-12 max-w-md">
              Everyone believes that if they have an MVP, they've got their silver bullet. If MVPs were enough, 95% of startups wouldn't still be failing.
            </p>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-10 h-10 border border-[#1a1a1a] flex items-center justify-center shrink-0">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">MVP validates product demand</h4>
                  <p className="text-sm opacity-60">It doesn't validate revenue architecture.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-10 h-10 border border-[#1a1a1a] bg-[#1a1a1a] text-[#F9F7F2] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">MVP+R™ validates revenue logic</h4>
                  <p className="text-sm opacity-60">Ensures your foundation holds under scale.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-12 md:p-24 flex flex-col justify-center bg-[#1a1a1a]/5">
            <div className="mb-12">
              <div className="text-xs font-bold tracking-[0.3em] uppercase opacity-40 mb-4">The Framework</div>
              <h3 className="text-5xl font-serif font-bold mb-6 italic">MVP+R™</h3>
              <p className="text-xl font-medium mb-8">
                Minimum Viable Product + Revenue Validation
              </p>
              <p className="opacity-70 mb-12 max-w-md">
                It's not enough to know people want your product. You have to know your revenue logic will hold under scale.
              </p>
              <Link to="/mvp-r">
                <button className="bg-[#1a1a1a] text-[#F9F7F2] px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                  See how it works →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Section */}
      <section className="py-24 md:py-48 px-8 md:px-24 text-center border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs font-bold tracking-[0.5em] uppercase opacity-40 mb-8">Diagnostic</div>
          <h2 className="text-5xl md:text-8xl font-serif font-bold mb-12 leading-[0.9]">Find Out Where You're Exposed</h2>
          <p className="text-xl md:text-2xl opacity-70 mb-16 max-w-2xl mx-auto">
            Find out exactly where your foundation is exposed—before you scale.
          </p>
          <div className="grid md:grid-cols-2 gap-12 text-left mb-24">
            <div className="p-8 border border-[#1a1a1a]">
              <h4 className="font-bold mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
                <ShieldAlert className="w-4 h-4" /> Reveals
              </h4>
              <ul className="space-y-4 text-sm opacity-70">
                <li>• Where your revenue logic breaks under scale</li>
                <li>• Where pricing and margin misalign</li>
                <li>• Where your tech stack weakens lifecycle monetization</li>
                <li>• Where AI compression could collapse your moat</li>
              </ul>
            </div>
            <div className="p-8 border border-[#1a1a1a]">
              <h4 className="font-bold mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
                <CheckCircle2 className="w-4 h-4" /> Deliverables
              </h4>
              <ul className="space-y-4 text-sm opacity-70">
                <li>• Fragility Scorecard across 6 critical dimensions</li>
                <li>• Top 5 Failure Points identified in YOUR business</li>
                <li>• Exposure Heat Map showing low → high risk zones</li>
                <li>• 10-minute personalized breakdown video</li>
              </ul>
            </div>
          </div>
          <Link to="/diagnostic">
            <button className="bg-[#1a1a1a] text-[#F9F7F2] px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-transform">
              Get Your Diagnostic - $222
            </button>
          </Link>
        </div>
      </section>

      {/* Footer - Minimalist */}
      <footer className="p-12 md:p-24 bg-[#1a1a1a] text-[#F9F7F2]">
        <div className="flex flex-col items-center text-center gap-12">
          <div className="flex flex-col items-center gap-4">
            <div className="text-3xl font-serif font-bold italic">Revenue By Design</div>
            <div className="flex flex-col items-center gap-1 opacity-70">
              <div className="text-lg font-medium">A service of Autostream Marketing LLC</div>
              <div className="text-sm opacity-60">107 Technology Parkway, Suite 680, Peachtree Corners, Ga 30092</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs font-bold uppercase tracking-[0.2em] opacity-60">
            <Link to="/terms" className="hover:opacity-100 transition-opacity">Terms & Conditions</Link>
            <span className="opacity-30">|</span>
            <Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <span className="opacity-30">|</span>
            <Link to="/refund" className="hover:opacity-100 transition-opacity">Refund Policy</Link>
          </div>

          <div className="w-full pt-12 border-t border-[#F9F7F2]/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold tracking-widest uppercase opacity-30">
            <div>© 2026 Autostream Marketing LLC. All rights reserved.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
