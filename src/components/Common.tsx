import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Layers, Zap, Target, Search } from "lucide-react";

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

export const Section = ({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

export const Button = ({ children, variant = "primary", className = "", onClick, type = "button" }: { children: ReactNode; variant?: "primary" | "secondary" | "outline"; className?: string; onClick?: () => void; type?: "button" | "submit" | "reset" }) => {
  const baseStyles = "inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 active:scale-95 uppercase tracking-widest text-[13px]";
  const variants = {
    primary: `bg-[${COLORS.navy}] text-[${COLORS.cream}] hover:bg-[${COLORS.black}] shadow-xl shadow-[${COLORS.navy}]/10`,
    secondary: `bg-[${COLORS.camel}] text-[${COLORS.black}] hover:bg-[${COLORS.gold}]`,
    outline: `border-2 border-[${COLORS.navy}] text-[${COLORS.navy}] hover:bg-[${COLORS.navy}] hover:text-[${COLORS.cream}]`
  };
  
  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export const Navbar = () => (
  <nav className={`fixed top-0 w-full z-50 bg-[${COLORS.cream}]/80 backdrop-blur-md border-b border-[${COLORS.camel}]/20 px-6 py-4 flex justify-between items-center`}>
    <Link to="/" className={`text-xl font-bold tracking-tighter flex items-center gap-2 text-[${COLORS.black}]`}>
      <div className={`w-8 h-8 bg-[${COLORS.navy}] rounded flex items-center justify-center`}>
        <Layers className={`w-5 h-5 text-[${COLORS.camel}]`} />
      </div>
      <span className="font-serif italic">Revenue by Design | Profit is a Design Decision</span>
    </Link>
    <div className={`hidden md:flex gap-8 text-[13px] font-bold uppercase tracking-[0.2em] text-[${COLORS.charcoal}]`}>
      <Link to="/" className={`hover:text-[${COLORS.camel}] transition-colors`}>Home</Link>
      <Link to="/about" className={`hover:text-[${COLORS.camel}] transition-colors`}>About Elissa</Link>
      <Link to="/mvp-r" className={`hover:text-[${COLORS.camel}] transition-colors`}>MVP+R™</Link>
      <Link to="/case-studies" className={`hover:text-[${COLORS.camel}] transition-colors`}>Case Studies</Link>
      <Link to="/audit" className={`hover:text-[${COLORS.camel}] transition-colors`}>Audit</Link>
      <Link to="/diagnostic" className={`hover:text-[${COLORS.camel}] transition-colors`}>Diagnostic</Link>
      <Link to="/blog" className={`hover:text-[${COLORS.camel}] transition-colors`}>Blog</Link>
    </div>
    <Button variant="outline" className="py-2 px-6">Contact</Button>
  </nav>
);

export const Footer = () => (
  <footer className={`bg-[${COLORS.navy}] py-24 border-t border-[${COLORS.camel}]/30 text-[${COLORS.cream}]`}>
    <Section className="text-center">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            <div className={`w-6 h-6 bg-[${COLORS.camel}] rounded flex items-center justify-center`}>
              <Layers className={`w-4 h-4 text-[${COLORS.navy}]`} />
            </div>
            <span className="font-serif italic text-2xl">Revenue By Design</span>
          </div>
          <div className={`text-[${COLORS.cream}]/70 text-sm font-medium`}>
            A service of Autostream Marketing LLC
          </div>
          <div className={`text-[${COLORS.cream}]/50 text-xs tracking-wide`}>
            107 Technology Parkway, Suite 680, Peachtree Corners, Ga 30092
          </div>
        </div>

        <div className={`flex flex-wrap justify-center gap-4 md:gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[${COLORS.camel}]`}>
          <Link to="/terms" className={`hover:text-[${COLORS.gold}] transition-colors`}>Terms & Conditions</Link>
          <span className="opacity-30">|</span>
          <Link to="/privacy" className={`hover:text-[${COLORS.gold}] transition-colors`}>Privacy Policy</Link>
          <span className="opacity-30">|</span>
          <Link to="/refund" className={`hover:text-[${COLORS.gold}] transition-colors`}>Refund Policy</Link>
        </div>

        <div className={`pt-8 border-t border-[${COLORS.cream}]/10 w-full flex flex-col md:flex-row justify-between items-center gap-6`}>
          <div className={`text-[${COLORS.cream}]/40 text-[10px] font-bold uppercase tracking-widest`}>
            © 2026 Autostream Marketing LLC. All rights reserved.
          </div>
          <div className={`flex gap-6 text-[${COLORS.camel}]`}>
            <a href="#" className={`hover:text-[${COLORS.gold}] transition-colors`}><Zap className="w-5 h-5" /></a>
            <a href="#" className={`hover:text-[${COLORS.gold}] transition-colors`}><Target className="w-5 h-5" /></a>
            <a href="#" className={`hover:text-[${COLORS.gold}] transition-colors`}><Search className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </Section>
  </footer>
);
