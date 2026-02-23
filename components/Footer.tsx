import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#", color: "hover:bg-[#007A5E]" },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:bg-[#007A5E]" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:bg-[#007A5E]" },
    { icon: Instagram, label: "Instagram", href: "#", color: "hover:bg-[#D4A017]" }
  ];

  const quickLinks = [
    { label: "About Us", href: "#" },
    { label: "Our Services", href: "#" },
    { label: "Get Certified", href: "#" },
    { label: "Research & Data", href: "#" },
    { label: "Careers", href: "#" }
  ];

  return (
    <footer id="contact" className="bg-gradient-to-b from-[#2E2E2E] to-[#1a1a1a] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#007A5E]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A017]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-white mb-4 text-2xl">
              AfyaHQ Labs
            </h3>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Africa's Headquarters for Health, Safety, and Trust. Building a future where every 
              African has access to safe, verified products.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-11 h-11 bg-gray-800 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white mb-6 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-[#D4A017] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#D4A017] transition-colors"></span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white mb-6 text-lg">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#007A5E] transition-colors">
                  <Mail className="w-5 h-5 text-[#D4A017] group-hover:text-white transition-colors" />
                </div>
                <a href="mailto:info@afyahqlabs.com" className="text-gray-400 hover:text-white transition-colors pt-2">
                  info@afyahqlabs.com
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#007A5E] transition-colors">
                  <Phone className="w-5 h-5 text-[#D4A017] group-hover:text-white transition-colors" />
                </div>
                <a href="tel:+2349092114035" className="text-gray-400 hover:text-white transition-colors pt-2">
                  +234 909 211 4035
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#007A5E] transition-colors">
                  <MapPin className="w-5 h-5 text-[#D4A017] group-hover:text-white transition-colors" />
                </div>
                <span className="text-gray-400 pt-2">
                  Port Harcourt, Nigeria
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} AfyaHQ Labs. All rights reserved. 
              <span className="text-[#D4A017]"> Science for a Safer Africa.</span>
            </p>
            <div className="flex gap-6">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-[#D4A017] transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-[#D4A017] transition-colors"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
