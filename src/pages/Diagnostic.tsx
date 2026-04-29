import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  FileText,
  BarChart3,
  Activity,
  ShieldAlert,
  Zap,
  Map,
  Quote,
  Calendar,
  Search,
  Target,
  TrendingUp,
  AlertTriangle,
  PlayCircle,
  Clock,
  Mail,
  ClipboardCheck
} from "lucide-react";
import { Section, Button, Navbar, Footer } from "../components/Common";
import { Testimonial } from "../components/Testimonials";

export default function Diagnostic() {
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
              Structural Foundation Check
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-8 leading-[1.1]">
              Revenue Architecture Diagnostic
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-4xl mx-auto mb-12 leading-relaxed">
              Most Startups Don't Fail Because the Product Is Wrong. They Fail Because the Revenue Architecture Underneath the Product Is Fragile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="group px-10 py-5 text-lg">
                Get Your Revenue Architecture Diagnostic - $222
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </Section>
      </header>

      {/* The Problem */}
      <Section className="py-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-xl text-zinc-400 leading-relaxed">
            <p>
              You're growing. You have traction. You're shipping features.
            </p>
            <p className="text-white font-serif italic text-2xl">
              But here's what keeps you up at night: "Is my foundation actually solid... or am I building on cracks I can't see?"
            </p>
            <p>
              You suspect something's misaligned. You just can't pinpoint exactly what—or how bad it is.
            </p>
            <p className="text-emerald-400 font-bold">
              That's what this diagnostic reveals.
            </p>
          </div>
        </div>
      </Section>

      {/* The Gap Section */}
      <div className="bg-zinc-900/50 py-24 border-y border-white/5">
        <Section>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8">The Gap Between Traction and Durability</h2>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                Most founders validate one thing: <span className="text-white font-bold">product/market fit</span>. They prove customers want the product.
              </p>
              <p className="text-lg text-zinc-300 font-medium mb-6">
                But they don't validate:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Whether their revenue model will hold under scale",
                  "Whether their pricing supports their margin assumptions",
                  "Whether their tech stack can deliver what they're promising",
                  "Whether their customer experience introduces friction that kills conversions",
                  "Whether AI could replicate their value in 60 days"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-zinc-400">
                    <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-zinc-400 leading-relaxed">
                These gaps don't show up in your MVP. They show up when you scale. By then, it's expensive to fix. Sometimes impossible.
              </p>
            </div>
            <div className="glass p-10 rounded-[2.5rem] border-red-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl -z-10" />
              <p className="text-xl text-white font-medium leading-relaxed">
                This diagnostic shows you exactly where you're exposed—before you invest another dollar into scaling.
              </p>
            </div>
          </div>
        </Section>
      </div>

      {/* What You'll Discover */}
      <Section className="py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-6">What You'll Discover</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            When you submit your Revenue Architecture Diagnostic, you'll receive a complete structural analysis of your business foundation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* 1. Fragility Scorecard */}
          <div className="glass p-10 rounded-[2.5rem] border-white/5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
              <ClipboardCheck className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">1. Fragility Scorecard</h3>
            <p className="text-zinc-400 mb-6">A scored assessment across 6 critical dimensions:</p>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><span className="text-white font-bold">Revenue Logic</span> — Does your monetization model align with your cost structure?</li>
              <li><span className="text-white font-bold">Pricing-to-Margin Alignment</span> — Will your unit economics hold at 10x? 50x? 100x?</li>
              <li><span className="text-white font-bold">Lifecycle Architecture</span> — Does your customer journey deliver on your brand promise at every touchpoint?</li>
              <li><span className="text-white font-bold">Tech Stack Alignment</span> — Can your infrastructure support what you're selling?</li>
              <li><span className="text-white font-bold">AI Compression Risk</span> — Where could competitors or labs replicate your value in 60 days?</li>
              <li><span className="text-white font-bold">Distribution Dependence</span> — Are you vulnerable to platform risk or channel collapse?</li>
            </ul>
            <div className="mt-8 pt-6 border-t border-white/5 flex gap-2 text-xs font-bold uppercase tracking-widest">
              <span className="text-emerald-500">Low</span>
              <span className="text-zinc-600">→</span>
              <span className="text-yellow-500">Medium</span>
              <span className="text-zinc-600">→</span>
              <span className="text-orange-500">High</span>
              <span className="text-zinc-600">→</span>
              <span className="text-red-500">Critical</span>
            </div>
          </div>

          {/* 2. Top 5 Failure Points */}
          <div className="glass p-10 rounded-[2.5rem] border-white/5">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
              <AlertTriangle className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">2. Top 5 Failure Points Identified</h3>
            <p className="text-zinc-400 mb-6">Based on your submission, I'll identify the 5 most critical structural weaknesses in your foundation.</p>
            <div className="space-y-3">
              {[
                "Revenue model misaligned with delivery architecture",
                "Lifecycle monetization gap—customers churn early",
                "Pricing-margin mismatch—unit economics break",
                "Tech stack can't deliver on product promise",
                "AI compression vulnerability—core value replicable"
              ].map((item, i) => (
                <div key={i} className="flex gap-3 text-sm text-zinc-500 italic">
                  <span className="text-red-500">"</span>
                  <span>{item}</span>
                  <span className="text-red-500">"</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-zinc-600 uppercase tracking-widest font-bold">Specific to your business</p>
          </div>

          {/* 3. Exposure Heat Map */}
          <div className="glass p-10 rounded-[2.5rem] border-white/5">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
              <Map className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">3. Exposure Heat Map</h3>
            <p className="text-zinc-400 mb-6">A visual diagnostic showing where you sit on the spectrum from <span className="text-red-400">Fragile Startup</span> → <span className="text-emerald-400">Top 5% Architecture</span>.</p>
            <div className="grid grid-cols-3 gap-2 h-4 rounded-full overflow-hidden mb-4">
              <div className="bg-emerald-500/50" />
              <div className="bg-yellow-500/50" />
              <div className="bg-red-500/50" />
            </div>
            <p className="text-sm text-zinc-500">The "at a glance" view that shows you what to prioritize first.</p>
          </div>

          {/* 4. Personalized Breakdown Video */}
          <div className="glass p-10 rounded-[2.5rem] border-white/5">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
              <PlayCircle className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">4. 10-Minute Personalized Video</h3>
            <p className="text-zinc-400 mb-6">I'll record a private video walking you through:</p>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> The exposures — What I found and why it matters</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Why they exist — The root cause, not just the symptom</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> What to prioritize — What to fix first, what can wait</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 glass p-10 rounded-[2.5rem] border-emerald-500/20 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">5. Invitation to Revenue Architecture Audit</h3>
          <p className="text-zinc-400 mb-0">If the diagnostic reveals significant structural gaps, you'll receive an invitation to the full Audit—four intensive sessions where we map the complete fix.</p>
        </div>
      </Section>

      {/* What You Need to Submit */}
      <div className="bg-zinc-900/30 py-24 border-y border-white/5">
        <Section>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8">What You Need to Submit</h2>
              <p className="text-lg text-zinc-400 mb-8">To receive your diagnostic, you'll submit a detailed overview of your business foundation.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Product description",
                  "Pricing model",
                  "Current traction",
                  "Tech stack overview",
                  "Revenue model",
                  "AI exposure assessment",
                  "Distribution model"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 text-zinc-300 items-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="glass p-8 rounded-3xl border-white/5 flex gap-6 items-center">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-zinc-400" />
                </div>
                <div>
                  <div className="font-bold">15-20 Minutes</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider">To Complete Form</div>
                </div>
              </div>
              <div className="glass p-8 rounded-3xl border-white/5 flex gap-6 items-center">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-zinc-400" />
                </div>
                <div>
                  <div className="font-bold">5-7 Business Days</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider">Turnaround Time</div>
                </div>
              </div>
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
              "You're growing but don't trust the foundation",
              "You're about to scale and need to know what breaks first",
              "You suspect your pricing/margin assumptions won't hold at 10x",
              "You're rebuilding features and want to know WHY you keep hitting the same issues",
              "You're a VC or product leader who needs a second opinion",
              "You want to know where you sit on the architecture spectrum"
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
              "You're pre-concept (need something built or in dev)",
              "You want validation for what you're already doing",
              "You're not ready to hear hard truths about exposures",
              "You think 'just ship faster' will solve structural problems"
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-red-500 font-bold">✘</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Investment Section */}
      <Section className="py-32 text-center">
        <div className="glass p-16 rounded-[3rem] border-emerald-500/20 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          <h2 className="text-4xl font-serif font-bold mb-4">Investment: $222</h2>
          <p className="text-zinc-400 mb-12 max-w-xl mx-auto">
            This isn't a course. This isn't generic advice. This is me analyzing your business foundation and telling you exactly where you're exposed.
          </p>
          <Button className="group px-12 py-6 text-lg">
            Get Your Revenue Architecture Diagnostic - $222
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Scorecard</div>
            <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Heat Map</div>
            <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Top 5 Points</div>
            <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">10-Min Video</div>
          </div>
        </div>
      </Section>

      {/* Why $222? */}
      <Section className="py-24 text-center max-w-3xl">
        <h2 className="text-3xl font-serif font-bold mb-8">Why $222?</h2>
        <p className="text-xl text-zinc-400 leading-relaxed mb-8">
          Most founders spend $50K-$500K discovering these gaps the hard way—after they've already scaled on a broken foundation.
        </p>
        <p className="text-2xl text-white font-serif italic">
          "$222 shows you the cracks before you pour concrete."
        </p>
      </Section>

      {/* What Happens After You Purchase */}
      <div className="bg-zinc-900/50 py-24 border-y border-white/5">
        <Section>
          <h2 className="text-4xl font-serif font-bold mb-16 text-center">What Happens After You Purchase</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Email Link", desc: "You'll receive an email with the submission form link." },
              { step: "02", title: "Submit Form", desc: "Complete the form (15-20 mins)—be thorough for precision." },
              { step: "03", title: "Analysis", desc: "I'll analyze your submission and build your diagnostic." },
              { step: "04", title: "Delivery", desc: "Within 5-7 days, receive your PDF scorecard, heat map, and video." },
              { step: "05", title: "Next Steps", desc: "If gaps are significant, receive an invitation to the Audit." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-4xl font-serif font-bold text-emerald-500/10 mb-4">{item.step}</div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* The Moment This Creates */}
      <Section className="py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-12">The Moment This Creates</h2>
          <p className="text-xl text-zinc-400 mb-12 italic">"Oh... this is deeper than I thought."</p>
          <div className="space-y-6 text-lg text-zinc-500">
            <p>That's the moment you realize:</p>
            <ul className="space-y-2 text-zinc-300">
              <li>The problem isn't your product roadmap</li>
              <li>The problem isn't your marketing</li>
              <li>The problem isn't that you need to "move faster"</li>
            </ul>
            <p className="text-white font-bold text-2xl mt-8">The problem is structural.</p>
            <p className="mt-8">And once you see it, you can't unsee it.</p>
          </div>
        </div>
      </Section>

      <Testimonial 
        variant="callout"
        quote="The diagnostic was a turning point for us. It exposed a fundamental flaw in our pricing-to-margin logic that would have bankrupted us at scale. Best $222 I've ever spent."
        attribution="Founder, Series A SaaS"
      />

      {/* Final Pitch */}
      <Section className="py-32 text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 max-w-4xl mx-auto leading-tight">
          The Top 5% Don't Guess. <span className="italic text-emerald-500">They Validate.</span>
        </h2>
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
          Why would you scale a startup without validating the revenue architecture? Validate before you scale.
        </p>
        <div className="flex flex-col items-center gap-8">
          <Button className="group px-12 py-6 text-lg">
            Get Your Revenue Architecture Diagnostic - $222
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Section>

      {/* Not Ready Yet? */}
      <div className="bg-zinc-900/50 py-32 border-t border-white/5">
        <Section className="text-center">
          <h2 className="text-3xl font-serif font-bold mb-16">Not Sure If This Is Right for You?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                title: "MVP+R™ Deep Dive", 
                price: "$27", 
                desc: "Learn the framework the Top 5% use to validate revenue before they scale.",
                cta: "Start with Deep Dive",
                link: "/mvp-r"
              },
              { 
                title: "Read Case Studies", 
                price: "Free", 
                desc: "See how MVP+R™ turned 13 units into $100 million.",
                cta: "View Case Studies",
                link: "/case-studies"
              },
              { 
                title: "Revenue Architecture Audit", 
                price: "$5,000", 
                desc: "Four intensive sessions where we map every structural gap and architect the fix.",
                cta: "Book Your Audit",
                link: "/audit"
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

      {/* FAQ Section */}
      <Section className="py-32">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-16 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              {
                q: "What if I don't agree with your assessment?",
                a: "The diagnostic is based on the MVP+R™ framework—the same framework used to scale companies to $100M+. If you disagree, it's usually because you're looking at symptoms while I'm looking at structural foundations. You're free to ignore the findings, but the exposures will remain."
              },
              {
                q: "What if my structural gaps are too large for an Audit?",
                a: (
                  <>
                    If the diagnostic reveals that your foundation needs a complete, ground-up rebuild, you may be invited to the <Link to="/revenue-architecture-intensive" className="text-emerald-500 hover:underline font-bold">Revenue Architecture Intensive</Link>. This is an 8-12 week implementation engagement where we rebuild your entire revenue engine together.
                  </>
                )
              },
              {
                q: "Is this a one-time purchase?",
                a: "Yes. The $222 diagnostic is a one-time analysis of your current business foundation. If you pivot or make significant structural changes later, you can purchase another diagnostic for a fresh assessment."
              }
            ].map((faq, i) => (
              <div key={i} className="glass p-8 rounded-2xl border-white/5">
                <h4 className="text-lg font-bold mb-4 text-white">{faq.q}</h4>
                <div className="text-zinc-400 leading-relaxed">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
