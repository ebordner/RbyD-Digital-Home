import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Wifi, 
  Stethoscope, 
  Rocket,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
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

const caseStudies = [
  {
    id: "wifi",
    title: "The $100M In-Home WiFi Launch",
    industry: "Telecom Giant, Fortune 500",
    hook: "How flipping the financials turned a $130 device sale into a $600 lifetime value subscription.",
    metric: "100M Year One Revenue",
    icon: Wifi,
    path: "/case-study-wifi",
    accent: COLORS.camel
  },
  {
    id: "pap-smear",
    title: "MedTech Diagnostic Revolution",
    industry: "MedTech Startup, Pre-Development",
    hook: "Architecting the service experience before building the hardware to ensure clinical adoption.",
    metric: "10x Revenue Potential Validated",
    icon: Stethoscope,
    path: "/case-study-pap-smear",
    accent: COLORS.forest
  },
  {
    id: "startup-x",
    title: "Project X: Scaling Without Breaking",
    industry: "Venture-Backed SaaS, Series A",
    hook: "Identifying the 5 structural collapse points that would have killed their scale-up phase.",
    metric: "Zero Rework Cycles in 12 Months",
    icon: Rocket,
    path: "/case-study-startup-x",
    accent: COLORS.navy
  }
];

export default function CaseStudies() {
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
              Case Studies
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-8 leading-[1.1]">
              MVP+R™ in Action: <br />
              <span className={`italic text-[${COLORS.camel}]`}>Real Results</span> from Real Companies
            </h1>
            <p className={`text-xl md:text-2xl text-[${COLORS.charcoal}] max-w-3xl mx-auto mb-12 leading-relaxed`}>
              See how the Top 5% validate revenue architecture before they scale. 
              These aren't just success stories—they're architectural blueprints.
            </p>
          </motion.div>
        </Section>
      </header>

      {/* Case Study Cards */}
      <Section className="py-24">
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`bg-[${COLORS.bone}] p-10 rounded-[2rem] flex flex-col border border-[${COLORS.camel}]/10 hover:border-[${COLORS.camel}]/30 transition-all duration-500 group`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-[${COLORS.cream}] flex items-center justify-center mb-8 border border-[${COLORS.camel}]/10 group-hover:border-[${COLORS.camel}]/30 transition-colors`}>
                <study.icon className={`w-7 h-7 text-[${study.accent}]`} />
              </div>
              
              <div className="flex-1">
                <span className={`text-xs font-bold text-[${COLORS.charcoal}]/60 uppercase tracking-widest mb-2 block`}>
                  {study.industry}
                </span>
                <h3 className={`text-2xl font-serif font-bold mb-4 text-[${COLORS.navy}] group-hover:text-[${COLORS.camel}] transition-colors`}>
                  {study.title}
                </h3>
                <p className={`text-[${COLORS.charcoal}] text-sm leading-relaxed mb-8`}>
                  {study.hook}
                </p>
              </div>

              <div className="mt-auto">
                <div className={`mb-8 p-4 rounded-xl bg-[${study.accent}]/5 border border-[${study.accent}]/10`}>
                  <div className={`text-xs text-[${study.accent}]/60 uppercase font-bold tracking-widest mb-1`}>Key Result</div>
                  <div className={`text-xl font-bold text-[${study.accent}]`}>{study.metric}</div>
                </div>
                
                <Link to={study.path}>
                  <Button variant="outline" className="w-full justify-between group/btn">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Testimonial 
        variant="callout"
        quote="The level of structural insight Elissa brings is rare. She doesn't just find the problems; she architects the solutions that make scale possible."
        attribution="CEO, Venture-Backed Startup"
      />

      {/* Bottom CTA Section */}
      <div className={`bg-[${COLORS.bone}] py-32 border-t border-[${COLORS.camel}]/10`}>
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

      <Section className="py-16 text-center border-t border-[${COLORS.camel}]/10">
        <p className={`text-[${COLORS.charcoal}] text-sm max-w-2xl mx-auto`}>
          Need a complete, ground-up rebuild of your revenue architecture? <Link to="/revenue-architecture-intensive" className={`text-[${COLORS.navy}] hover:text-[${COLORS.camel}] underline transition-colors`}>Learn more about the Revenue Architecture Intensive (invitation only)</Link>
        </p>
      </Section>

      <Footer />
    </div>
  );
}
