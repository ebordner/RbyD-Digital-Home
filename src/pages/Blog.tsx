import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Navbar, Footer, Section } from "../components/Common";

const COLORS = {
  cream: "#FDFCF0",
  bone: "#F2F0E4",
  camel: "#C5A059",
  navy: "#1B263B",
  charcoal: "#333333",
  gold: "#D4AF37",
};

const posts = [
  {
    slug: "#",
    date: "Coming Soon",
    category: "Revenue Architecture",
    title: "Why Your MVP Is Missing the R",
    excerpt:
      "Most founders treat revenue as something that happens after product-market fit. The top 5% know it has to be architected before you scale. Here's the difference.",
  },
  {
    slug: "#",
    date: "Coming Soon",
    category: "Pricing Strategy",
    title: "The Margin Trap: When Growth Makes You Poorer",
    excerpt:
      "Growing revenue while margins compress is one of the most common structural failures I see. It looks like success right up until it doesn't.",
  },
  {
    slug: "#",
    date: "Coming Soon",
    category: "Founder Frameworks",
    title: "The 10 Failure Points I Saw in 20 Years of Fortune 500 Product",
    excerpt:
      "I didn't invent the MVP+R™ framework out of theory. I built it by watching the same 10 structural failures repeat across products worth billions of dollars.",
  },
  {
    slug: "#",
    date: "Coming Soon",
    category: "Investor Readiness",
    title: "What VCs Are Actually Asking When They Question Your Unit Economics",
    excerpt:
      "When an investor pushes back on your margin assumptions, they're not asking about math. They're asking whether your revenue architecture will hold under scale.",
  },
];

export default function Blog() {
  return (
    <div className={`min-h-screen font-sans bg-[${COLORS.cream}]`}>
      <Navbar />

      <header className={`pt-48 pb-24 border-b border-[${COLORS.camel}]/10 text-center`}>
        <Section>
          <span className={`inline-block px-4 py-1.5 rounded-full bg-[${COLORS.camel}]/10 text-[${COLORS.camel}] text-[13px] font-bold tracking-[0.3em] uppercase mb-6 border border-[${COLORS.camel}]/20`}>
            Insights
          </span>
          <h1 className={`text-5xl md:text-7xl font-serif font-bold tracking-tight text-[${COLORS.navy}] mb-6`}>
            The Architecture Blog
          </h1>
          <p className={`text-xl text-[${COLORS.charcoal}]/70 max-w-2xl mx-auto`}>
            Revenue strategy, pricing architecture, and founder frameworks — from 20 years of building what actually scales.
          </p>
        </Section>
      </header>

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <article
              key={i}
              className={`bg-[${COLORS.bone}] rounded-2xl p-10 border border-[${COLORS.camel}]/20 hover:border-[${COLORS.camel}]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className={`text-[11px] font-bold uppercase tracking-[0.3em] text-[${COLORS.camel}]`}>
                    {post.category}
                  </span>
                  <span className={`text-[11px] text-[${COLORS.charcoal}]/40 font-bold uppercase tracking-widest`}>
                    {post.date}
                  </span>
                </div>
                <h2 className={`text-2xl font-serif font-bold text-[${COLORS.navy}] mb-4 leading-snug`}>
                  {post.title}
                </h2>
                <p className={`text-[${COLORS.charcoal}]/70 leading-relaxed`}>
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to={post.slug}
                  className={`inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.2em] text-[${COLORS.navy}] group-hover:text-[${COLORS.camel}] transition-colors`}
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={`mt-24 text-center py-16 border border-dashed border-[${COLORS.camel}]/30 rounded-2xl`}>
          <p className={`text-[13px] font-bold uppercase tracking-[0.3em] text-[${COLORS.camel}] mb-3`}>More on the way</p>
          <p className={`text-[${COLORS.charcoal}]/60 max-w-md mx-auto`}>
            New articles publish regularly. Check back soon or reach out to work together directly.
          </p>
          <Link to="/diagnostic" className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[13px] bg-[#1B263B] text-[#FDFCF0] hover:bg-black transition-colors">
            Get Your Diagnostic <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
