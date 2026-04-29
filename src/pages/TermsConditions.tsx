import { motion } from "motion/react";
import { Section, Navbar, Footer } from "../components/Common";

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

export default function TermsConditions() {
  return (
    <div className={`min-h-screen font-sans bg-[${COLORS.cream}] text-[${COLORS.navy}]`}>
      <Navbar />

      <header className="relative pt-48 pb-24 overflow-hidden border-b border-[#C5A059]/10">
        <Section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-4">
              Terms & Conditions
            </h1>
            <p className={`text-sm font-bold uppercase tracking-widest text-[${COLORS.camel}]`}>
              Last Updated: December 15, 2025
            </p>
          </motion.div>
        </Section>
      </header>

      <Section className="py-24">
        <div className="max-w-3xl mx-auto">
          <div className={`space-y-12 text-lg text-[${COLORS.charcoal}] leading-relaxed`}>
            
            <section>
              <h2 className={`text-2xl font-serif font-bold mb-4 text-[${COLORS.navy}] uppercase tracking-wide`}>
                1. ACCEPTANCE OF TERMS
              </h2>
              <p>
                By purchasing any product or service from Revenue By Design, you agree to these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-serif font-bold mb-4 text-[${COLORS.navy}] uppercase tracking-wide`}>
                2. PRODUCTS & SERVICES
              </h2>
              <p>
                Revenue By Design offers digital products, diagnostic services, and consulting services as described on our website. All purchases are final unless otherwise stated in our Refund Policy.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-serif font-bold mb-4 text-[${COLORS.navy}] uppercase tracking-wide`}>
                3. PAYMENT
              </h2>
              <p>
                Payment is processed securely through Stripe. By providing payment information, you authorize Revenue By Design, a service of Autostream Marketing LLC, to charge the stated amount.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-serif font-bold mb-4 text-[${COLORS.navy}] uppercase tracking-wide`}>
                4. INTELLECTUAL PROPERTY
              </h2>
              <p>
                All content, frameworks, and materials provided by Revenue By Design, a service of Autostream Marketing LLC, are proprietary and protected by copyright. You may not reproduce, distribute, or resell any materials without written permission.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-serif font-bold mb-4 text-[${COLORS.navy}] uppercase tracking-wide`}>
                5. LIMITATION OF LIABILITY
              </h2>
              <p>
                Revenue By Design, a service of Autostream Marketing LLC, provides strategic advisory services. Results may vary. We are not liable for business outcomes, financial losses, or decisions made based on our advice.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-serif font-bold mb-4 text-[${COLORS.navy}] uppercase tracking-wide`}>
                6. GOVERNING LAW
              </h2>
              <p>
                These terms are governed by the laws of Gwinnett County, Georgia, USA.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-serif font-bold mb-4 text-[${COLORS.navy}] uppercase tracking-wide`}>
                7. CONTACT
              </h2>
              <p>
                For questions about these terms, contact:{" "}
                <a href="mailto:hello@mvpplusr.com" className={`text-[${COLORS.camel}] font-bold hover:underline`}>
                  hello@mvpplusr.com
                </a>
              </p>
            </section>

          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
