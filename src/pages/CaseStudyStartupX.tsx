import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ChevronRight, 
  Rocket, 
  Search, 
  Target, 
  CheckCircle2,
  ArrowLeft,
  TrendingUp,
  Stethoscope,
  Wifi,
  AlertTriangle,
  Quote,
  Zap,
  TrendingDown,
  ShieldAlert
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

export default function CaseStudyStartupX() {
  return (
    <div className={`min-h-screen font-sans bg-[${COLORS.cream}] text-[${COLORS.navy}]`}>
      <Navbar />

      {/* Breadcrumbs */}
      <div className="pt-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <nav className={`flex items-center gap-2 text-sm text-[${COLORS.charcoal}]/60 mb-8`}>
          <Link to="/" className={`hover:text-[${COLORS.navy}] transition-colors`}>Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/case-studies" className={`hover:text-[${COLORS.navy}] transition-colors`}>Case Studies</Link>
          <ChevronRight className="w-4 h-4" />
          <span className={`text-[${COLORS.camel}] font-medium`}>Startup X: The $17.5M Lesson</span>
        </nav>
      </div>

      {/* Hero Section */}
      <Section className="pt-0 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className={`inline-block px-3 py-1 rounded-full bg-[${COLORS.oxblood}]/10 text-[${COLORS.oxblood}] text-[11px] font-bold tracking-[0.2em] uppercase mb-6`}>
              Healthcare Tech Case Study
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight text-[${COLORS.navy}]">
              Startup X: <br />
              The <span className={`italic text-[${COLORS.oxblood}]`}>$17.5M</span> Lesson
            </h1>
            <p className={`text-xl text-[${COLORS.charcoal}] leading-relaxed mb-8`}>
              What happens when you skip MVP+R™? A cautionary tale of brilliant founders, real market need, and a $17.5M failure.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`bg-[${COLORS.oxblood}]/5 p-10 rounded-[2.5rem] border border-[${COLORS.oxblood}]/20 relative overflow-hidden`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-[${COLORS.oxblood}]/10 blur-3xl -z-10`} />
            <div className={`text-xs text-[${COLORS.oxblood}] font-bold uppercase tracking-widest mb-6 flex items-center gap-2`}>
              <ShieldAlert className="w-4 h-4" /> Critical Failure Analysis
            </div>
            <div className="space-y-6">
              <div>
                <div className={`text-5xl font-bold text-[${COLORS.navy}] mb-1`}>$17.5M</div>
                <div className={`text-sm text-[${COLORS.charcoal}]/60 font-medium uppercase tracking-wider`}>Capital Burned</div>
              </div>
              <div className={`h-px bg-[${COLORS.oxblood}]/10 w-full`} />
              <div className="flex gap-12">
                <div>
                  <div className={`text-3xl font-bold text-[${COLORS.oxblood}]`}>18mo</div>
                  <div className={`text-xs text-[${COLORS.charcoal}]/60 uppercase tracking-wider`}>Wasted Rework</div>
                </div>
                <div>
                  <div className={`text-3xl font-bold text-[${COLORS.oxblood}]`}>Zero</div>
                  <div className={`text-xs text-[${COLORS.charcoal}]/60 uppercase tracking-wider`}>Durability</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Content Section */}
      <div className={`bg-[${COLORS.bone}] py-24 border-y border-[${COLORS.camel}]/10`}>
        <Section className="max-w-4xl">
          <div className="max-w-none">
            <div className="space-y-16">
              
              {/* The Client Section */}
              <section>
                <h2 className={`text-3xl font-serif font-bold mb-8 flex items-center gap-4 text-[${COLORS.navy}]`}>
                  <span className={`w-8 h-px bg-[${COLORS.camel}]/50`} /> The Client
                </h2>
                <div className={`bg-[${COLORS.cream}] p-8 rounded-3xl border border-[${COLORS.camel}]/10 mb-8`}>
                  <ul className="space-y-4 text-[${COLORS.charcoal}]">
                    <li className="flex gap-3"><CheckCircle2 className={`w-5 h-5 text-[${COLORS.forest}] shrink-0 mt-1`} /> <strong>Industry:</strong> Healthcare Technology</li>
                    <li className="flex gap-3"><CheckCircle2 className={`w-5 h-5 text-[${COLORS.forest}] shrink-0 mt-1`} /> <strong>Funding:</strong> $17.5 million (Series A)</li>
                    <li className="flex gap-3"><CheckCircle2 className={`w-5 h-5 text-[${COLORS.forest}] shrink-0 mt-1`} /> <strong>The Promise:</strong> A breakthrough digital health platform that would revolutionize patient care.</li>
                  </ul>
                </div>
                <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed`}>
                  The team was smart, passionate, and well-funded. Everything looked right on paper. But they skipped the foundation work. And it cost them everything.
                </p>
              </section>

              {/* The Pattern */}
              <section>
                <h2 className={`text-3xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>This Is Not a Failure Story. This Is a Pattern Story.</h2>
                <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed mb-8`}>
                  Startup X is not unique. They're not an outlier. They are the 95%. Brilliant founders, real market need, solid funding—and they still failed. Not because they weren't smart enough, but because they skipped MVP+R™.
                </p>
                <div className={`bg-[${COLORS.cream}] p-10 rounded-[2rem] border border-[${COLORS.camel}]/10 relative`}>
                  <Quote className={`absolute top-8 right-8 w-12 h-12 text-[${COLORS.camel}]/10`} />
                  <p className={`text-2xl font-serif italic text-[${COLORS.navy}] leading-relaxed`}>
                    "They validated product/market fit (MVP). They didn't validate revenue architecture, service experience, or structural durability (+R). And that's what killed them."
                  </p>
                </div>
              </section>

              {/* The Launch Issue */}
              <section>
                <h2 className={`text-3xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>The Launch: When "Good Enough" Isn't</h2>
                <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed mb-8`}>
                  Startup X launched their 1.0 release with excitement and momentum. They had a working product, paying customers, and investor backing. And within weeks, the cracks started showing.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Billing system couldn't handle pricing",
                    "Tech stack couldn't scale to volume",
                    "Onboarding didn't match sales promise",
                    "Ops couldn't deliver on SLAs",
                    "Margins were eaten by cost structure"
                  ].map((issue, i) => (
                    <div key={i} className={`flex items-center gap-3 p-4 rounded-xl bg-[${COLORS.oxblood}]/[0.03] border border-[${COLORS.oxblood}]/10`}>
                      <AlertTriangle className={`w-4 h-4 text-[${COLORS.oxblood}]`} />
                      <span className="text-sm text-[${COLORS.charcoal}]">{issue}</span>
                    </div>
                  ))}
                </div>
                <p className={`text-[${COLORS.charcoal}]`}>
                  These weren't bugs. These were gaps in the foundation.
                </p>
              </section>

              {/* The Dot Release Trap */}
              <section>
                <h2 className={`text-3xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>The Dot Release Trap: 1.0 → 1.1 → 1.2 → Nowhere</h2>
                <div className={`p-8 rounded-3xl bg-[${COLORS.oxblood}]/[0.03] border-l-4 border-[${COLORS.oxblood}] mb-8`}>
                  <p className={`text-xl font-serif italic text-[${COLORS.navy}] leading-relaxed mb-4`}>
                    "They were treating symptoms, not fixing the structure. They were patching gaps instead of architecting the foundation."
                  </p>
                </div>
                <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed`}>
                  They did what most startups do: they built version 1.1. "This will fix it," they said. They spent six months rebuilding features and fixing bugs. Version 1.1 launched. And it still didn't work. By version 1.2, they were 18 months post-launch, millions burned, and stuck in the dot release trap while competitors moved faster.
                </p>
              </section>

              {/* Failure Points */}
              <section className={`pt-16 border-t border-[${COLORS.camel}]/10`}>
                <h2 className={`text-3xl font-serif font-bold mb-8 text-[${COLORS.oxblood}] italic`}>What They Missed: The 10 Common Failure Points</h2>
                <div className="space-y-4">
                  {[
                    { title: "Financial Mismatch", desc: "Pricing assumed a cost structure operations couldn't support." },
                    { title: "Unvalidated Assumptions", desc: "Assumed customers would pay X without testing it." },
                    { title: "Tech Stack Fragility", desc: "Promised real-time data but tech couldn't handle scale." },
                    { title: "Service Experience Gaps", desc: "Sales sold one experience; Ops delivered another." },
                    { title: "Lab vs. Real World", desc: "Everything worked in the lab; broke in real-world use cases." },
                    { title: "Siloed Teams", desc: "Billing, Ops, and Support weren't aligned with the roadmap." },
                    { title: "Scale Collapse", desc: "Margins looked fine at 100 customers; lost money at 1,000." },
                    { title: "Friction Blindness", desc: "No visibility into where the onboarding experience broke down." },
                    { title: "Traction vs. Durability", desc: "Validated early traction but not long-term retention." },
                    { title: "Revenue Blindness", desc: "Didn't hunt for revenue opportunities before development." }
                  ].map((point, i) => (
                    <div key={i} className={`flex gap-4 p-4 rounded-xl bg-[${COLORS.cream}] border border-[${COLORS.camel}]/10`}>
                      <div className={`text-[${COLORS.oxblood}] font-bold shrink-0`}>{i + 1}.</div>
                      <div>
                        <h4 className={`font-bold text-[${COLORS.navy}]`}>{point.title}</h4>
                        <p className={`text-sm text-[${COLORS.charcoal}]/60`}>{point.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* The Lesson */}
              <section className={`pt-16 border-t border-[${COLORS.camel}]/10`}>
                <h2 className={`text-3xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>The Pattern: Why This Keeps Happening</h2>
                <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed mb-8`}>
                  Startup X thought they were doing everything right. They had an MVP, customers, and funding. What they didn't have was MVP+R™. Every feature they shipped exposed more cracks. Every customer they acquired revealed more gaps.
                </p>
                <div className={`bg-[${COLORS.oxblood}]/5 p-10 rounded-[2.5rem] border border-[${COLORS.oxblood}]/20 mb-12`}>
                  <div className={`flex items-center gap-3 text-[${COLORS.oxblood}] font-bold uppercase tracking-widest mb-6`}>
                    <Zap className="w-5 h-5" /> The Lesson
                  </div>
                  <p className={`text-2xl text-[${COLORS.navy}] font-serif italic leading-relaxed`}>
                    "By the time they realized the foundation was broken, it was too late to rebuild it."
                  </p>
                </div>
              </section>

              {/* What Could Have Been Done */}
              <section className={`pt-16 border-t border-[${COLORS.camel}]/10`}>
                <h2 className={`text-3xl font-serif font-bold mb-8 text-[${COLORS.forest}] italic`}>What Startup X Could Have Done Differently</h2>
                <div className="space-y-6 mb-12">
                  {[
                    { icon: Target, title: "Cross-Functional Alignment", text: "Cross-referenced product, financials, tech stack, and customer journey to find gaps before development." },
                    { icon: Search, title: "Revenue Architecture Validation", text: "Validated revenue assumptions qualitatively and quantitatively before billing was built." },
                    { icon: Rocket, title: "Design Sprints", text: "Run design sprints in real customer environments to discover what breaks before investing in expensive dev." }
                  ].map((item, i) => (
                    <div key={i} className={`flex gap-6 p-6 rounded-2xl bg-[${COLORS.forest}]/5 border border-[${COLORS.forest}]/20`}>
                      <div className={`w-12 h-12 rounded-full bg-[${COLORS.forest}]/10 flex items-center justify-center shrink-0`}>
                        <item.icon className={`w-6 h-6 text-[${COLORS.forest}]`} />
                      </div>
                      <div>
                        <h4 className={`font-bold mb-2 text-[${COLORS.navy}]`}>{item.title}</h4>
                        <p className={`text-[${COLORS.charcoal}] text-sm`}>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={`text-center p-8 rounded-3xl bg-[${COLORS.forest}]/5 border border-[${COLORS.forest}]/20`}>
                  <Link to="/mvp-r" className={`text-[${COLORS.forest}] font-bold hover:text-[${COLORS.navy}] transition-colors flex items-center justify-center gap-2`}>
                    Learn more about MVP+R™ <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </section>

              {/* Final Lesson */}
              <section className={`pt-16 border-t border-[${COLORS.camel}]/10`}>
                <h2 className={`text-3xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>The Lesson: The 95% vs. The Top 5%</h2>
                <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed mb-8`}>
                  The Top 5% architect before they scale. They don't iterate after launch; they architect before development. They don't patch gaps; they engineer them out of the equation. That's how you avoid becoming Startup X.
                </p>
                <Link to="/mvp-r">
                  <Button className="w-full md:w-auto">Learn more about MVP+R™ →</Button>
                </Link>
              </section>
            </div>
          </div>
        </Section>
      </div>

      {/* Related Case Studies */}
      <Section className={`py-24 border-b border-[${COLORS.camel}]/10`}>
        <h2 className={`text-3xl font-serif font-bold mb-12 text-[${COLORS.navy}]`}>See More Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "The $100M In-Home WiFi Launch",
              industry: "Telecom Giant",
              metric: "$100M Year One",
              icon: Wifi,
              path: "/case-study-wifi",
              accent: COLORS.gold
            },
            {
              title: "MedTech Diagnostic Revolution",
              industry: "MedTech Startup",
              metric: "10x Revenue Potential",
              icon: Stethoscope,
              path: "/case-study-pap-smear",
              accent: COLORS.forest
            }
          ].map((study, i) => (
            <Link key={i} to={study.path} className={`bg-[${COLORS.bone}] p-8 rounded-3xl border border-[${COLORS.camel}]/10 hover:border-[${COLORS.camel}]/30 transition-all duration-500 group block`}>
              <study.icon className={`w-8 h-8 text-[${study.accent}] mb-6`} />
              <span className={`text-xs font-bold text-[${COLORS.charcoal}]/60 uppercase tracking-widest mb-2 block`}>{study.industry}</span>
              <h3 className={`text-2xl font-serif font-bold mb-4 text-[${COLORS.navy}] group-hover:text-[${COLORS.camel}] transition-colors`}>{study.title}</h3>
              <div className={`text-[${study.accent}] font-bold`}>{study.metric}</div>
            </Link>
          ))}
        </div>
      </Section>

      <Testimonial 
        variant="callout"
        quote="Seeing the Startup X analysis was a wake-up call. It's the most clear-eyed explanation of why 'traction' doesn't always equal 'durability' that I've ever seen."
        attribution="Series B Founder & Investor"
      />

      {/* Bottom CTA Section */}
      <div className={`bg-[${COLORS.bone}] py-32`}>
        <Section className="text-center">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-16 text-[${COLORS.navy}]`}>Ready to Architect Your Foundation?</h2>
          
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
                title: "Revenue Architecture Audit", 
                price: "$5,000", 
                desc: "Four intensive sessions to map your gaps and architect the fix.",
                cta: "Book Your Audit",
                featured: true,
                link: "/audit"
              },
              { 
                title: "MVP+R™ Deep Dive", 
                price: "$27", 
                desc: "Learn the framework that separates the Top 5% from the 95%.",
                cta: "Start with Deep Dive",
                link: "/mvp-r"
              }
            ].map((item, i) => (
              <div key={i} className={`bg-[${COLORS.cream}] p-8 rounded-3xl flex flex-col text-left border ${item.featured ? `border-[${COLORS.camel}]/50 ring-1 ring-[${COLORS.camel}]/20` : `border-[${COLORS.camel}]/10`}`}>
                <h4 className={`font-bold mb-1 text-[${COLORS.navy}]`}>{item.title}</h4>
                <div className={`text-2xl font-bold text-[${COLORS.camel}] mb-4`}>{item.price}</div>
                <p className={`text-sm text-[${COLORS.charcoal}] mb-8 flex-1`}>{item.desc}</p>
                <Link to={item.link} className="w-full">
                  <Button variant={item.featured ? 'primary' : 'outline'} className="w-full justify-center py-2 text-sm">
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
