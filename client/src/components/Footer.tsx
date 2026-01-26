import { Link } from "wouter";
import logo from "@assets/Untitled_design_1768974869981.png";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubscribe = () => {
    setError("");
    setSuccess(false);

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    
    setSuccess(true);
    setEmail("");
    setTimeout(() => setSuccess(false), 3000);
  };

  const socialLinks = [
    { Icon: FaFacebookF, color: "bg-[#1877F2]", hoverColor: "hover:bg-[#1154aa]", href: "#" },
    { Icon: FaWhatsapp, color: "bg-[#25D366]", hoverColor: "hover:bg-[#198f45]", href: "#" },
    { Icon: FaLinkedinIn, color: "bg-[#0A66C2]", hoverColor: "hover:bg-[#074787]", href: "#" },
    { Icon: FaInstagram, color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]", hoverColor: "hover:brightness-75", href: "#" },
    { Icon: FaTwitter, color: "bg-[#1DA1F2]", hoverColor: "hover:bg-[#1470a8]", href: "#" }
  ];

  return (
    <footer className="bg-[#050a15] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-16 items-start">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="VIP Networks" className="w-16 h-16 object-contain bg-white/5 rounded-full p-1" />
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight leading-none">VIP NETWORKS</h3>
                <p className="text-[#3b82f6] text-[11px] tracking-[0.2em] uppercase mt-1 font-bold">Technology Meets Reliability</p>
              </div>
            </div>
            <p className="text-white/50 text-base leading-relaxed max-w-xs">
              Leading provider of comprehensive IT infrastructure, security systems, and networking solutions for modern enterprises.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ Icon, color, hoverColor, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 shadow-lg shadow-black/20 ${color} ${hoverColor}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[15px]">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-white/80 hover:text-[#3b82f6] transition-colors cursor-pointer flex items-center text-[16px]">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[15px]">Our Services</h4>
            <ul className="space-y-3">
              {[
                "CCTV Surveillance",
                "Fire Detection",
                "Access Control",
                "Networking",
                "Public Address",
                "Audio Visual"
              ].map((service) => (
                <li key={service}>
                  <Link href="/services">
                    <span className="text-white/80 hover:text-[#3b82f6] transition-colors cursor-pointer text-[16px]">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[15px]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/80 text-[16px]">
                <MapPin className="w-5 h-5 text-[#3b82f6] shrink-0 mt-0.5" />
                <span>Jogeshwari East,<br />Mumbai - 400060</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 text-[16px]">
                <Phone className="w-5 h-5 text-[#3b82f6] shrink-0" />
                <a href="tel:+919326144739" className="hover:text-white transition-colors">+91 9326144739</a>
              </li>
              <li className="flex items-center gap-3 text-white/80 text-[16px]">
                <Mail className="w-5 h-5 text-[#3b82f6] shrink-0" />
                <a href="mailto:vip.itinfra@gmail.com" className="hover:text-white transition-colors">vip.itinfra@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Subscribe */}
          <div className="lg:col-span-2 lg:ml-auto">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[15px]">Subscribe</h4>
            <p className="text-white/50 text-[15px] mb-6 leading-relaxed">
              Stay updated with our latest technology solutions and industry insights.
            </p>
            <div className="space-y-2">
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  className={`w-full bg-white/5 border rounded-xl py-3 px-4 pr-12 text-sm text-white focus:outline-none transition-all ${error ? 'border-red-500' : 'border-white/10 focus:border-[#3b82f6]/50'}`}
                />
                <button 
                  onClick={handleSubscribe}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-[#3b82f6] text-white flex items-center justify-center hover:bg-[#2563eb] transition-colors shadow-lg shadow-[#3b82f6]/20"
                >
                  <Send size={14} />
                </button>
              </div>
              {error && <p className="text-red-500 text-xs mt-1 animate-in fade-in slide-in-from-top-1">{error}</p>}
              {success && <p className="text-green-500 text-xs mt-1 animate-in fade-in slide-in-from-top-1">Successfully subscribed!</p>}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[15px] text-white/40">
          <p>© {new Date().getFullYear()} VIP Networks. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
