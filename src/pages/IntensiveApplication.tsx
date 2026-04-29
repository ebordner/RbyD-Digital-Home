import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Send, 
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import { Section, Button, Navbar, Footer } from "../components/Common";

export default function IntensiveApplication() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    role: "",
    phone: "",
    growthStage: "",
    revenue: "",
    teamSize: "",
    auditCompleted: "",
    diagnosedBroken: "",
    readyToFix: "",
    timeline: "",
    executiveBuyIn: "",
    urgency: "",
    additionalContext: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send an email or save to a database
    console.log("Form submitted:", formData);
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen font-sans bg-zinc-950 text-zinc-100">
        <Navbar />
        <Section className="py-48 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto glass p-16 rounded-[3rem] border-emerald-500/20"
          >
            <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-emerald-500" />
            </div>
            <h1 className="text-4xl font-serif font-bold mb-6 text-white">Application Submitted</h1>
            <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
              Thank you for your application. We'll review it within 3-5 business days and reach out to schedule a discovery call if it's a fit.
            </p>
            <Link to="/">
              <Button variant="outline">Return to Homepage</Button>
            </Link>
          </motion.div>
        </Section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans bg-zinc-950 text-zinc-100">
      <Navbar />
      
      <Section className="pt-48 pb-32">
        <Link to="/revenue-architecture-intensive" className="inline-flex items-center gap-2 text-zinc-500 hover:text-emerald-500 transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Intensive Overview
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Apply for Revenue Architecture Intensive</h1>
          <p className="text-xl text-zinc-400 mb-12">
            Please complete the form below. This information helps me assess readiness and scope before our discovery call.
          </p>

          <form onSubmit={handleSubmit} className="space-y-12">
            {/* 1. Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-emerald-500 uppercase tracking-widest text-xs border-b border-white/5 pb-4">1. Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Full Name *</label>
                  <input 
                    required
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Email *</label>
                  <input 
                    required
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Company Name *</label>
                  <input 
                    required
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Role/Title *</label>
                  <input 
                    required
                    type="text" 
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    placeholder="Founder / CEO"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-zinc-300">Phone (optional)</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </div>

            {/* 2. Current State */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-emerald-500 uppercase tracking-widest text-xs border-b border-white/5 pb-4">2. Current State</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-zinc-300">Where are you in your growth journey? *</label>
                  <div className="relative">
                    <select 
                      required
                      name="growthStage"
                      value={formData.growthStage}
                      onChange={handleChange}
                      className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors appearance-none"
                    >
                      <option value="">Select a stage</option>
                      <option value="Pre-seed / Concept stage">Pre-seed / Concept stage</option>
                      <option value="Seed stage">Seed stage</option>
                      <option value="Series A">Series A</option>
                      <option value="Series B+">Series B+</option>
                      <option value="Bootstrapped / Profitable">Bootstrapped / Profitable</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Current revenue (if applicable)</label>
                  <input 
                    type="text" 
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    placeholder="e.g. $1M ARR"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Current team size</label>
                  <input 
                    type="text" 
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    placeholder="e.g. 15 people"
                  />
                </div>
              </div>
            </div>

            {/* 3. Diagnostic Work */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-emerald-500 uppercase tracking-widest text-xs border-b border-white/5 pb-4">3. Diagnostic Work</h3>
              <div className="space-y-4">
                <label className="text-sm font-medium text-zinc-300">Have you completed the Revenue Architecture Audit? *</label>
                <div className="flex flex-wrap gap-6">
                  {["Yes", "No", "Equivalent work with another advisor"].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer group">
                      <input 
                        required
                        type="radio" 
                        name="auditCompleted" 
                        value={option}
                        checked={formData.auditCompleted === option}
                        onChange={handleChange}
                        className="w-4 h-4 accent-emerald-500"
                      />
                      <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">What have you diagnosed as structurally broken? *</label>
                <textarea 
                  required
                  name="diagnosedBroken"
                  value={formData.diagnosedBroken}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                  placeholder="Describe the gaps you've identified in your pricing, tech stack, customer journey, etc."
                />
              </div>
            </div>

            {/* 4. Scope & Readiness */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-emerald-500 uppercase tracking-widest text-xs border-b border-white/5 pb-4">4. Scope & Readiness</h3>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">What are you ready to fix? *</label>
                <textarea 
                  required
                  name="readyToFix"
                  value={formData.readyToFix}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                  placeholder="What is the scope of work you're looking to tackle?"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">What's your timeline? *</label>
                  <input 
                    required
                    type="text" 
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    placeholder="When do you need this completed?"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-medium text-zinc-300">Do you have executive team buy-in? *</label>
                  <div className="flex gap-6">
                    {["Yes", "No", "Partially"].map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer group">
                        <input 
                          required
                          type="radio" 
                          name="executiveBuyIn" 
                          value={option}
                          checked={formData.executiveBuyIn === option}
                          onChange={handleChange}
                          className="w-4 h-4 accent-emerald-500"
                        />
                        <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Urgency */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-emerald-500 uppercase tracking-widest text-xs border-b border-white/5 pb-4">5. Urgency</h3>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Why now? What's driving the urgency?</label>
                <textarea 
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                  placeholder="Upcoming funding round, product launch, scaling pressure, board pressure, etc."
                />
              </div>
            </div>

            {/* 6. Additional Context */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-emerald-500 uppercase tracking-widest text-xs border-b border-white/5 pb-4">6. Additional Context</h3>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Is there anything else we should know?</label>
                <textarea 
                  name="additionalContext"
                  value={formData.additionalContext}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                  placeholder="Any other details that would be helpful for our discovery call."
                />
              </div>
            </div>

            <div className="pt-8">
              <Button type="submit" className="w-full md:w-auto px-12 py-4 text-lg justify-center group">
                Submit Application
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              <p className="mt-4 text-xs text-zinc-500 text-center md:text-left">
                I'll review your application and be in touch within 3-5 business days.
              </p>
            </div>
          </form>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
