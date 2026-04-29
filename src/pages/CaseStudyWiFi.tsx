import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ChevronRight, 
  Wifi, 
  TrendingUp, 
  Target, 
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  Quote,
  Zap,
  Rocket,
  Stethoscope,
  Search
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

export default function CaseStudyWiFi() {
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
          <span className={`text-[${COLORS.camel}] font-medium`}>In-Home WiFi Launch</span>
        </nav>
      </div>

      {/* Hero Section */}
      <Section className="pt-0 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className={`inline-block px-3 py-1 rounded-full bg-[${COLORS.camel}]/10 text-[${COLORS.camel}] text-[11px] font-bold tracking-[0.2em] uppercase mb-6`}>
              Fortune 500 Case Study
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight text-[${COLORS.navy}]">
              The $100M <br />
              <span className={`italic text-[${COLORS.camel}]`}>In-Home WiFi</span> Launch
            </h1>
            <p className={`text-xl text-[${COLORS.charcoal}] leading-relaxed mb-8`}>
              How The Profitable Method™ + MVP+R™ turned 13 units into $100 million by architecting the revenue model before the product.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`bg-[${COLORS.gold}]/5 p-10 rounded-[2.5rem] border border-[${COLORS.gold}]/20 relative overflow-hidden`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-[${COLORS.gold}]/10 blur-3xl -z-10`} />
            <div className={`text-xs text-[${COLORS.gold}] font-bold uppercase tracking-widest mb-6 flex items-center gap-2`}>
              <TrendingUp className="w-4 h-4" /> Key Result Callout
            </div>
            <div className="space-y-6">
              <div>
                <div className={`text-5xl font-bold text-[${COLORS.navy}] mb-1`}>$100M</div>
                <div className={`text-sm text-[${COLORS.charcoal}]/60 font-medium uppercase tracking-wider`}>Year One Revenue</div>
              </div>
              <div className={`h-px bg-[${COLORS.gold}]/10 w-full`} />
              <div className="flex gap-12">
                <div>
                  <div className={`text-3xl font-bold text-[${COLORS.camel}]`}>4.6x</div>
                  <div className={`text-xs text-[${COLORS.charcoal}]/60 uppercase tracking-wider`}>LTV Increase</div>
                </div>
                <div>
                  <div className={`text-3xl font-bold text-[${COLORS.camel}]`}>1M+</div>
                  <div className={`text-xs text-[${COLORS.charcoal}]/60 uppercase tracking-wider`}>Subscribers</div>
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
                <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed mb-6`}>
                  One of the largest private telecommunications companies in the United States.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className={`bg-[${COLORS.cream}] p-8 rounded-2xl border border-[${COLORS.camel}]/10`}>
                    <h4 className={`text-[${COLORS.navy}] font-bold mb-2`}>The Product</h4>
                    <p className={`text-sm text-[${COLORS.charcoal}]`}>In-home WiFi solution designed to deliver "whole home coverage"—eliminating dead zones and ensuring strong WiFi signal throughout the entire house.</p>
                  </div>
                  <div className={`bg-[${COLORS.cream}] p-8 rounded-2xl border border-[${COLORS.camel}]/10`}>
                    <h4 className={`text-[${COLORS.navy}] font-bold mb-2`}>The Innovation</h4>
                    <p className={`text-sm text-[${COLORS.charcoal}]`}>Latest and greatest technology. Passed all QA testing. Ready to launch.</p>
                  </div>
                </div>
                
                <div className={`mt-12 p-8 rounded-3xl bg-[${COLORS.oxblood}]/[0.03] border-l-4 border-[${COLORS.oxblood}] flex gap-6 items-start`}>
                  <div className={`w-12 h-12 rounded-xl bg-[${COLORS.oxblood}]/10 flex items-center justify-center shrink-0`}>
                    <AlertTriangle className={`w-6 h-6 text-[${COLORS.oxblood}]`} />
                  </div>
                  <div>
                    <h4 className={`text-[${COLORS.oxblood}] font-bold mb-2 uppercase tracking-wider text-xs`}>What Was At Stake</h4>
                    <p className={`text-2xl font-serif font-bold text-[${COLORS.navy}] mb-2 italic`}>It launched. And it flopped.</p>
                    <p className={`text-[${COLORS.charcoal}]`}>13 units sold. Total. This is what almost went wrong.</p>
                  </div>
                </div>
              </section>

              {/* Why Traditional Failed */}
              <section>
                <h2 className={`text-3xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>Why Traditional Product Development Failed</h2>
                <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed mb-8`}>
                  Here's what the company had done right (according to traditional product development):
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                  {[
                    "Built a product with cutting-edge technology",
                    "Ensured it passed all technical QA testing",
                    "Validated the specs met industry standards",
                    "Had a go-to-market plan"
                  ].map((item, i) => (
                    <div key={i} className={`flex items-center gap-3 text-[${COLORS.charcoal}]`}>
                      <CheckCircle2 className={`w-5 h-5 text-[${COLORS.forest}] shrink-0`} />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed mb-8`}>
                  And it still failed. Why? Because validating the product feature set is not enough.
                </p>
                
                <div className={`bg-[${COLORS.cream}] p-10 rounded-[2rem] border border-[${COLORS.camel}]/10 relative`}>
                  <Quote className={`absolute top-8 right-8 w-12 h-12 text-[${COLORS.camel}]/10`} />
                  <p className={`text-2xl font-serif italic text-[${COLORS.navy}] leading-relaxed`}>
                    "This is what I call The MVP Trap—the belief that if you validate product/market fit, you've done enough. You haven't."
                  </p>
                </div>
              </section>

              {/* The Profitable Method */}
              <section>
                <h2 className={`text-3xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>The Profitable Method™: Engineering Out Failure</h2>
                <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed mb-8`}>
                  When I came onto this project, I didn't start by looking at the product specs or the technology. I started by looking at the 10 common failure points that kill products—even technically sound ones.
                </p>
                <div className={`p-6 rounded-2xl bg-[${COLORS.camel}]/5 border border-[${COLORS.camel}]/10 mb-8`}>
                  <p className={`text-[${COLORS.camel}] font-bold flex items-center gap-2`}>
                    <Zap className="w-5 h-5" />
                    This case study demonstrates the complete MVP+R™ framework in action. 
                    <Link to="/mvp-r" className="underline ml-1 hover:text-[${COLORS.navy}] transition-colors">Learn more about the framework →</Link>
                  </p>
                </div>
                <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed`}>
                  Had I relied solely on the product specs, we still would have failed. Why? Because those only validate the product feature set. They don't validate whether the revenue model is structurally sound or whether the service experience delivers on the brand promise.
                </p>
              </section>

              {/* Layer 1 */}
              <section className={`pt-16 border-t border-[${COLORS.camel}]/10`}>
                <span className={`text-[${COLORS.camel}] font-bold uppercase tracking-widest text-xs`}>Layer 01</span>
                <h2 className={`text-4xl font-serif font-bold mt-4 mb-8 text-[${COLORS.navy}]`}>Flipping the Financials</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className={`bg-[${COLORS.cream}] p-8 rounded-2xl border border-[${COLORS.camel}]/10`}>
                    <h4 className={`text-[${COLORS.charcoal}]/60 font-bold uppercase tracking-wider text-xs mb-4`}>The Original Model</h4>
                    <p className={`text-[${COLORS.navy}] font-bold text-xl mb-2`}>$130 One-Time Purchase</p>
                    <p className={`text-sm text-[${COLORS.charcoal}]`}>Simple. Clean. Industry standard. And it would have left hundreds of millions on the table.</p>
                  </div>
                  <div className={`bg-[${COLORS.camel}]/5 p-8 rounded-2xl border border-[${COLORS.camel}]/20`}>
                    <h4 className={`text-[${COLORS.camel}] font-bold uppercase tracking-wider text-xs mb-4`}>The MVP+R™ Model</h4>
                    <p className={`text-[${COLORS.navy}] font-bold text-xl mb-2`}>$10/Month Subscription</p>
                    <p className={`text-sm text-[${COLORS.charcoal}]`}>We shifted the value from a piece of plastic to a persistent outcome: whole home coverage.</p>
                  </div>
                </div>

                <div className={`space-y-6 text-lg text-[${COLORS.charcoal}] leading-relaxed`}>
                  <p>
                    The device wasn't the product. <span className={`text-[${COLORS.navy}] font-bold italic`}>Whole home coverage was the product.</span> And if whole home coverage was the product, then we weren't selling a device—we were selling a premium service.
                  </p>
                  <div className={`p-8 rounded-3xl bg-[${COLORS.cream}] border border-[${COLORS.camel}]/10`}>
                    <h4 className={`text-[${COLORS.navy}] font-bold mb-4`}>The Math:</h4>
                    <div className="flex flex-col sm:flex-row gap-8 items-center">
                      <div className="text-center sm:text-left">
                        <div className={`text-xs text-[${COLORS.charcoal}]/60 uppercase mb-1`}>One-time</div>
                        <div className={`text-3xl font-bold text-[${COLORS.charcoal}]`}>$130</div>
                      </div>
                      <div className={`text-[${COLORS.camel}] text-3xl font-bold`}>vs</div>
                      <div className="text-center sm:text-left">
                        <div className={`text-xs text-[${COLORS.charcoal}]/60 uppercase mb-1`}>5-Year LTV</div>
                        <div className={`text-3xl font-bold text-[${COLORS.camel}]`}>$600</div>
                      </div>
                    </div>
                    <p className="mt-6 text-sm italic">We didn't just improve the revenue model. We 4.6x'd it.</p>
                  </div>
                </div>
              </section>

              {/* Layer 2 */}
              <section className={`pt-16 border-t border-[${COLORS.camel}]/10`}>
                <span className={`text-[${COLORS.camel}] font-bold uppercase tracking-widest text-xs`}>Layer 02</span>
                <h2 className={`text-4xl font-serif font-bold mt-4 mb-8 text-[${COLORS.navy}]`}>Service Design Blueprints</h2>
                <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed mb-8`}>
                  The product promised "whole home coverage." But the product alone couldn't deliver that promise. Why? Because "whole home coverage" isn't just about the device. It's about the <span className={`text-[${COLORS.navy}] font-bold`}>LBGUPS model</span>.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                  {["Marketing", "Sales", "Operations", "Product", "Billing", "Support"].map((item, i) => (
                    <div key={i} className={`bg-[${COLORS.cream}] p-4 rounded-xl text-center border border-[${COLORS.camel}]/10`}>
                      <span className={`text-xs font-bold text-[${COLORS.charcoal}]/60 uppercase tracking-widest`}>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-8">
                  <p className={`text-lg text-[${COLORS.charcoal}]`}>We blueprinted the entire service experience, mapping every touchpoint:</p>
                  <div className="space-y-4">
                    {[
                      { label: "Operations (Get)", text: "Is installation white-glove? Do we test coverage in every room before we leave?" },
                      { label: "Sales (Buy)", text: "Are sales reps trained to sell the outcome instead of technical features?" },
                      { label: "Support (Support)", text: "Can support troubleshoot and resolve it immediately, or do they get transferred?" }
                    ].map((item, i) => (
                      <div key={i} className={`flex gap-4 p-6 rounded-2xl bg-[${COLORS.cream}] border border-[${COLORS.camel}]/10`}>
                        <div className={`w-1.5 h-1.5 rounded-full bg-[${COLORS.camel}] mt-2 shrink-0`} />
                        <div>
                          <span className={`text-[${COLORS.navy}] font-bold block mb-1`}>{item.label}</span>
                          <p className={`text-sm text-[${COLORS.charcoal}]`}>{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Layer 3 */}
              <section className={`pt-16 border-t border-[${COLORS.camel}]/10`}>
                <span className={`text-[${COLORS.camel}] font-bold uppercase tracking-widest text-xs`}>Layer 03</span>
                <h2 className={`text-4xl font-serif font-bold mt-4 mb-8 text-[${COLORS.navy}]`}>Design Sprints</h2>
                <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed mb-8`}>
                  I don't iterate after launch. I iterate before development. Design sprints collapse 5 years of learning into 5 days.
                </p>
                
                <div className={`bg-[${COLORS.cream}] p-8 rounded-3xl border border-[${COLORS.camel}]/10 mb-12`}>
                  <h4 className={`text-[${COLORS.navy}] font-bold mb-6 flex items-center gap-2`}>
                    <Search className={`w-5 h-5 text-[${COLORS.camel}]`} /> Real-World Discoveries:
                  </h4>
                  <ul className="space-y-4">
                    <li className={`flex gap-3 text-[${COLORS.charcoal}]`}>
                      <span className={`text-[${COLORS.oxblood}] font-bold`}>❌</span>
                      The device worked in the lab. It didn't work in homes with thick walls.
                    </li>
                    <li className={`flex gap-3 text-[${COLORS.charcoal}]`}>
                      <span className={`text-[${COLORS.oxblood}] font-bold`}>❌</span>
                      The setup process was too technical for non-technical customers.
                    </li>
                    <li className={`flex gap-3 text-[${COLORS.charcoal}]`}>
                      <span className={`text-[${COLORS.oxblood}] font-bold`}>❌</span>
                      The app interface assumed customers understood networking terminology.
                    </li>
                  </ul>
                </div>
              </section>

              {/* The Result */}
              <section className={`pt-16 border-t border-[${COLORS.camel}]/10`}>
                <h2 className={`text-4xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>The Result: $100 Million in Year One</h2>
                <div className={`bg-[${COLORS.gold}]/5 p-12 rounded-[2.5rem] border border-[${COLORS.gold}]/20 text-center`}>
                  <div className={`text-7xl font-serif font-bold text-[${COLORS.gold}] mb-4`}>$100M</div>
                  <p className={`text-2xl font-serif font-bold text-[${COLORS.navy}] mb-8`}>Revenue in Year One</p>
                  <div className="flex flex-wrap justify-center gap-8">
                    <div className={`flex items-center gap-2 text-[${COLORS.charcoal}]`}>
                      <CheckCircle2 className={`w-5 h-5 text-[${COLORS.forest}]`} /> 1M Subscribers
                    </div>
                    <div className={`flex items-center gap-2 text-[${COLORS.charcoal}]`}>
                      <CheckCircle2 className={`w-5 h-5 text-[${COLORS.forest}]`} /> 4.6x LTV Increase
                    </div>
                  </div>
                </div>
              </section>

              {/* The Lesson */}
              <section className={`pt-16 border-t border-[${COLORS.camel}]/10`}>
                <h2 className={`text-3xl font-serif font-bold mb-8 text-[${COLORS.navy}]`}>The Lesson: MVP Is Not Enough</h2>
                <p className={`text-lg text-[${COLORS.charcoal}] leading-relaxed mb-8`}>
                  If I had relied solely on product specs and QA testing, we still would have failed. MVP+R™ validates the entire business architecture. When you validate all of that in the market—not just product/market fit—you become part of the Top 5%.
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
              title: "MedTech Diagnostic Revolution",
              industry: "MedTech Startup",
              metric: "10x Revenue Potential",
              icon: Stethoscope,
              path: "/case-study-pap-smear",
              accent: COLORS.forest
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
        quote="Flipping the financials was the single most important decision we made. It changed the entire trajectory of the product and the company."
        attribution="VP of Product, Fortune 500 Telecom"
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
