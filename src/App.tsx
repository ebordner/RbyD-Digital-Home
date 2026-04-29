import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home7 from "./pages/Home7";
import About from "./pages/About";
import MVPR from "./pages/MVPR";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyWiFi from "./pages/CaseStudyWiFi";
import CaseStudyPapSmear from "./pages/CaseStudyPapSmear";
import CaseStudyStartupX from "./pages/CaseStudyStartupX";
import Audit from "./pages/Audit";
import Diagnostic from "./pages/Diagnostic";
import Intensive from "./pages/Intensive";
import IntensiveApplication from "./pages/IntensiveApplication";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsConditions from "./pages/TermsConditions";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home7 />} />
        <Route path="/about" element={<About />} />
        <Route path="/mvp-r" element={<MVPR />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-study-wifi" element={<CaseStudyWiFi />} />
        <Route path="/case-study-pap-smear" element={<CaseStudyPapSmear />} />
        <Route path="/case-study-startup-x" element={<CaseStudyStartupX />} />
        <Route path="/audit" element={<Audit />} />
        <Route path="/diagnostic" element={<Diagnostic />} />
        <Route path="/revenue-architecture-intensive" element={<Intensive />} />
        <Route path="/revenue-architecture-intensive/apply" element={<IntensiveApplication />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
      </Routes>
    </Router>
  );
}
