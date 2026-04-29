import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ChevronRight,
  FileText,
  BarChart3,
  Activity,
  ShieldAlert,
  Zap,
  Map,
  Quote,
  PhoneCall,
  Calendar,
  Layers,
  Search,
  Target,
  TrendingUp,
  AlertTriangle
} from "lucide-react";
import { Section, Button, Navbar, Footer } from "../components/Common";
import { Testimonial } from "../components/Testimonials";

export default function Audit() {
  return (
    <div className="min-h-screen font-sans bg-zinc-950 text-zinc-100">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
        </div>
        
        <Section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6">
              Venture-Grade Structural Analysis
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-8 leading-[1.1]">
              Revenue Architecture Audit
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Find Out Exactly Where You're Exposed—Before You Scale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="group">
                Book Your Free Discovery Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </Section>
      </header>

      {/* Intro Section */}
      <Section className="py-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl text-zinc-300 font-serif italic leading-relaxed mb-12">
            "You're building fast. Shipping features. Closing deals. Hitting milestones. But something feels off. You can't pinpoint it. You just know: if you keep scaling like this, something's going to break."
          </p>
          
          <div className="space-y-8 text-lg text-zinc-400 leading-relaxed">
            <p>
              <span className="text-white font-bold">Here's the problem:</span> Most founders don't see the cracks until they're under pressure—a tough board meeting, a competitor moving faster, a feature that has to be rebuilt for the third time.
            </p>
            <p>
              By then, the damage is done. You've burned months. Hundreds of thousands of dollars. Maybe more.
            </p>
            <div className="glass p-8 rounded-3xl border-l-4 border-emerald-500">
              <p className="text-white text-xl font-medium">
                The Revenue Architecture Audit shows you what's exposed NOW—before you scale on top of it.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* What This Is */}
      <div className="bg-zinc-900/50 py-24 border-y border-white/5">
        <Section>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8">What This Is</h2>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                This is a four-session intensive where we map every structural gap, overlap, and hidden risk in your foundation.
              </p>
              <p className="text-lg text-zinc-300 font-medium mb-8">
                We don't just talk strategy. We diagnose:
              </p>
              <ul className="space-y-4">
                {[
                  "Where your product, pricing, and margin assumptions misalign",
                  "Which features are built without clear revenue logic",
                  "Where your tech stack can't deliver on your product promise",
                  "Which customer touchpoints are introducing friction",
                  "Where your market validation has gaps that will surface under scale",
                  "Where AI compression is creating existential risk",
                  "Where explosive revenue opportunities are hiding"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-zinc-400">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass p-10 rounded-[2.5rem] border-emerald-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl -z-10" />
              <div className="text-xs text-emerald-500 font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                <Zap className="w-4 h-4" /> Structural Integrity Check
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">4 Sessions</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Intensive Diagnostic</div>
                  </div>
                </div>
                <div className="h-px bg-white/5 w-full" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">Full Mapping</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Complete Deliverables</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* What You Walk Away With */}
      <Section className="py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-6">What You Walk Away With</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            At the end of our four sessions together, you'll have complete clarity and a concrete roadmap.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Map,
              title: "Exposure Mapping",
              desc: "A clear visual of where your foundation has gaps, overlaps, and structural weaknesses."
            },
            {
              icon: BarChart3,
              title: "Revenue Logic Diagnostics",
              desc: "Exactly where your pricing, margin, and monetization assumptions break down under scale."
            },
            {
              icon: Activity,
              title: "Pricing/Margin Stress Testing",
              desc: "What happens to your unit economics at 10x, 50x, 100x—so you're not surprised later."
            },
            {
              icon: Search,
              title: "Lifecycle Architecture Gap Analysis",
              desc: "Where customers are dropping off because your experience doesn't deliver on your promise."
            },
            {
              icon: AlertTriangle,
              title: "Tech Alignment Flags",
              desc: "Where your tech stack can't support what you're promising customers—before it becomes a crisis."
            },
            {
              icon: ShieldAlert,
              title: "AI Compression Risk Assessment",
              desc: "Where competitors could replicate your value in 60 days—and how to architect defensibility."
            }
          ].map((item, i) => (
            <div key={i} className="glass p-8 rounded-3xl border-white/5 hover:border-emerald-500/30 transition-colors group">
              <item.icon className="w-10 h-10 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 glass p-10 rounded-[2.5rem] border-emerald-500/20 max-w-3xl mx-auto">
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Reinforcement Roadmap</h3>
              <p className="text-zinc-400">A prioritized action plan: what to fix first, what to architect next, and what to stop building entirely.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* What Happens After the Audit? */}
      <Section className="py-24 border-y border-white/5 bg-zinc-900/20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-serif font-bold mb-8">What Happens After the Audit?</h3>
          <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
            <p>
              For most founders, the audit provides complete clarity on what to fix and in what order—and you'll implement those fixes with your internal team.
            </p>
            <p>
              For founders who discover significant structural gaps that require deep rebuilding, you may be invited to the <span className="text-white font-bold">Revenue Architecture Intensive</span>—an 8-12 week engagement where we don't just diagnose what's broken, we rebuild your foundation together.
            </p>
            <Link to="/revenue-architecture-intensive" className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 font-bold transition-colors group mt-4">
              Learn more about the Revenue Architecture Intensive
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Section>

      {/* The Transformation */}
      <div className="bg-zinc-900/30 py-24 border-y border-white/5">
        <Section className="max-w-4xl">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">The Transformation</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="text-xs font-bold text-red-500 uppercase tracking-widest">Before</div>
              <p className="text-xl text-zinc-400 italic">"I feel like something's off, but I can't pinpoint it. I'm afraid we're going to miss the boat."</p>
            </div>
            <div className="space-y-4">
              <div className="text-xs font-bold text-emerald-500 uppercase tracking-widest">After</div>
              <p className="text-xl text-white italic">"Here is exactly where we're exposed, what's going to break at scale, and how to fix it before we invest another dollar."</p>
            </div>
          </div>
        </Section>
      </div>

      {/* For You / Not For You */}
      <Section className="grid md:grid-cols-2 gap-12 py-32">
        <div className="glass p-12 rounded-3xl border-emerald-500/10">
          <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-500" /> This Is For You If:
          </h3>
          <ul className="space-y-4 text-zinc-400">
            {[
              "You're a venture-backed founder who's growing but don't trust the foundation",
              "You're tired of rebuilding features and want to architect it right this time",
              "You're about to raise your next round and need your revenue story to be bulletproof",
              "You're a VC or GP who needs structural underwriting on a portfolio company",
              "You refuse to be part of the 95%—you're building for the Top 5%"
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-emerald-500 font-bold">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass p-12 rounded-3xl border-red-500/10">
          <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
            <XCircle className="w-6 h-6 text-red-500" /> This Is NOT For You If:
          </h3>
          <ul className="space-y-4 text-zinc-400">
            {[
              "You think speed alone wins",
              "You're chasing valuation optics, not enterprise value",
              "You believe 'just ship it' is a strategy",
              "You're not ready to make hard decisions about what to stop building",
              "You want someone to validate what you're already doing (I won't)"
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-red-500 font-bold">✘</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* How This Works */}
      <div className="bg-zinc-900/50 py-24 border-y border-white/5">
        <Section>
          <h2 className="text-4xl font-serif font-bold mb-16 text-center">How This Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Book a Discovery Call",
                desc: "We'll spend 15-20 minutes to determine if this is the right fit. I'll ask about your growth journey, fragility points, and timeline."
              },
              {
                step: "02",
                title: "The Audit Intensive",
                desc: "Four 60-minute intensive sessions where we go deep. Between sessions, you'll have homework—this isn't passive."
              },
              {
                step: "03",
                title: "Walk Away With Clarity",
                desc: "Get every deliverable listed above—and complete clarity on what to fix, what to build, and what to stop doing."
              }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-serif font-bold text-emerald-500/10 absolute -top-8 -left-4 -z-10">{item.step}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Investment Section */}
      <Section className="py-32 text-center">
        <div className="glass p-16 rounded-[3rem] border-emerald-500/20 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          <h2 className="text-4xl font-serif font-bold mb-4">Investment: $5,000</h2>
          <p className="text-zinc-400 mb-12 max-w-xl mx-auto">
            This is not a consulting retainer. This is a diagnostic intensive. Four sessions. Full structural analysis. Complete deliverables.
          </p>
          <Button className="group px-12 py-6 text-lg">
            Book Your Free Discovery Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="mt-8 text-sm text-zinc-500 italic">
            You'll know exactly where you're exposed—and how to fix it before you scale.
          </p>
        </div>
      </Section>

      <Testimonial 
        variant="callout"
        quote="The Audit was the most uncomfortable and most valuable experience of my career. It forced us to confront structural flaws we were ignoring. We're now building on a foundation that can actually scale."
        attribution="CEO, Venture-Backed Fintech"
      />

      {/* Final Pitch */}
      <Section className="py-32 text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 max-w-4xl mx-auto leading-tight">
          Your One Shot Deserves a <span className="italic text-emerald-500">Solid Foundation</span>
        </h2>
        <div className="max-w-3xl mx-auto text-zinc-400 text-lg leading-relaxed mb-12 space-y-6">
          <p>
            You didn't leave your career, convince investors, and risk everything to be part of the 95%. You're here to build something that holds.
          </p>
          <p>
            Something that compounds revenue instead of complexity. Something that scales without cracking. Something that survives AI compression because it's structurally superior, not just feature-competitive.
          </p>
          <p className="text-white font-bold">
            The Top 5% don't guess. They architect.
          </p>
        </div>
        <div className="flex flex-col items-center gap-8">
          <Button className="group px-12 py-6 text-lg">
            Book Your Free Discovery Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-red-500 font-bold uppercase tracking-widest text-sm">
            Every month you wait, the cracks get deeper.
          </p>
        </div>
      </Section>

      {/* Not Ready Yet? */}
      <div className="bg-zinc-900/50 py-32 border-t border-white/5">
        <Section className="text-center">
          <h2 className="text-3xl font-serif font-bold mb-16">Not Ready Yet?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                title: "Revenue Architecture Diagnostic", 
                price: "$222", 
                desc: "Find out exactly where your foundation is exposed—before you scale.",
                cta: "Get Your Diagnostic",
                link: "/diagnostic"
              },
              { 
                title: "MVP+R™ Deep Dive", 
                price: "$27", 
                desc: "Learn the framework that separates the Top 5% from the 95%.",
                cta: "Start with Deep Dive",
                link: "/mvp-r"
              },
              { 
                title: "Read Case Studies", 
                price: "Free", 
                desc: "See how MVP+R™ turned 13 units into $100 million.",
                cta: "View Case Studies",
                link: "/case-studies"
              }
            ].map((item, i) => (
              <div key={i} className="glass p-8 rounded-3xl flex flex-col text-left border-white/5">
                <h4 className="font-bold mb-1">{item.title}</h4>
                <div className="text-2xl font-bold text-emerald-500 mb-4">{item.price}</div>
                <p className="text-sm text-zinc-500 mb-8 flex-1">{item.desc}</p>
                <Link to={item.link} className="w-full">
                  <Button variant="outline" className="w-full justify-center py-2 text-sm">
                    {item.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Footer />
    </div>
  );
}
