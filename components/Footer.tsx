import React from 'react';
import { Mail, MapPin, Phone, Facebook, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Background accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-heading font-bold text-2xl text-white mb-4">
              RAJ GLASS MACHINE (INDIA) LLP
            </h3>
            <p className="text-textSecondary mb-6 max-w-md">
              Pioneering precision in glass processing technology. Since 2005, we have been delivering industrial-grade machinery designed for durability and high-precision automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-textSecondary hover:text-accent transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-textSecondary hover:text-accent transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-textSecondary hover:text-accent transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-white mb-4 border-l-2 border-cta pl-3">
              Quick Access
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-textSecondary hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-textSecondary hover:text-accent transition-colors">Machinery Catalog</Link>
              </li>
              <li>
                <Link to="/about" className="text-textSecondary hover:text-accent transition-colors">About Company</Link>
              </li>
              <li>
                <Link to="/contact" className="text-textSecondary hover:text-accent transition-colors">Request Quote</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info (Corrected) */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-white mb-4 border-l-2 border-cta pl-3">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-textSecondary">
                <MapPin className="text-cta shrink-0 mt-1" size={18} />
                <span>
                  Plot No. 45, Industrial Estate,<br />
                  Parel, Mumbai - 400012,<br />
                  Maharashtra, India.
                </span>
              </li>
              <li className="flex items-center gap-3 text-textSecondary">
                <Phone className="text-cta shrink-0" size={18} />
                <a href="tel:+919820012345" className="hover:text-white">+91 98200 12345</a>
              </li>
              <li className="flex items-center gap-3 text-textSecondary">
                <Mail className="text-cta shrink-0" size={18} />
                <a href="mailto:sales@rajglassmachine.com" className="hover:text-white">sales@rajglassmachine.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-textSecondary">
            © {new Date().getFullYear()} Raj Glass Machine (India) LLP. All rights reserved.
          </p>
          <p className="text-xs text-textSecondary/50">
            Developed By - <a href="https://digitaledgetech.in/" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-accent transition-colors">Digital Edge Technologies</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;