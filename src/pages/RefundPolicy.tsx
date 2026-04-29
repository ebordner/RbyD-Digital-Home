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

export default function RefundPolicy() {
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
              Refund & Cancellation Policy
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
                DIGITAL PRODUCTS ($27 MVP+R Deep Dive, $47 Bundle)
              </h2>
              <p className="mb-4">
                Due to the digital nature of these products, all sales are final. No refunds will be issued after purchase and delivery.
              </p>
              <p>
                If you experience technical issues accessing your purchase, contact{" "}
                <a href="mailto:hello@mvpplusr.com" className={`text-[${COLORS.camel}] font-bold hover:underline`}>
                  hello@mvpplusr.com
                </a>{" "}
                within 7 days of purchase.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-serif font-bold mb-4 text-[${COLORS.navy}] uppercase tracking-wide`}>
                REVENUE ARCHITECTURE DIAGNOSTIC ($222)
              </h2>
              <p className="mb-4">
                All sales are final once you submit your diagnostic form.
              </p>
              <p>
                If you have not yet submitted your form, you may request a refund within 7 days of purchase by contacting{" "}
                <a href="mailto:hello@mvpplusr.com" className={`text-[${COLORS.camel}] font-bold hover:underline`}>
                  hello@mvpplusr.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-serif font-bold mb-4 text-[${COLORS.navy}] uppercase tracking-wide`}>
                REVENUE ARCHITECTURE AUDIT ($5,000)
              </h2>
              <p className="mb-6">
                Payment is due upon booking your first session.
              </p>
              <div className="space-y-4">
                <h3 className="font-bold text-[${COLORS.navy}]">Cancellations:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>More than 7 days before first session: Full refund minus $500 administrative fee</li>
                  <li>Less than 7 days before first session: No refund</li>
                  <li>After first session begins: No refund</li>
                </ul>
                <p className="italic">Rescheduling is allowed with 48 hours notice.</p>
              </div>
            </section>

            <section>
              <h2 className={`text-2xl font-serif font-bold mb-4 text-[${COLORS.navy}] uppercase tracking-wide`}>
                REVENUE ARCHITECTURE INTENSIVE ($35,000)
              </h2>
              <p>
                Payment terms and cancellation policy are outlined in your engagement agreement.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-serif font-bold mb-4 text-[${COLORS.navy}] uppercase tracking-wide`}>
                CONTACT
              </h2>
              <p>
                For refund requests or questions, contact:{" "}
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
