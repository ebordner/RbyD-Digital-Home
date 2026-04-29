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

export default function PrivacyPolicy() {
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
              Privacy Policy
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
                1. INFORMATION WE COLLECT
              </h2>
              <p className="mb-4">We collect information you provide when purchasing products or services, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, payment information</li>
                <li>Information submitted in diagnostic forms or applications</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-serif font-bold mb-4 text-[${COLORS.navy}] uppercase tracking-wide`}>
                2. HOW WE USE YOUR INFORMATION
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To process transactions</li>
                <li>To deliver products and services</li>
                <li>To communicate with you about your purchase</li>
                <li>To improve our services</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-serif font-bold mb-4 text-[${COLORS.navy}] uppercase tracking-wide`}>
                3. INFORMATION SHARING
              </h2>
              <p className="mb-4">We do not sell your personal information. We share information only with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment processors (Stripe) to process transactions</li>
                <li>Email service providers to deliver purchased products</li>
                <li>As required by law</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-serif font-bold mb-4 text-[${COLORS.navy}] uppercase tracking-wide`}>
                4. DATA SECURITY
              </h2>
              <p>We use industry-standard security measures to protect your information.</p>
            </section>

            <section>
              <h2 className={`text-2xl font-serif font-bold mb-4 text-[${COLORS.navy}] uppercase tracking-wide`}>
                5. YOUR RIGHTS
              </h2>
              <p>
                You may request access to, correction of, or deletion of your personal information by contacting:{" "}
                <a href="mailto:hello@mvpplusr.com" className={`text-[${COLORS.camel}] font-bold hover:underline`}>
                  hello@mvpplusr.com
                </a>
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-serif font-bold mb-4 text-[${COLORS.navy}] uppercase tracking-wide`}>
                6. COOKIES
              </h2>
              <p>We use cookies to improve website functionality and user experience.</p>
            </section>

            <section>
              <h2 className={`text-2xl font-serif font-bold mb-4 text-[${COLORS.navy}] uppercase tracking-wide`}>
                7. CONTACT
              </h2>
              <p>
                For privacy questions, contact:{" "}
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
