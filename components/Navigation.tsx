import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "../afyahq-logo.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Solutions", href: "#solutions" },
    { name: "Impact", href: "#impact" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-[#007A5E]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <motion.img
              src={logo}
              alt="AfyaHQ Labs Logo"
              className="h-12 w-12 rounded-xl shadow-lg"
              animate={{
                opacity: isScrolled ? 0.95 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <div className="flex flex-col">
              <span
                className={`font-bold text-xl transition-colors ${
                  isScrolled ? "text-[#007A5E]" : "text-white"
                }`}
              >
                AfyaHQ Labs
              </span>
              <span
                className={`text-xs transition-colors ${
                  isScrolled ? "text-[#2E2E2E]/70" : "text-white/80"
                }`}
              >
                Health Intelligence Hub
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isScrolled
                    ? "text-[#2E2E2E] hover:text-[#007A5E]"
                    : "text-white hover:text-[#D4A017]"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4A017] transition-all group-hover:w-full" />
              </a>
            ))}

            {/* Contact Info */}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-current/20">
              <a
                href="tel:+2349092114035"
                className={`flex items-center gap-2 text-sm transition-colors ${
                  isScrolled
                    ? "text-[#007A5E] hover:text-[#D4A017]"
                    : "text-white hover:text-[#D4A017]"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">+234 909 211 4035</span>
              </a>
            </div>

            {/* CTA Button */}
            <button className="px-6 py-2.5 bg-[#D4A017] hover:bg-[#D4A017]/90 text-[#2E2E2E] rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105">
              Get Certified
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-[#007A5E] hover:bg-[#007A5E]/10"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-[#007A5E]/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-[#2E2E2E] hover:text-[#007A5E] transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-[#007A5E]/10 space-y-3">
                <a
                  href="tel:+2349092114035"
                  className="flex items-center gap-2 text-[#007A5E] hover:text-[#D4A017] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+234 909 211 4035</span>
                </a>
                <a
                  href="mailto:info@afyahqlabs.com"
                  className="flex items-center gap-2 text-[#007A5E] hover:text-[#D4A017] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@afyahqlabs.com</span>
                </a>
              </div>

              <button className="w-full px-6 py-3 bg-[#D4A017] hover:bg-[#D4A017]/90 text-[#2E2E2E] rounded-lg transition-all duration-300 font-medium shadow-lg">
                Get Certified
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
