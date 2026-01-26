import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Award, CheckCircle2, Rocket, Network, ShieldAlert, Flame, Fingerprint, MessageSquare, Cloud, Lightbulb, HeartHandshake, UserCheck, Briefcase, Search, MapPin, PenTool, Settings, TestTube, Wrench, Handshake } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState, useRef } from "react";
import worldMapVideo from "@assets/Untitled_design_1769405654510.mp4";
import networkingVideo from "@assets/From_KlickPin_CF_Pin_su_zenziads_1769407670142.mp4";
import networkImg from "@assets/stock_images/technology_networkin_80809026.jpg";
import teamImg from "@assets/stock_images/professional_team_wo_80221bd7.jpg";
import datacenterImg from "@assets/stock_images/data_center_server_r_ac3b04d4.jpg";

function Counter({ value, duration = 2 }: { value: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, '');
  const nodeRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = target;
    const totalMiliseconds = duration * 1000;
    const increment = end / (totalMiliseconds / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

export default function About() {
  const stats = [
    { label: "Years Experience", value: "10+", icon: Award },
    { label: "Projects Delivered", value: "500+", icon: Rocket },
    { label: "Technology Partners", value: "20+", icon: Network },
    { label: "Client Relationships", value: "100%", icon: HeartHandshake },
  ];

  const industries = [
    { title: "Corporate Offices", icon: Briefcase, image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
    { title: "Manufacturing & Warehousing", icon: Network, image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
    { title: "Retail & Commercial Spaces", icon: Rocket, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" },
    { title: "Education Institutions", icon: Lightbulb, image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800" },
    { title: "Healthcare Facilities", icon: HeartHandshake, image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" },
    { title: "Residential & Gated Communities", icon: UserCheck, image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="min-h-screen bg-[#050a15] text-white overflow-x-hidden">
      <Navbar />

      {/* 1. About Header */}
      <section className="relative pt-52 pb-32 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#050a15]/50 z-10" />
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
            src={worldMapVideo}
          />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-20 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-4xl md:text-7xl font-bold uppercase mb-6 text-white tracking-tighter">
              About <span className="text-white">VIP Networks</span>
            </h1>
            <p className="text-white text-lg md:text-2xl max-w-3xl mx-auto font-medium drop-shadow-lg opacity-90">
              Empowering enterprises with cutting-edge infrastructure and security solutions designed for the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Company Overview */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-none">
                    Driving Innovation in <span className="text-[#3b82f6]">Infrastructure</span>
                  </h2>
                  <div className="w-20 h-1 bg-[#3b82f6] rounded-full" />
                </div>

                <div className="space-y-6">
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light italic border-l-4 border-[#3b82f6]/30 pl-6">
                    VIP Networks is a technology-driven IT and infrastructure solutions company delivering reliable, secure, and scalable systems for businesses across industries.
                  </p>
                  <p className="text-lg text-white/70 leading-relaxed">
                    We specialize in networking, surveillance, security, automation, and digital transformation solutions designed to improve operational efficiency and safety. With a focus on innovation and performance, we help organizations build future-ready technology environments that support growth and continuity.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="bg-[#0d1526] border border-white/5 rounded-2xl px-6 py-4 flex items-center gap-3 shadow-xl">
                    <CheckCircle2 className="w-5 h-5 text-[#3b82f6]" />
                    <span className="text-sm font-bold uppercase tracking-widest text-white/80">Reliable Systems</span>
                  </div>
                  <div className="bg-[#0d1526] border border-white/5 rounded-2xl px-6 py-4 flex items-center gap-3 shadow-xl">
                    <CheckCircle2 className="w-5 h-5 text-[#3b82f6]" />
                    <span className="text-sm font-bold uppercase tracking-widest text-white/80">Scalable Solutions</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover="hover"
                className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer max-w-sm mx-auto"
              >
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full aspect-[4/5] object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  src={networkingVideo}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a15] via-transparent to-transparent opacity-40" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why We Are Different (Roadmap Layout) */}
      <section className="py-24 bg-gradient-to-b from-[#050a15] to-[#0d1526] relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight font-poppins">Why We Are <span className="text-[#3b82f6]">Different</span></h2>
          </div>
          
          {/* Mobile Layout */}
          <div className="md:hidden relative py-8 px-4">
            {/* Mobile Vertical Roadmap Line (Left Aligned) */}
            <div className="absolute left-8 top-0 h-full w-1 bg-white/5 overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3b82f6] to-transparent"
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="flex flex-col gap-12">
              {[
                { text: "Client-focused solution design", step: "01" },
                { text: "Enterprise-grade technologies", step: "02" },
                { text: "Skilled and certified professionals", step: "03" },
                { text: "Strong after-sales and AMC support", step: "04" },
                { text: "Commitment to reliability and performance", step: "05" }
              ].map((point, idx) => (
                <div key={idx} className="relative flex flex-row items-center">
                  {/* Step Indicator */}
                  <div className="relative z-30 flex items-center justify-center shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#050a15] border-2 border-[#3b82f6] flex flex-col items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                      <span className="text-[8px] font-black text-[#3b82f6] leading-none">STEP</span>
                      <span className="text-xs font-bold text-white leading-none">{point.step}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative z-20 ml-6 max-w-[280px] bg-[#0d1526]/80 backdrop-blur-sm p-5 rounded-2xl border border-white/5 shadow-xl hover:border-[#3b82f6]/40 transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center shrink-0 border border-[#3b82f6]/20">
                        <CheckCircle2 className="w-5 h-5 text-[#3b82f6]" />
                      </div>
                      <h3 className="text-sm font-bold leading-tight group-hover:text-[#3b82f6] transition-colors">{point.text}</h3>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block relative py-20 px-4">
            {/* Desktop Horizontal Roadmap Line - positioned at center */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="grid grid-cols-5 gap-4 relative">
              {[
                { text: "Client-focused solution design", step: "01" },
                { text: "Enterprise-grade technologies", step: "02" },
                { text: "Skilled and certified professionals", step: "03" },
                { text: "Strong after-sales and AMC support", step: "04" },
                { text: "Commitment to reliability and performance", step: "05" }
              ].map((point, idx) => {
                const isTop = idx % 2 === 0;
                return (
                  <div key={idx} className="relative flex flex-col items-center h-[320px]">
                    {/* Top Card Area */}
                    <div className={`flex-1 flex items-end justify-center pb-4 ${isTop ? '' : 'invisible'}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="relative z-20 w-full max-w-[200px] bg-[#0d1526]/80 backdrop-blur-sm p-4 rounded-2xl border border-white/5 shadow-xl hover:border-[#3b82f6]/40 transition-all group"
                      >
                        <div className="flex items-start gap-2">
                          <div className="w-7 h-7 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center shrink-0 border border-[#3b82f6]/20">
                            <CheckCircle2 className="w-4 h-4 text-[#3b82f6]" />
                          </div>
                          <h3 className="text-xs font-bold leading-tight group-hover:text-[#3b82f6] transition-colors uppercase">{point.text}</h3>
                        </div>
                      </motion.div>
                    </div>

                    {/* Connector Line Top */}
                    {isTop && (
                      <div className="w-0.5 h-6 bg-gradient-to-b from-[#3b82f6]/50 to-[#3b82f6]" />
                    )}

                    {/* Step Indicator - at center line */}
                    <div className="relative z-30 flex items-center justify-center shrink-0">
                      <div className="w-14 h-14 rounded-full bg-[#050a15] border-2 border-[#3b82f6] flex flex-col items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                        <span className="text-[8px] font-black text-[#3b82f6] leading-none">STEP</span>
                        <span className="text-sm font-bold text-white leading-none">{point.step}</span>
                      </div>
                    </div>

                    {/* Connector Line Bottom */}
                    {!isTop && (
                      <div className="w-0.5 h-6 bg-gradient-to-t from-[#3b82f6]/50 to-[#3b82f6]" />
                    )}

                    {/* Bottom Card Area */}
                    <div className={`flex-1 flex items-start justify-center pt-4 ${!isTop ? '' : 'invisible'}`}>
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="relative z-20 w-full max-w-[200px] bg-[#0d1526]/80 backdrop-blur-sm p-4 rounded-2xl border border-white/5 shadow-xl hover:border-[#3b82f6]/40 transition-all group"
                      >
                        <div className="flex items-start gap-2">
                          <div className="w-7 h-7 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center shrink-0 border border-[#3b82f6]/20">
                            <CheckCircle2 className="w-4 h-4 text-[#3b82f6]" />
                          </div>
                          <h3 className="text-xs font-bold leading-tight group-hover:text-[#3b82f6] transition-colors uppercase">{point.text}</h3>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="py-24 bg-[#050a15] relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover="hover"
              className="relative pt-12 cursor-default"
            >
              <motion.div 
                variants={{
                  hover: { scale: 1.08, translateY: 8 }
                }}
                className="absolute inset-0 top-20 bg-[#f59e0b] rounded-[2rem] transform scale-[1.05] translate-y-4 shadow-2xl transition-all duration-300" 
              />
              <motion.div 
                variants={{
                  hover: { translateY: 4 }
                }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#d97706] px-8 py-2 rounded-t-xl text-white font-bold text-xl z-20 shadow-lg"
              >
                01
              </motion.div>
              
              <motion.div 
                variants={{
                  hover: { translateY: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }
                }}
                className="relative bg-white rounded-3xl p-12 text-center shadow-xl z-10 min-h-[350px] flex flex-col items-center justify-center border border-white/20 transition-all duration-300"
              >
                <motion.div 
                  variants={{
                    hover: { scale: 1.1, rotate: [0, -5, 5, 0] }
                  }}
                  className="w-16 h-16 mb-6 flex items-center justify-center"
                >
                  <Target className="w-12 h-12 text-[#1f2937]" strokeWidth={2} />
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-widest text-[#1f2937] font-poppins">Mission</h2>
                <p className="text-[#4b5563] text-sm md:text-base leading-relaxed font-semibold">
                  To deliver dependable, innovative, and secure technology solutions that empower businesses to operate efficiently and confidently.
                </p>
              </motion.div>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover="hover"
              className="relative pt-12 cursor-default"
            >
              <motion.div 
                variants={{
                  hover: { scale: 1.08, translateY: 8 }
                }}
                className="absolute inset-0 top-20 bg-[#3b82f6] rounded-[2rem] transform scale-[1.05] translate-y-4 shadow-2xl transition-all duration-300" 
              />
              <motion.div 
                variants={{
                  hover: { translateY: 4 }
                }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#2563eb] px-8 py-2 rounded-t-xl text-white font-bold text-xl z-20 shadow-lg"
              >
                02
              </motion.div>
              
              <motion.div 
                variants={{
                  hover: { translateY: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }
                }}
                className="relative bg-white rounded-3xl p-12 text-center shadow-xl z-10 min-h-[350px] flex flex-col items-center justify-center border border-white/20 transition-all duration-300"
              >
                <motion.div 
                  variants={{
                    hover: { scale: 1.1, rotate: [0, 5, -5, 0] }
                  }}
                  className="w-16 h-16 mb-6 flex items-center justify-center"
                >
                  <Lightbulb className="w-12 h-12 text-[#1f2937]" strokeWidth={2} />
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-widest text-[#1f2937] font-poppins">Vision</h2>
                <p className="text-[#4b5563] text-sm md:text-base leading-relaxed font-semibold">
                  To be a trusted technology partner recognized for quality, innovation, and long-term customer relationships.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Trust & Credibility (Stats) */}
      <section className="py-24 bg-[#0d1526]/50 border-y border-white/5">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-[#3b82f6]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#3b82f6]/20">
                  <stat.icon className="w-8 h-8 text-[#3b82f6]" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 font-poppins tracking-tighter">
                  <Counter value={stat.value} />
                </div>
                <div className="text-white/40 uppercase tracking-widest text-xs font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Approach Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#050a15] to-[#0d1526]">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/3 -left-20 w-80 h-80 bg-[#3b82f6]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-[#60a5fa]/10 rounded-full blur-[100px]" />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tight font-poppins">
                Our Work <span className="text-[#3b82f6]">Approach</span>
              </h2>
              <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
                Smart Planning. Seamless Execution. Reliable Support.
              </p>
              <p className="text-white/50 text-sm md:text-base max-w-3xl mx-auto mt-4">
                At VIP Networks, we follow a structured and transparent work approach to ensure every project is delivered with precision, performance, and long-term reliability.
              </p>
            </motion.div>
          </div>

          {/* Step-by-Step Approach Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Requirement Analysis & Consultation",
                description: "We begin by understanding your business needs, operational challenges, and technical requirements. Our experts assess objectives, environment, and scalability needs to recommend the most suitable solution.",
                icon: Search
              },
              {
                step: "02",
                title: "Site Survey & Technical Assessment",
                description: "Our technical team conducts a detailed site survey to evaluate infrastructure, layout, network readiness, and environmental factors. This ensures accurate planning and smooth implementation.",
                icon: MapPin
              },
              {
                step: "03",
                title: "Solution Design & Planning",
                description: "Based on the assessment, we design a customized solution architecture using enterprise-grade technologies. Every design focuses on performance, security, scalability, and future expansion.",
                icon: PenTool
              },
              {
                step: "04",
                title: "Deployment & Integration",
                description: "Our certified engineers execute the installation and integration process with minimal disruption to your operations. All systems are configured, tested, and optimized for seamless performance.",
                icon: Settings
              },
              {
                step: "05",
                title: "Testing, Validation & Handover",
                description: "We perform rigorous testing to ensure system stability, security, and compliance with industry standards. Complete documentation and system walkthroughs are provided during handover.",
                icon: TestTube
              },
              {
                step: "06",
                title: "Support, Maintenance & AMC",
                description: "Post-deployment, we offer reliable technical support, proactive maintenance, and AMC services to ensure long-term system efficiency and uninterrupted operations.",
                icon: Wrench
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative bg-[#0d1526]/80 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-[#3b82f6]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#3b82f6] rounded-xl flex items-center justify-center shadow-lg shadow-[#3b82f6]/30">
                  <span className="text-white font-bold text-sm">{item.step}</span>
                </div>

                {/* Icon */}
                <div className="mb-4 mt-2">
                  <div className="w-14 h-14 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center group-hover:bg-[#3b82f6]/20 transition-colors">
                    <item.icon className="w-7 h-7 text-[#3b82f6]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[#3b82f6] transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Our Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="relative bg-gradient-to-r from-[#3b82f6]/10 to-[#60a5fa]/10 rounded-2xl border border-[#3b82f6]/30 p-8 text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-[#050a15] rounded-full border-2 border-[#3b82f6] flex items-center justify-center shadow-lg shadow-[#3b82f6]/30">
                  <Handshake className="w-8 h-8 text-[#3b82f6]" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-4 uppercase tracking-tight">
                Our <span className="text-[#3b82f6]">Commitment</span>
              </h3>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                We believe in building long-term partnerships by delivering quality solutions, responsive support, and consistent performance. Every project is handled with accountability, professionalism, and attention to detail.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Industries We Serve */}
      <section className="py-24 relative overflow-hidden bg-[#050a15]">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-[120px]" />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight font-poppins">Industries We <span className="text-[#3b82f6]">Serve</span></h2>
          </div>

          {/* Zigzag Hexagonal Layout Container (Desktop) */}
          <div className="hidden md:flex flex-col items-center max-w-7xl mx-auto space-y-[-40px]">
            {/* First Row (3 cards) */}
            <div className="flex justify-center gap-12">
              {industries.slice(0, 3).map((industry, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative w-64 h-72 cursor-pointer"
                >
                  <div 
                    className="absolute inset-0 bg-[#0d1526]/80 backdrop-blur-md overflow-hidden transition-all duration-500 border border-white/10 group-hover:border-[#3b82f6]/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                    }}
                  >
                    <img 
                      src={industry.image} 
                      className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110 filter group-hover:blur-[2px]" 
                      alt={industry.title}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                      <div className="mb-4 p-3 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 group-hover:bg-[#3b82f6]/20 group-hover:scale-110 transition-all duration-300">
                        <industry.icon className="w-10 h-10 text-[#3b82f6] group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="text-lg font-bold uppercase tracking-tighter leading-tight group-hover:text-white transition-colors">
                        {industry.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second Row (Offset - 3 cards) */}
            <div className="flex justify-center gap-12 translate-x-[160px]">
              {industries.slice(3, 6).map((industry, idx) => (
                <motion.div
                  key={idx + 3}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx + 3) * 0.1 }}
                  className="group relative w-64 h-72 cursor-pointer"
                >
                  <div 
                    className="absolute inset-0 bg-[#0d1526]/80 backdrop-blur-md overflow-hidden transition-all duration-500 border border-white/10 group-hover:border-[#3b82f6]/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                    }}
                  >
                    <img 
                      src={industry.image} 
                      className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110 filter group-hover:blur-[2px]" 
                      alt={industry.title}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                      <div className="mb-4 p-3 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 group-hover:bg-[#3b82f6]/20 group-hover:scale-110 transition-all duration-300">
                        <industry.icon className="w-10 h-10 text-[#3b82f6] group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="text-lg font-bold uppercase tracking-tighter leading-tight group-hover:text-white transition-colors">
                        {industry.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Grid Layout Container (Mobile Only) */}
          <div className="grid grid-cols-2 md:hidden justify-center gap-4 max-w-6xl mx-auto">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                className="group relative flex justify-center"
              >
                {/* Hexagon Shape Container */}
                <div className="relative w-full aspect-[4/5] max-w-[180px] cursor-pointer">
                  {/* Hexagon Background with Image and Blur */}
                  <div 
                    className="absolute inset-0 bg-[#0d1526]/80 backdrop-blur-md overflow-hidden transition-all duration-500 border border-white/10 group-hover:border-[#3b82f6]/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                    }}
                  >
                    {/* Background Image with Blur */}
                    <img 
                      src={industry.image} 
                      className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110 filter group-hover:blur-[2px]" 
                      alt={industry.title}
                    />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center z-10">
                      <div className="mb-2 p-2 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 group-hover:bg-[#3b82f6]/20 group-hover:scale-110 transition-all duration-300">
                        <industry.icon className="w-6 h-6 text-[#3b82f6] group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="text-[10px] font-bold uppercase tracking-tighter leading-tight group-hover:text-white transition-colors">
                        {industry.title.split(' ').map((word, i) => (
                          <span key={i} className="block">{word}</span>
                        ))}
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Call to Action */}
      <section className="py-16 bg-[#3b82f6] relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
            <div className="text-left space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tighter leading-tight font-poppins">
                Ready to Collaborate with us?
              </h2>
              <p className="text-white/80 text-lg md:text-xl font-medium">
                Let VIP Networks design the right solution for your business.
              </p>
            </div>
            <div className="shrink-0">
              <Link href="/contact">
                <button className="px-10 py-4 bg-white text-[#3b82f6] hover:bg-black hover:text-white font-bold rounded-full shadow-xl transition-all uppercase tracking-widest text-base font-poppins cursor-pointer">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
