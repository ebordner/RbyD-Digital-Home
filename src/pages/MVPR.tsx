import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Zap, 
  TrendingUp, 
  Layers,
  Target,
  ShieldCheck,
  Search,
  ChevronRight,
  AlertTriangle
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

export default function MVPR() {
  return (
    <div className={`min-h-screen font-sans bg-[${COLORS.cream}] text-[${COLORS.navy}]`}>
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className={`absolute top-0 left-1/4 w-96 h-96 bg-[${COLORS.camel}]/10 blur-[120px] rounded-full`} />
        </div>
        
        <Section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={`inline-block px-4 py-1.5 rounded-full bg-[${COLORS.camel}]/10 text-[${COLORS.camel}] text-[13px] font-bold tracking-[0.3em] uppercase mb-6`}>
              The MVP+R™ Framework
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-8 leading-[1.1]">
              The Framework That Separates the <br />
              <span className={`italic text-[${COLORS.camel}] text-5xl md:text-7xl`}>Top 5%</span> from the 95%
            </h1>
            <p className={`text-xl md:text-2xl text-[${COLORS.charcoal}] max-w-4xl mx-auto mb-12 leading-relaxed`}>
              Stop Launching on Hope. Start Building with Proof.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>Get the Deep Dive - $27</Button>
              <Button variant="outline">Book a Diagnostic</Button>
            </div>
          </motion.div>
        </Section>
      </header>

      {/* The Problem Section */}
      <Section className="py-24">
        <div className="max-w-4xl mx-auto">
          <div className={`space-y-8 text-lg text-[${COLORS.charcoal}] leading-relaxed`}>
            <p>
              For 15-20 years, founders have been told: <span className={`text-[${COLORS.navy}] italic font-bold`}>"Build your MVP. Get it to market fast. Iterate based on feedback."</span>
            </p>
            <p className={`text-3xl font-serif text-[${COLORS.navy}] italic border-l-4 border-[${COLORS.camel}] pl-8 py-4`}>
              And for 15-20 years, 95% of startups have still failed.
            </p>
            <p>
              If MVP was the silver bullet everyone thinks it is, we wouldn't still be here—watching brilliant founders with real ideas burn through millions in capital, only to iterate themselves out of business.
            </p>
            <div className={`bg-[${COLORS.bone}] p-12 rounded-3xl text-center border border-[${COLORS.camel}]/10`}>
              <p className="text-xl mb-4">The problem isn't that MVP is wrong.</p>
              <p className={`text-4xl font-serif font-bold text-[${COLORS.camel}]`}>The problem is that MVP isn't enough.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Why MVP Fails */}
      <div className={`bg-[${COLORS.bone}] py-24`}>
        <Section>
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>Why MVP Alone Fails</h2>
              <p className={`text-lg text-[${COLORS.charcoal}] mb-8 leading-relaxed`}>
                MVP validates one thing: <span className={`text-[${COLORS.navy}] font-bold italic text-xl`}>product/market fit</span>.
                It answers the question: "Do customers want this?"
              </p>
              <p className={`text-xl font-serif italic text-[${COLORS.charcoal}] mb-12`}>
                But it doesn't answer the questions that actually determine if you'll survive.
              </p>
            </div>
            <div className={`bg-[${COLORS.cream}] p-12 rounded-3xl border border-[${COLORS.oxblood}]/10`}>
              <h3 className={`text-xl font-bold mb-8 flex items-center gap-3 text-[${COLORS.oxblood}]`}>
                <AlertTriangle className={`w-6 h-6 text-[${COLORS.oxblood}]`} /> The Unanswered Questions:
              </h3>
              <ul className="space-y-6">
                {[
                  "Will customers pay what you need them to pay?",
                  "Will your revenue model hold under scale?",
                  "Will your tech stack deliver on your product promise?",
                  "Will your service experience reinforce your brand at every touchpoint?",
                  "Will your pricing and margin assumptions support your growth?",
                  "Will your customer journey introduce friction that kills conversions?",
                  "Will your financial model align with your product roadmap?"
                ].map((item, i) => (
                  <li key={i} className={`flex gap-4 text-[${COLORS.charcoal}]`}>
                    <XCircle className={`w-5 h-5 text-[${COLORS.oxblood}] shrink-0 mt-0.5`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-16 text-center">
            <p className={`text-2xl font-serif italic text-[${COLORS.charcoal}]`}>
              These are the gaps that kill startups. Not because they didn't validate product/market fit.
            </p>
            <p className={`text-4xl font-serif font-bold text-[${COLORS.camel}] mt-4`}>
              Because they didn't validate revenue architecture.
            </p>
          </div>
        </Section>
      </div>

      {/* The Pattern */}
      <Section className="py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className={`bg-[${COLORS.bone}] p-12 rounded-3xl border border-[${COLORS.camel}]/10 space-y-8`}>
              <h3 className={`text-3xl font-serif font-bold text-[${COLORS.navy}]`}>The Pattern That Keeps Repeating</h3>
              <p className={`text-[${COLORS.charcoal}]`}>
                You launch version 1.0. You learn what's wrong. You build version 1.1. You spend another 6-12 months and hundreds of thousands of dollars. You launch 1.1. You learn again. You build 1.2.
              </p>
              <div className="space-y-4">
                <p className={`font-bold text-[${COLORS.navy}] uppercase tracking-widest text-xs`}>Meanwhile:</p>
                <ul className={`space-y-3 text-sm text-[${COLORS.charcoal}]`}>
                  <li className="flex gap-3"><ChevronRight className={`w-4 h-4 text-[${COLORS.camel}]`} /> Your market window is closing</li>
                  <li className="flex gap-3"><ChevronRight className={`w-4 h-4 text-[${COLORS.camel}]`} /> Your competitors are moving faster</li>
                  <li className="flex gap-3"><ChevronRight className={`w-4 h-4 text-[${COLORS.camel}]`} /> Your investors are asking harder questions</li>
                  <li className="flex gap-3"><ChevronRight className={`w-4 h-4 text-[${COLORS.camel}]`} /> AI is compressing your time to obsolescence</li>
                </ul>
              </div>
              <p className={`text-2xl font-serif italic text-[${COLORS.oxblood}]`}>
                By the time you're on version 1.3, you've iterated yourself out of business.
              </p>
              <p className={`text-[${COLORS.charcoal}] font-bold tracking-widest uppercase text-[11px]`}>This is the 95%.</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>What the Top 5% Do Differently</h2>
            <div className={`space-y-8 text-lg text-[${COLORS.charcoal}]`}>
              <p>The Top 5% don't just validate product/market fit.</p>
              <p className={`text-[${COLORS.navy}] font-bold`}>They validate revenue architecture before they scale.</p>
              <ul className="space-y-6">
                {[
                  "They don't build and hope it pays. They prove it will pay—before they invest in expensive development.",
                  "They don't patch gaps after launch. They engineer gaps out of the equation before development.",
                  "They don't iterate after launch. They architect before they scale."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                  <CheckCircle2 className={`w-6 h-6 text-[${COLORS.forest}] shrink-0`} />
                  <span>{item}</span>
                </li>
                ))}
              </ul>
              <div className="pt-8">
                <p className={`text-5xl font-serif font-bold text-[${COLORS.camel}] tracking-tight`}>That's MVP+R™.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What is MVP+R */}
      <div className={`bg-[${COLORS.navy}] py-32 text-[${COLORS.cream}]`}>
        <Section className="text-center max-w-4xl">
          <h2 className="text-6xl font-serif font-bold mb-8">What is MVP+R™?</h2>
          <p className={`text-3xl font-serif italic mb-12 text-[${COLORS.camel}]`}>
            MVP+R = Minimum Viable Product + Revenue Validation
          </p>
          <p className="text-2xl leading-relaxed font-light">
            It's the framework that goes beyond product/market fit to validate the entire business architecture before you scale.
          </p>
        </Section>
      </div>

      {/* The Foundation */}
      <Section className="py-32">
        <div className="text-center mb-24">
          <span className={`text-[${COLORS.camel}] font-bold tracking-[0.3em] uppercase text-xs`}>The Foundation</span>
          <h2 className={`text-5xl md:text-6xl font-serif font-bold mt-4 mb-8 text-[${COLORS.navy}]`}>The Profitable Method™</h2>
          <p className={`text-xl text-[${COLORS.charcoal}] max-w-3xl mx-auto leading-relaxed`}>
            Before we get to +R, we start with the systematic elimination of the 10 common failure points that kill startups.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Misalignment between product and financial model",
            "Gaps between what's promised and what's delivered",
            "Customer experience friction at critical touchpoints",
            "Revenue assumptions that don't hold under scale",
            "Tech stack that can't support the brand promise",
            "Market validation that's too shallow or too narrow",
            "Pricing that doesn't support margin assumptions",
            "Service delivery that undermines product value",
            "Operational processes that introduce customer pain",
            "Lack of cross-functional alignment before development"
          ].map((item, i) => (
            <div key={i} className={`bg-[${COLORS.bone}] p-6 rounded-xl flex items-center gap-4 border border-[${COLORS.camel}]/10`}>
              <span className={`text-[${COLORS.camel}] font-mono text-sm font-bold`}>{(i + 1).toString().padStart(2, '0')}</span>
              <span className={`text-[${COLORS.navy}] text-sm font-bold uppercase tracking-wider`}>{item}</span>
            </div>
          ))}
        </div>

        <div className={`mt-24 bg-[${COLORS.bone}] p-12 rounded-3xl text-center border border-[${COLORS.camel}]/20`}>
          <p className={`text-xl text-[${COLORS.charcoal}] mb-4`}>This is your MVP foundation—ensuring your product feature set is validated and structurally sound.</p>
          <p className={`text-3xl font-serif font-bold text-[${COLORS.camel}] italic`}>But that's not enough to be in the Top 5%.</p>
        </div>
      </Section>

      {/* The +R Layers */}
      <div className={`bg-[${COLORS.bone}] py-32`}>
        <Section>
          <div className="text-center mb-24">
            <h2 className={`text-5xl md:text-6xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>The +R: Three Layers That Validate <br /> Revenue Architecture</h2>
            <p className={`text-xl text-[${COLORS.charcoal}]`}>MVP+R™ = The Profitable Method™ + Three Critical Layers</p>
          </div>

          <div className="space-y-32">
            {/* Layer 1 */}
            <div className={`grid lg:grid-cols-2 gap-16 items-center bg-white p-12 rounded-[3rem] border border-[${COLORS.camel}]/10`}>
              <div>
                <span className={`text-[${COLORS.camel}] font-bold tracking-widest uppercase text-xs`}>Layer 01</span>
                <h3 className={`text-4xl font-serif font-bold mt-4 mb-8 text-[${COLORS.navy}]`}>Flipping the Financials</h3>
                <div className={`space-y-6 text-[${COLORS.charcoal}] leading-relaxed`}>
                  <p>
                    <span className={`text-[${COLORS.navy}] font-bold`}>What it is:</span> Reverse-engineering your financial business model to hunt for explosive revenue opportunities before you invest in development.
                  </p>
                  <p>
                    <span className={`text-[${COLORS.navy}] font-bold`}>Why it matters:</span> Most founders build the product, then figure out the business model. The Top 5% flip it. They let the financial business model inform what gets built—not the other way around.
                  </p>
                  <div className={`bg-[${COLORS.bone}] p-8 rounded-2xl border border-[${COLORS.camel}]/20 mt-8`}>
                    <p className={`text-[${COLORS.camel}] font-bold text-sm uppercase tracking-widest mb-4`}>Key Result</p>
                    <p className={`text-[${COLORS.navy}] italic mb-4 font-medium`}>
                      My in-home WiFi launch was originally modeled as a $130 one-time device sale. By flipping the financials, we discovered a $10/month subscription model.
                    </p>
                    <div className={`flex gap-8 border-t border-[${COLORS.camel}]/20 pt-4`}>
                      <div>
                        <div className={`text-xs text-[${COLORS.charcoal}] uppercase mb-1`}>Original</div>
                        <div className={`text-xl font-bold text-[${COLORS.charcoal}]`}>$130</div>
                      </div>
                      <div className={`text-[${COLORS.camel}] font-bold text-xl self-center`}>→</div>
                      <div>
                        <div className={`text-xs text-[${COLORS.charcoal}] uppercase mb-1`}>Flipped</div>
                        <div className={`text-xl font-bold text-[${COLORS.navy}]`}>$600</div>
                      </div>
                    </div>
                    <div className={`mt-6 bg-[${COLORS.gold}]/10 p-4 rounded-xl border border-[${COLORS.gold}]/20`}>
                      <p className={`text-sm text-[${COLORS.navy}] font-bold`}>Result: 4.6x revenue model increase before development.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`bg-[${COLORS.bone}] aspect-square rounded-3xl overflow-hidden p-12 flex flex-col justify-center text-center`}>
                <div className={`text-9xl font-serif font-bold text-[${COLORS.camel}]/20 mb-4`}>4.6x</div>
                <p className={`text-2xl font-serif font-bold text-[${COLORS.navy}]`}>Revenue increase by architecting the model first.</p>
              </div>
            </div>

            {/* Layer 2 */}
            <div className={`grid lg:grid-cols-2 gap-16 items-center bg-[${COLORS.bone}]/50 p-12 rounded-[3rem] border border-[${COLORS.camel}]/10`}>
              <div className="lg:order-2">
                <span className={`text-[${COLORS.camel}] font-bold tracking-widest uppercase text-xs`}>Layer 02</span>
                <h3 className={`text-4xl font-serif font-bold mt-4 mb-8 text-[${COLORS.navy}]`}>Service Design Blueprints</h3>
                <div className={`space-y-6 text-[${COLORS.charcoal}] leading-relaxed`}>
                  <p>
                    <span className={`text-[${COLORS.navy}] font-bold`}>What it is:</span> Architecting the entire customer experience journey to ensure every touchpoint delivers on your brand promise—not just your product feature set.
                  </p>
                  <p>
                    <span className={`text-[${COLORS.navy}] font-bold`}>Why it matters:</span> Your product can be technically perfect and still fail if your service experience introduces friction. This is the <span className={`text-[${COLORS.navy}] font-bold`}>LBGUPS model</span>.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {["Marketing", "Sales", "Operations", "Product", "Billing", "Support"].map((item, i) => (
                      <div key={i} className={`bg-white p-4 rounded-xl text-center border border-[${COLORS.camel}]/10`}>
                        <span className={`text-xs font-bold text-[${COLORS.charcoal}] uppercase tracking-widest`}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className={`mt-8 bg-[${COLORS.gold}]/10 p-6 rounded-2xl border border-[${COLORS.gold}]/20`}>
                    <p className={`text-sm text-[${COLORS.navy}] font-bold`}>Takeaway: If even one touchpoint fails, customers churn—no matter how good your product is.</p>
                  </div>
                </div>
              </div>
              <div className={`bg-white aspect-square rounded-3xl overflow-hidden p-12 flex flex-col justify-center text-center`}>
                <Layers className={`w-24 h-24 text-[${COLORS.camel}] mx-auto mb-8`} />
                <h4 className={`text-3xl font-serif font-bold mb-4 text-[${COLORS.navy}]`}>LBGUPS Model</h4>
                <p className={`text-[${COLORS.charcoal}]`}>Architecting every touchpoint to reinforce the brand promise.</p>
              </div>
            </div>

            {/* Layer 3 */}
            <div className={`grid lg:grid-cols-2 gap-16 items-center bg-[${COLORS.camel}]/[0.03] p-12 rounded-[3rem] border border-[${COLORS.camel}]/10`}>
              <div>
                <span className={`text-[${COLORS.camel}] font-bold tracking-widest uppercase text-xs`}>Layer 03</span>
                <h3 className={`text-4xl font-serif font-bold mt-4 mb-8 text-[${COLORS.navy}]`}>Design Sprints</h3>
                <div className={`space-y-6 text-[${COLORS.charcoal}] leading-relaxed`}>
                  <p>
                    <span className={`text-[${COLORS.navy}] font-bold`}>What it is:</span> Collapsing 5 years of learning into 5 days by iterating in real customer environments before you invest in expensive development.
                  </p>
                  <p>
                    <span className={`text-[${COLORS.navy}] font-bold`}>Why it matters:</span> Products that work in the lab often break in the real world. Design sprints let you discover what breaks BEFORE you build—not after.
                  </p>
                  <div className="space-y-4 mt-8">
                    <div className="flex gap-4 items-center">
                      <div className={`w-8 h-8 rounded-full bg-[${COLORS.navy}] text-[${COLORS.cream}] flex items-center justify-center font-bold text-xs`}>M</div>
                      <p className={`text-sm text-[${COLORS.charcoal}] font-medium`}>Test v1.0 prototype in real environment</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className={`w-8 h-8 rounded-full bg-[${COLORS.navy}] text-[${COLORS.cream}] flex items-center justify-center font-bold text-xs`}>T</div>
                      <p className={`text-sm text-[${COLORS.charcoal}] font-medium`}>Build v1.1 based on insights & test again</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className={`w-8 h-8 rounded-full bg-[${COLORS.navy}] text-[${COLORS.cream}] flex items-center justify-center font-bold text-xs`}>W</div>
                      <p className={`text-sm text-[${COLORS.charcoal}] font-medium`}>Iterate to v1.2</p>
                    </div>
                  </div>
                  <div className={`mt-8 bg-[${COLORS.gold}]/10 p-6 rounded-2xl border border-[${COLORS.gold}]/20`}>
                    <p className={`text-sm text-[${COLORS.navy}] font-bold`}>Result: Collapse the learning curve before you invest in development.</p>
                  </div>
                </div>
              </div>
              <div className={`bg-white aspect-square rounded-3xl overflow-hidden p-12 flex flex-col justify-center text-center`}>
                <TrendingUp className={`w-24 h-24 text-[${COLORS.camel}] mx-auto mb-8`} />
                <h4 className={`text-3xl font-serif font-bold mb-4 text-[${COLORS.navy}]`}>5 Days vs 5 Years</h4>
                <p className={`text-[${COLORS.charcoal}]`}>Collapse the learning curve before you invest in development.</p>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* MVP+R in Action */}
      <Section className="py-32">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-serif font-bold mb-8">MVP+R™ in Action</h2>
          <p className="text-xl text-zinc-400">The Complete Framework for the Top 5%</p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {[
            { step: "01", title: "The Profitable Method™", desc: "Eliminate 10 failure points" },
            { step: "02", title: "Flip the Financials", desc: "Hunt for revenue opportunities" },
            { step: "03", title: "Blueprint Service", desc: "Design every touchpoint (LBGUPS)" },
            { step: "04", title: "Run Design Sprints", desc: "Iterate in real environments" },
            { step: "05", title: "Validate Everything", desc: "Qualitatively & quantitatively" }
          ].map((item, i) => (
            <div key={i} className={`bg-[${COLORS.bone}] p-8 rounded-2xl border border-[${COLORS.camel}]/10 relative`}>
              <span className={`text-[${COLORS.forest}] font-mono font-bold text-sm mb-4 block tracking-widest`}>STEP {item.step}</span>
              <h4 className={`font-bold mb-2 text-[${COLORS.oxblood}] text-lg`}>{item.title}</h4>
              <p className={`text-sm text-[${COLORS.charcoal}]`}>{item.desc}</p>
              {i < 4 && <ArrowRight className={`hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-[${COLORS.camel}] w-8 h-8`} />}
            </div>
          ))}
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-8">
          <div className={`bg-[${COLORS.bone}] p-12 rounded-3xl border border-[${COLORS.forest}]/20`}>
            <h3 className={`text-2xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>When you do all of this, you have:</h3>
            <ul className="space-y-4">
              {[
                "A product that's validated for desirability",
                "A revenue model that's validated for profitability",
                "A service experience that's validated for durability",
                "A foundation that holds under scale"
              ].map((item, i) => (
                <li key={i} className={`flex gap-4 text-[${COLORS.oxblood}]`}>
                  <CheckCircle2 className={`w-5 h-5 text-[${COLORS.forest}] shrink-0 mt-0.5`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center p-12">
            <p className={`text-3xl font-serif font-bold text-[${COLORS.charcoal}] leading-tight`}>
              That's the difference between the <span className={`text-[${COLORS.oxblood}] italic`}>95%</span> and the <span className={`text-[${COLORS.forest}] italic`}>Top 5%</span>.
            </p>
          </div>
        </div>
      </Section>

      {/* Why it Matters Now */}
      <div className={`bg-[${COLORS.bone}] py-32 text-[${COLORS.forest}]`}>
        <Section className="text-center max-w-4xl">
          <h2 className={`text-5xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>Why MVP+R™ Matters Now More Than Ever</h2>
          <p className={`text-xl text-[${COLORS.forest}] leading-relaxed mb-12`}>
            AI is compressing everything. What used to take competitors 5 years to replicate now takes 60 days. If your only moat is your product features, you're exposed.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className={`bg-white p-8 rounded-2xl border border-[${COLORS.camel}]/20 shadow-sm`}>
              <h4 className={`font-bold mb-4 text-[${COLORS.camel}] uppercase tracking-widest text-sm`}>The Top 5% Compete On:</h4>
              <ul className={`space-y-3 text-lg text-[${COLORS.forest}]`}>
                <li>• Revenue architecture that's structurally sound</li>
                <li>• Service experiences that can't be replicated by a lab</li>
                <li>• Customer relationships built on trust and delivery</li>
                <li>• Foundations that hold under pressure</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <p className={`text-3xl font-serif italic text-[${COLORS.forest}] leading-tight`}>
                MVP+R™ is how you architect durability and growth in an accelerated market.
              </p>
            </div>
          </div>
        </Section>
      </div>

      <Testimonial 
        variant="callout"
        quote="Elissa's framework is the first thing I've seen that actually bridges the gap between 'cool product' and 'durable business.' It's now mandatory for our portfolio companies."
        attribution="Managing Director, Tier 1 VC Firm"
      />

      {/* Who it's For */}
      <Section className="py-24">
        <div className={`bg-[${COLORS.bone}] p-16 rounded-[3rem] border border-[${COLORS.camel}]/10 relative overflow-hidden`}>
          <div className={`absolute top-0 right-0 w-64 h-64 bg-[${COLORS.forest}]/10 blur-[100px] rounded-full`} />
          <h2 className={`text-4xl font-serif font-bold mb-12 text-[${COLORS.navy}]`}>Who MVP+R™ Is For</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <ul className="space-y-6">
              {[
                "Venture-backed founders who refuse to be part of the 95%",
                "Product managers who need leverage to validate revenue assumptions",
                "VCs and GPs who want to underwrite structural durability",
                "Startup teams tired of rebuilding features",
                "Anyone building for the Top 5%"
              ].map((item, i) => (
                <li key={i} className={`flex gap-4 text-[${COLORS.charcoal}]`}>
                  <Target className={`w-5 h-5 text-[${COLORS.forest}] shrink-0 mt-1`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col justify-center">
              <div className={`bg-[${COLORS.cream}] p-8 rounded-2xl border border-[${COLORS.camel}]/10`}>
                <p className={`text-2xl font-serif italic text-[${COLORS.forest}] mb-4`}>"Where structure is intentional, revenue is validated, and scale is inevitable."</p>
                <p className={`text-[${COLORS.charcoal}]/60 text-base`}>— The Top 5% Standard</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* How to Apply */}
      <Section className="py-32">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-6">How to Apply MVP+R™</h2>
          <p className="text-zinc-400">Choose the level of depth your architecture requires.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "The Deep Dive", 
              price: "$27", 
              desc: "Learn the complete framework, see it applied to real case studies, and assess where your product stands.",
              cta: "Get the Deep Dive"
            },
            { 
              title: "Personal Diagnostic", 
              price: "$222", 
              desc: "Submit your product, pricing, tech stack, and revenue model. Receive a Fragility Scorecard and Exposure Heat Map.",
              cta: "Get Your Diagnostic",
              featured: true
            },
            { 
              title: "Structural Audit", 
              price: "$5,000", 
              desc: "Four intensive sessions to map exactly where your foundation is exposed—and how to fix it before you scale.",
              cta: "Book Your Audit"
            }
          ].map((item, i) => (
            <div key={i} className={`bg-[${COLORS.bone}] p-10 rounded-3xl flex flex-col border ${item.featured ? `border-[${COLORS.forest}]/30 ring-1 ring-[${COLORS.forest}]/20 shadow-2xl shadow-[${COLORS.forest}]/5` : `border-[${COLORS.camel}]/10`}`}>
              <h4 className={`text-2xl font-serif font-bold mb-2 text-[${COLORS.navy}]`}>{item.title}</h4>
              <div className={`text-3xl font-bold text-[${COLORS.forest}] mb-6`}>{item.price}</div>
              <p className={`text-[${COLORS.charcoal}] text-sm mb-12 flex-1 leading-relaxed`}>{item.desc}</p>
              <Button variant={item.featured ? 'primary' : 'outline'} className="w-full justify-center">
                {item.cta}
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Conclusion */}
      <Section className={`py-32 text-center border-t border-[${COLORS.camel}]/10`}>
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className={`w-20 h-20 rounded-full bg-[${COLORS.forest}]/10 flex items-center justify-center`}>
              <ShieldCheck className={`w-10 h-10 text-[${COLORS.forest}]`} />
            </div>
          </div>
          <h2 className={`text-4xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>The Question MVP+R™ Answers</h2>
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="text-right">
              <p className={`text-[${COLORS.charcoal}]/60 text-sm uppercase tracking-widest mb-2`}>MVP asks:</p>
              <p className={`text-2xl font-serif italic text-[${COLORS.charcoal}]`}>"Can we build this?"</p>
            </div>
            <div className={`text-left border-l border-[${COLORS.camel}]/20 pl-8`}>
              <p className={`text-[${COLORS.forest}] text-sm uppercase tracking-widest mb-2`}>MVP+R™ asks:</p>
              <p className={`text-2xl font-serif italic text-[${COLORS.forest}]`}>"Should we build this... and will it pay?"</p>
            </div>
          </div>
          <p className={`text-xl text-[${COLORS.charcoal}] mb-12`}>
            The Top 5% don't guess. They architect. And they validate revenue before they scale.
          </p>
          <div className="space-y-4">
            <p className={`text-3xl font-serif font-bold text-[${COLORS.navy}]`}>Welcome to the Top 5%.</p>
            <Button className="px-12">Start Your Architecture Journey</Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
