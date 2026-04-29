import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ChevronRight, 
  Stethoscope, 
  Search, 
  Target, 
  CheckCircle2,
  ArrowLeft,
  TrendingUp,
  Rocket,
  Wifi,
  AlertTriangle,
  Quote,
  Zap
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

export default function CaseStudyPapSmear() {
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
          <span className={`text-[${COLORS.camel}] font-medium`}>At-Home Pap Smear Startup</span>
        </nav>
      </div>

      {/* Hero Section */}
      <Section className="pt-0 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className={`inline-block px-3 py-1 rounded-full bg-[${COLORS.forest}]/10 text-[${COLORS.forest}] text-[11px] font-bold tracking-[0.2em] uppercase mb-6`}>
              MedTech Case Study
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight text-[${COLORS.navy}]">
              At-Home <br />
              <span className={`italic text-[${COLORS.forest}]`}>Pap Smear</span> Startup
            </h1>
            <p className={`text-xl text-[${COLORS.charcoal}] leading-relaxed mb-8`}>
              How we 10x'd revenue potential before a single line of code was written or a single prototype manufactured.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`bg-[${COLORS.forest}]/5 p-10 rounded-[2.5rem] border border-[${COLORS.forest}]/20 relative overflow-hidden`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-[${COLORS.forest}]/10 blur-3xl -z-10`} />
            <div className={`text-xs text-[${COLORS.forest}] font-bold uppercase tracking-widest mb-6 flex items-center gap-2`}>
              <TrendingUp className="w-4 h-4" /> Key Result Callout
            </div>
            <div className="space-y-6">
              <div>
                <div className={`text-5xl font-bold text-[${COLORS.navy}] mb-1`}>10x</div>
                <div className={`text-sm text-[${COLORS.charcoal}]/60 font-medium uppercase tracking-wider`}>Revenue Potential</div>
              </div>
              <div className={`h-px bg-[${COLORS.forest}]/10 w-full`} />
              <div className="flex gap-12">
                <div>
                  <div className={`text-3xl font-bold text-[${COLORS.forest}]`}>Zero</div>
                  <div className={`text-xs text-[${COLORS.charcoal}]/60 uppercase tracking-wider`}>Wasted Dev Cycles</div>
                </div>
                <div>
                  <div className={`text-3xl font-bold text-[${COLORS.forest}]`}>$1M+</div>
                  <div className={`text-xs text-[${COLORS.charcoal}]/60 uppercase tracking-wider`}>Capital Saved</div>
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
                  <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed mb-6`}>
                    <strong>Early-stage MedTech startup</strong> in concept phase, pre-development.
                  </p>
                  <ul className="space-y-4 text-[${COLORS.charcoal}]">
                    <li className="flex gap-3"><CheckCircle2 className={`w-5 h-5 text-[${COLORS.forest}] shrink-0 mt-1`} /> <strong>The Innovation:</strong> A patented at-home pap smear medical device allowing women to collect specimens at home.</li>
                    <li className="flex gap-3"><CheckCircle2 className={`w-5 h-5 text-[${COLORS.forest}] shrink-0 mt-1`} /> <strong>The Team:</strong> CEO, COO, CFO—all brilliant, focused on bringing this innovative device to market.</li>
                  </ul>
                </div>
                
                <div className={`p-8 rounded-3xl bg-[${COLORS.oxblood}]/[0.03] border-l-4 border-[${COLORS.oxblood}] flex gap-6 items-start`}>
                  <div className={`w-12 h-12 rounded-xl bg-[${COLORS.oxblood}]/10 flex items-center justify-center shrink-0`}>
                    <AlertTriangle className={`w-6 h-6 text-[${COLORS.oxblood}]`} />
                  </div>
                  <div>
                    <h4 className={`text-[${COLORS.oxblood}] font-bold mb-2 uppercase tracking-wider text-xs`}>The Problem</h4>
                    <p className={`text-2xl font-serif font-bold text-[${COLORS.navy}] mb-2 italic`}>Shiny Object Syndrome</p>
                    <p className={`text-[${COLORS.charcoal}]`}>They were about to make a million-dollar mistake: focusing on the device while ignoring the revenue logic.</p>
                  </div>
                </div>
              </section>

              {/* What They Thought */}
              <section>
                <h2 className={`text-3xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>What They Thought Would Make Money</h2>
                <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed mb-8`}>
                  <strong>The device.</strong> It was patented. It was innovative. It was the centerpiece of every pitch deck and investor conversation. The entire focus was on industrial design, prototype creation, and manufacturing.
                </p>
                <div className={`bg-[${COLORS.cream}] p-10 rounded-[2rem] border border-[${COLORS.camel}]/10 relative`}>
                  <Quote className={`absolute top-8 right-8 w-12 h-12 text-[${COLORS.camel}]/10`} />
                  <p className={`text-2xl font-serif italic text-[${COLORS.navy}] leading-relaxed`}>
                    "They were ready to spin up expensive factory development and go straight into manufacturing without thinking about the other half of their business: the laboratory services."
                  </p>
                </div>
              </section>

              {/* What They Hadn't Thought About */}
              <section>
                <h2 className={`text-3xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>What They Hadn't Thought About</h2>
                <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed mb-8`}>
                  What happens to the pap smear specimen after the woman collects it? No one had mapped out the logistics:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    "How does it get shipped to a lab?",
                    "Which lab processes it?",
                    "Who reads the results?",
                    "How do results get to the patient/doctor?",
                    "Who bills for the lab services?",
                    "Does insurance cover it?"
                  ].map((q, i) => (
                    <div key={i} className={`flex items-center gap-3 p-4 rounded-xl bg-[${COLORS.cream}] border border-[${COLORS.camel}]/10`}>
                      <Search className={`w-4 h-4 text-[${COLORS.forest}]`} />
                      <span className="text-sm text-[${COLORS.charcoal}]">{q}</span>
                    </div>
                  ))}
                </div>
                <p className={`text-[${COLORS.charcoal}]`}>
                  They had no financial business model for the service side. They'd completely overlooked the laboratory services.
                </p>
              </section>

              {/* What Was At Stake */}
              <section>
                <h2 className={`text-3xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>What Was At Stake</h2>
                <div className={`p-8 rounded-3xl bg-[${COLORS.oxblood}]/[0.03] border-l-4 border-[${COLORS.oxblood}] mb-8`}>
                  <p className={`text-xl font-serif italic text-[${COLORS.navy}] leading-relaxed mb-4`}>
                    "Could you imagine spinning up development at the factory for the medical device, going all the way to launching and then starting to think through the laboratory requirements? It would have been a disaster!"
                  </p>
                  <p className={`text-xs text-[${COLORS.charcoal}]/60 uppercase tracking-widest`}>— From the Revenue Architecture Playbook</p>
                </div>
                <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed`}>
                  They would have invested millions into factory tooling and manufacturing, launched the device, and <em>then</em> realized they had no way to process the specimens.
                </p>
              </section>

              {/* The Intervention */}
              <section className={`pt-16 border-t border-[${COLORS.camel}]/10`}>
                <h2 className={`text-4xl font-serif font-bold mb-8 text-[${COLORS.forest}] italic`}>The Intervention: Revenue Hunting Before Development</h2>
                <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed mb-12`}>
                  I came in during the concept phase—the perfect time to catch this. We built the financial business model together, asking the fundamental questions about lab processing, woman/doctor preferences, and insurance coverage.
                </p>
                
                <div className={`bg-[${COLORS.forest}]/5 p-10 rounded-[2.5rem] border border-[${COLORS.forest}]/20 mb-12`}>
                  <div className={`flex items-center gap-3 text-[${COLORS.forest}] font-bold uppercase tracking-widest mb-6`}>
                    <Zap className="w-5 h-5" /> The Breakthrough
                  </div>
                  <p className={`text-2xl text-[${COLORS.navy}] font-serif italic leading-relaxed mb-8`}>
                    "The device itself was the loss leader. The massive revenue opportunity was actually within the laboratory services."
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className={`p-6 rounded-2xl bg-[${COLORS.cream}] border border-[${COLORS.camel}]/10`}>
                      <div className={`text-[${COLORS.charcoal}]/60 text-xs uppercase tracking-widest mb-2`}>The Shiny Object</div>
                      <div className={`text-xl font-bold text-[${COLORS.navy}]`}>The Device</div>
                      <div className={`text-sm text-[${COLORS.charcoal}] mt-2`}>Gets attention, but low margin.</div>
                    </div>
                    <div className={`p-6 rounded-2xl bg-[${COLORS.forest}]/10 border border-[${COLORS.forest}]/20`}>
                      <div className={`text-[${COLORS.forest}] text-xs uppercase tracking-widest mb-2`}>The Cash Cow</div>
                      <div className={`text-xl font-bold text-[${COLORS.navy}]`}>Lab Services</div>
                      <div className={`text-sm text-[${COLORS.charcoal}] mt-2`}>Highest margin and explosive potential.</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* The Fix */}
              <section className={`pt-16 border-t border-[${COLORS.camel}]/10`}>
                <h2 className={`text-3xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>The Fix: Architecting the Foundation</h2>
                <div className="space-y-6 mb-12">
                  {[
                    { icon: Target, title: "Strategic Team Expansion", text: "Brought laboratory and regulatory experts onto the team in the concept phase, before development." },
                    { icon: Search, title: "Market Validation", text: "Conducted qualitative and quantitative research to confirm willingness to pay and lab preferences." },
                    { icon: Rocket, title: "Experience Mapping", text: "Mapped the entire customer experience using the LBGUPS model to ensure billing and ops were architected correctly." }
                  ].map((item, i) => (
                    <div key={i} className={`flex gap-6 p-6 rounded-2xl bg-[${COLORS.cream}] border border-[${COLORS.camel}]/10`}>
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

              {/* The Result */}
              <section className={`pt-16 border-t border-[${COLORS.camel}]/10`}>
                <h2 className={`text-4xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>The Result</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className={`bg-[${COLORS.forest}]/5 p-8 rounded-3xl border border-[${COLORS.forest}]/20`}>
                    <div className={`text-4xl font-bold text-[${COLORS.forest}] mb-2`}>10x</div>
                    <p className={`text-[${COLORS.charcoal}]`}>Revenue potential compared to the device-only model.</p>
                  </div>
                  <div className={`bg-[${COLORS.forest}]/5 p-8 rounded-3xl border border-[${COLORS.forest}]/20`}>
                    <div className={`text-4xl font-bold text-[${COLORS.forest}] mb-2`}>Zero</div>
                    <p className={`text-[${COLORS.charcoal}]`}>Wasted manufacturing capital or rework cycles.</p>
                  </div>
                </div>
                <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed`}>
                  By flipping the financial model and hunting for revenue opportunities in the concept phase, we avoided a million-dollar disaster and built durability into the foundation.
                </p>
              </section>

              {/* The Lesson */}
              <section className={`pt-16 border-t border-[${COLORS.camel}]/10`}>
                <h2 className={`text-3xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>The Lesson</h2>
                <p className={`text-2xl text-[${COLORS.navy}] font-serif italic mb-8`}>
                  "The shiny object is rarely where the money is."
                </p>
                <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed mb-8`}>
                  Most founders focus on the innovation—the patented device, the breakthrough feature. The Top 5% hunt for revenue before they build. They cross-reference product, pricing, tech stack, and customer experience.
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
              title: "Project X: Scaling Without Breaking",
              industry: "Venture-Backed SaaS",
              metric: "Zero Rework Cycles",
              icon: Rocket,
              path: "/case-study-startup-x",
              accent: COLORS.navy
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
        quote="Elissa's ability to see the service design gaps before they become expensive failures is what makes her framework so valuable. She saved us from a million-dollar mistake."
        attribution="COO, MedTech Startup"
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
