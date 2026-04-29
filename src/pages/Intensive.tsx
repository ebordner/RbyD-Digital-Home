import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Zap, 
  TrendingUp, 
  Layers,
  Target,
  ShieldCheck,
  Search,
  ChevronRight,
  AlertTriangle,
  ClipboardList,
  BarChart3,
  Rocket,
  Quote,
  Clock,
  Calendar,
  Users
} from "lucide-react";
import { Section, Button, Navbar, Footer } from "../components/Common";
import { Testimonial } from "../components/Testimonials";

export default function Intensive() {
  const applicationLink = "/revenue-architecture-intensive/apply";

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
              Invitation Only | Application Required
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-8 leading-[1.1]">
              Revenue Architecture Intensive
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-4xl mx-auto mb-12 leading-relaxed">
              From Diagnosis to Durable Foundation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/revenue-architecture-intensive/apply">
                <Button className="group px-10 py-5 text-lg">
                  Apply for Revenue Architecture Intensive
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </Section>
      </header>

      {/* Intro Section */}
      <Section className="py-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-xl text-zinc-400 leading-relaxed">
            <p className="text-white font-serif italic text-3xl mb-12">
              You've seen the gaps.
            </p>
            <p>
              You know what's broken—misaligned pricing, fragile tech stack, customer journey friction, revenue assumptions that won't hold at scale.
            </p>
            <p>
              You've done the diagnostic work. You have the map.
            </p>
            <p className="text-white font-bold">
              Now you need to rebuild the foundation before you scale on top of it.
            </p>
            <p className="text-emerald-400 font-serif italic text-2xl">
              That's what this intensive does.
            </p>
          </div>
        </div>
      </Section>

      {/* Implementation Section */}
      <div className="bg-zinc-900/50 py-24 border-y border-white/5">
        <Section>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8">This Is Not Consulting. This Is Implementation.</h2>
              <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
                <p>
                  Most consultants tell you what's wrong and hand you a report.
                </p>
                <p className="text-white font-bold">
                  I work alongside you to architect the fix.
                </p>
                <p>
                  This is an 8-12 week intensive engagement where we don't just diagnose structural gaps—we rebuild your revenue architecture from the ground up.
                </p>
                <p>
                  We work together. Weekly sessions. Deep collaboration. You'll have homework between sessions—pulling financials, mapping customer journeys, stress-testing assumptions, aligning cross-functional teams.
                </p>
                <p className="text-white italic">
                  By the end, you won't just know what was broken.
                </p>
                <p className="text-emerald-500 font-bold text-2xl">
                  You'll have a foundation that holds at scale.
                </p>
              </div>
            </div>
            <div className="glass p-10 rounded-[2.5rem] border-emerald-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl -z-10" />
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">8-12 Weeks</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Engagement Duration</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">Deep Collaboration</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Weekly Working Sessions</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">Durable Foundation</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Structural Rebuilding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Who This Is For */}
      <Section className="py-24 grid md:grid-cols-2 gap-12">
        <div className="glass p-12 rounded-3xl border-emerald-500/10">
          <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-500" /> This Intensive Is For Founders Who:
          </h3>
          <ul className="space-y-6 text-zinc-400">
            {[
              "Have completed the Revenue Architecture Audit (or equivalent structural diagnosis) and know exactly what's exposed",
              "Are ready to fix it now—not in 6 months, not after the next funding round, NOW",
              "Have 8-12 weeks to dedicate to foundational work—this isn't a side project, it's a strategic priority",
              "Are about to scale (next funding round, product launch, major customer acquisition push) and need the architecture locked before you pour concrete",
              "Refuse to be part of the 95%—you're building for durability, not just traction"
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
          <ul className="space-y-6 text-zinc-400">
            {[
              "You haven't diagnosed what's broken yet (start with the Revenue Architecture Audit)",
              "You're looking for quick fixes or tactical advice (this is foundational rebuilding)",
              "You're not ready to make hard decisions about what to stop building",
              "You want validation for what you're already doing (we're rebuilding, not patching)",
              "You don't have executive buy-in or cross-functional alignment (this requires commitment from your entire leadership team)"
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-red-500 font-bold">✘</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* What We Build Together */}
      <div className="bg-zinc-950 py-32 border-y border-white/5">
        <Section>
          <div className="text-center mb-24">
            <h2 className="text-5xl font-serif font-bold mb-8">What We Build Together</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              This isn't a course. This isn't a framework you implement on your own. This is us, working together, rebuilding your revenue architecture piece by piece.
            </p>
          </div>

          <div className="space-y-24">
            {/* Phase 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="sticky top-32">
                <span className="text-emerald-500 font-bold tracking-widest uppercase text-xs">Phase 01 | Weeks 1-3</span>
                <h3 className="text-4xl font-serif font-bold mt-4 mb-8">Financial Model Reconstruction</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Search className="w-5 h-5 text-emerald-500" /> What we do:
                    </h4>
                    <ul className="space-y-3 text-zinc-400 text-sm">
                      <li>• Rebuild your financial business model from the ground up</li>
                      <li>• Hunt for explosive revenue opportunities before you invest in development</li>
                      <li>• Stress-test pricing and margin assumptions at 10x, 50x, 100x scale</li>
                      <li>• Validate revenue logic with qualitative and quantitative market research</li>
                      <li>• Cross-reference product roadmap with financial model (no gaps, no overlaps)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="glass p-10 rounded-3xl border-emerald-500/10 bg-zinc-900/30">
                <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> What you walk away with:
                </h4>
                <ul className="space-y-4 text-zinc-300">
                  <li className="flex gap-3 items-start">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Rebuilt financial model with validated revenue assumptions</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Pricing strategy that supports margin at scale</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Revenue opportunity map (where the hidden cash cows are)</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Unit economics model stress-tested to 100x</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Board-ready financial documentation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="sticky top-32">
                <span className="text-emerald-500 font-bold tracking-widest uppercase text-xs">Phase 02 | Weeks 4-6</span>
                <h3 className="text-4xl font-serif font-bold mt-4 mb-8">Service Design Blueprint</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-emerald-500" /> What we do:
                    </h4>
                    <ul className="space-y-3 text-zinc-400 text-sm">
                      <li>• Map your entire customer journey using the LBGUPS model (Learn, Buy, Get, Use, Pay, Support)</li>
                      <li>• Identify every touchpoint where your experience delivers—or fails to deliver—on your brand promise</li>
                      <li>• Architect service design to reinforce your value proposition at every interaction</li>
                      <li>• Align marketing, sales, operations, product, billing, and support around a unified customer experience</li>
                      <li>• Eliminate friction points that kill conversions and create churn</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="glass p-10 rounded-3xl border-emerald-500/10 bg-zinc-900/30">
                <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> What you walk away with:
                </h4>
                <ul className="space-y-4 text-zinc-300">
                  <li className="flex gap-3 items-start">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Complete service design blueprint (LBGUPS mapped and architected)</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Customer journey map with friction points identified and solutions designed</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Cross-functional alignment playbook (how each team delivers on the brand promise)</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Lifecycle monetization strategy (where and how you capture value throughout the journey)</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Service experience documentation (replicable, scalable, durable)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="sticky top-32">
                <span className="text-emerald-500 font-bold tracking-widest uppercase text-xs">Phase 03 | Weeks 7-9</span>
                <h3 className="text-4xl font-serif font-bold mt-4 mb-8">Tech Stack & Delivery Alignment</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-emerald-500" /> What we do:
                    </h4>
                    <ul className="space-y-3 text-zinc-400 text-sm">
                      <li>• Audit your tech stack against your product promise (can your infrastructure deliver what you're selling?)</li>
                      <li>• Identify where your backend can't support your frontend experience</li>
                      <li>• Architect tech stack roadmap to support scale (not just current state)</li>
                      <li>• Validate that billing, operations, and support systems can deliver on your service design</li>
                      <li>• Stress-test system capacity at projected growth (what breaks first?)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="glass p-10 rounded-3xl border-emerald-500/10 bg-zinc-900/30">
                <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> What you walk away with:
                </h4>
                <ul className="space-y-4 text-zinc-300">
                  <li className="flex gap-3 items-start">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Tech stack alignment audit (what works, what's exposed, what needs rebuilding)</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Infrastructure roadmap (prioritized by what breaks first at scale)</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Integration map (how billing, ops, product, and support systems connect)</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Scalability stress test (what fails at 10x, 50x, 100x)</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Technical debt prioritization (what to fix now vs. what can wait)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="sticky top-32">
                <span className="text-emerald-500 font-bold tracking-widest uppercase text-xs">Phase 04 | Weeks 10-12</span>
                <h3 className="text-4xl font-serif font-bold mt-4 mb-8">Market Validation & GTM Strategy</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-emerald-500" /> What we do:
                    </h4>
                    <ul className="space-y-3 text-zinc-400 text-sm">
                      <li>• Validate your rebuilt revenue architecture in the market (qualitative + quantitative)</li>
                      <li>• Test pricing, messaging, and positioning with target customers</li>
                      <li>• Architect go-to-market strategy aligned with your revenue model</li>
                      <li>• Build board-ready narrative (how to explain your architecture to investors)</li>
                      <li>• Create reinforcement roadmap (what to monitor, what to optimize, what to protect)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="glass p-10 rounded-3xl border-emerald-500/10 bg-zinc-900/30">
                <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> What you walk away with:
                </h4>
                <ul className="space-y-4 text-zinc-300">
                  <li className="flex gap-3 items-start">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Market validation report (proof your architecture holds)</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Go-to-market strategy aligned with revenue architecture</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Messaging and positioning framework (sell the outcome, not the features)</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Board presentation deck (structural soundness story for investors)</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Reinforcement roadmap (ongoing monitoring and optimization plan)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Complete Package Summary */}
      <Section className="py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-6">What You Walk Away With: The Complete Package</h2>
          <p className="text-zinc-400">At the end of 8-12 weeks, you'll have a fully architected foundation.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Rebuilt Financial Model", items: ["Revenue assumptions validated", "Pricing stress-tested to 100x", "Unit economics that hold", "Hidden cash cows identified"] },
            { title: "Service Design Blueprint", items: ["Complete LBGUPS map", "Every touchpoint architected", "Cross-functional playbook", "Lifecycle monetization strategy"] },
            { title: "Tech Stack Alignment", items: ["Infrastructure audit", "Scalability stress test", "Technical debt prioritization", "Integration map"] },
            { title: "Market Validation & GTM", items: ["Qualitative + quantitative proof", "GTM strategy aligned with revenue", "Messaging framework", "Board-ready deck"] },
            { title: "Reinforcement Roadmap", items: ["Ongoing monitoring plan", "Optimization priorities", "Structural moat protection", "Stress-test schedule"] }
          ].map((pkg, i) => (
            <div key={i} className="glass p-8 rounded-3xl border-white/5">
              <h4 className="text-xl font-bold mb-6 text-emerald-500">{pkg.title}</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                {pkg.items.map((item, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-emerald-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/revenue-architecture-intensive/apply">
            <Button className="px-12 py-6 text-lg">Apply for Revenue Architecture Intensive</Button>
          </Link>
        </div>
      </Section>

      {/* The Transformation */}
      <div className="bg-zinc-900/30 py-24 border-y border-white/5">
        <Section className="max-w-4xl">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">The Transformation</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="text-xs font-bold text-red-500 uppercase tracking-widest">Before</div>
              <p className="text-xl text-zinc-400 italic">"I know what's broken, but I don't know how to fix it without rebuilding everything. And I don't have time to rebuild everything."</p>
            </div>
            <div className="space-y-4">
              <div className="text-xs font-bold text-emerald-500 uppercase tracking-widest">After</div>
              <p className="text-xl text-white italic">"We rebuilt the foundation in 12 weeks. Our board meetings went from defensive to strategic. Our next funding round closed in 6 weeks because our revenue story was bulletproof. We're scaling now—and the foundation is holding."</p>
            </div>
          </div>
        </Section>
      </div>

      {/* How This Works */}
      <Section className="py-24">
        <h2 className="text-4xl font-serif font-bold mb-16 text-center">How This Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Application", desc: "Submit your current state, diagnosis, scope, and executive alignment." },
            { step: "02", title: "Discovery Call", desc: "30-45 minute call to confirm fit, scope, timeline, and readiness." },
            { step: "03", title: "The Intensive", desc: "Weekly 90-min sessions, homework, and async support for 8-12 weeks." },
            { step: "04", title: "Handoff", desc: "Receive all deliverables, roadmap, and clarity on next steps." }
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="text-5xl font-serif font-bold text-emerald-500/10 mb-4">{item.step}</div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Investment & Commitment */}
      <div className="bg-zinc-950 py-32 border-y border-white/5">
        <Section className="text-center">
          <div className="glass p-16 rounded-[3rem] border-emerald-500/20 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            <h2 className="text-4xl font-serif font-bold mb-4">Investment: $35,000</h2>
            <p className="text-zinc-400 mb-12 max-w-xl mx-auto">
              This is not a consulting retainer. This is an implementation intensive. 8-12 weeks. Full structural rebuilding. Complete handoff.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 text-left mb-12">
              <div>
                <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Payment Structure</h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• 50% due upon engagement start</li>
                  <li>• 50% due at midpoint (end of Phase 2)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Commitment</h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• 8-12 weeks duration</li>
                  <li>• Weekly 90-min working sessions</li>
                  <li>• 3-5 hours/week focused homework</li>
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-sm text-emerald-400 italic mb-12">
              Limited availability: I take on a maximum of 3 intensives per quarter to ensure deep collaboration.
            </div>

            <Link to="/revenue-architecture-intensive/apply">
              <Button className="group px-12 py-6 text-lg">
                Apply for Revenue Architecture Intensive
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Section>
      </div>

      {/* Testimonials */}
      <Section className="py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { quote: "Our board kept asking the same questions, and I kept giving surface-level answers. Elissa showed me we had gaps between our product roadmap and our financial model. Once we fixed that alignment, board meetings became strategic instead of defensive.", author: "Post-Series A Founder, B2B Platform" },
            { quote: "We were on version 1.3, rebuilding features we thought were done. Elissa showed us in one session what was structurally broken. We stopped spinning and started architecting. That clarity alone was worth 10x the investment.", author: "Series A Founder, SaaS" },
            { quote: "I walked into investor meetings confident, but I couldn't cleanly answer their questions about margin assumptions. After working with Elissa, I had the answers locked and loaded. We closed our round 6 weeks later.", author: "Seed Stage Founder, FinTech" }
          ].map((t, i) => (
            <div key={i} className="glass p-10 rounded-3xl border-white/5 relative">
              <Quote className="absolute top-8 left-8 w-12 h-12 text-emerald-500/10" />
              <p className="text-lg text-zinc-300 italic mb-8 relative z-10">"{t.quote}"</p>
              <div className="text-xs font-bold text-white uppercase tracking-widest">— {t.author}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Final Pitch */}
      <Section className="py-32 text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 max-w-4xl mx-auto leading-tight">
          This Is Your <span className="italic text-emerald-500">One Shot</span>
        </h2>
        <div className="max-w-3xl mx-auto text-zinc-400 text-lg leading-relaxed mb-12 space-y-6">
          <p>
            You didn't leave your career, convince investors, and risk everything to iterate yourself out of business.
          </p>
          <p className="text-white font-bold text-2xl">
            You're here to build something that holds.
          </p>
          <p>
            Not just at 10 customers. At 10,000. Not just at $1M ARR. At $100M. Not just until the next funding round. For the next decade.
          </p>
          <p>
            The Top 5% don't patch gaps. They architect foundations. And they do it before they scale—not after they collapse.
          </p>
        </div>
        <div className="flex flex-col items-center gap-8">
          <Link to="/revenue-architecture-intensive/apply">
            <Button className="group px-12 py-6 text-lg">
              Apply for Revenue Architecture Intensive
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="text-zinc-500 text-sm">Applications are reviewed within 3-5 business days.</p>
        </div>
      </Section>

      {/* Not Ready Yet? */}
      <div className="bg-zinc-900/50 py-32 border-t border-white/5">
        <Section className="text-center">
          <h2 className="text-3xl font-serif font-bold mb-16">Not Ready for the Intensive Yet?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                title: "Revenue Architecture Audit", 
                price: "$5,000", 
                desc: "Four intensive sessions where we diagnose exactly what's exposed—and map the fix before you scale.",
                cta: "Book Your Audit",
                link: "/audit"
              },
              { 
                title: "Revenue Architecture Diagnostic", 
                price: "$222", 
                desc: "Submit your product, pricing, and revenue model. Receive a personalized diagnostic with your top 5 failure points.",
                cta: "Get Your Diagnostic",
                link: "/diagnostic"
              },
              { 
                title: "MVP+R™ Deep Dive", 
                price: "$27", 
                desc: "Learn the framework that separates the Top 5% from the 95%.",
                cta: "Start with Deep Dive",
                link: "/mvp-r"
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
      <Section className="py-24 max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif font-bold mb-16 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "Is this just consulting?", a: "No. This is implementation. We work together to rebuild your architecture. I don't just give you a report; I help you architect the fix and provide the documentation you need to scale." },
            { q: "What's the time commitment?", a: "Expect 90 minutes for our weekly working session, plus 3-5 hours of focused 'homework' between sessions. This is foundational work that requires your deep attention." },
            { q: "Do I need to have done the Audit first?", a: "Ideally, yes. We need a clear diagnosis before we can rebuild. If you haven't done the Audit but have equivalent structural analysis from another advisor, we can discuss it during the discovery call." },
            { q: "What if I'm not ready to scale yet?", a: "This is actually the best time to do this work. Architecting your foundation before you scale is significantly cheaper and faster than rebuilding it after it breaks under pressure." },
            { q: "How many intensives do you take on?", a: "I limit myself to 3 intensives per quarter. This ensures I can provide the deep, focused collaboration required for this level of structural work." }
          ].map((faq, i) => (
            <details key={i} className="glass rounded-2xl border border-white/5 group overflow-hidden">
              <summary className="p-6 cursor-pointer flex justify-between items-center font-bold text-zinc-200 hover:bg-white/5 transition-colors list-none">
                {faq.q}
                <ChevronRight className="w-5 h-5 text-emerald-500 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="p-6 pt-0 text-zinc-400 leading-relaxed border-t border-white/5 bg-zinc-900/30">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </Section>

      <Section className="py-32 text-center">
        <Link to="/revenue-architecture-intensive/apply">
          <Button className="px-12 py-6 text-lg">Apply Now</Button>
        </Link>
      </Section>

      <Footer />
    </div>
  );
}
