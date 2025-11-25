import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <img className="w-auto h-16" src="https://lh3.googleusercontent.com/p/AF1QipN8KKTQzMx-bkx2FsS6E-FN-rZKy8ssk7kdG2Vj=s680-w680-h510-rw" alt="" srcset="" />

            {/*<div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-accent rounded flex items-center justify-center text-white font-bold text-xl shadow-md">
             R 
            </div>*/}
            <div className="flex flex-col">
              <span className="font-heading font-bold text-2xl tracking-wider text-textPrimary leading-none">
                RAJ GLASS
              </span>
              <span className="text-[10px] tracking-[0.2em] text-accent uppercase">
                Machine (India) LLP
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 uppercase tracking-wide ${isActive
                      ? 'text-accent bg-accent/5 border border-accent/20 font-bold'
                      : 'text-textSecondary hover:text-accent hover:bg-gray-100'
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+91926000000"
              className="flex items-center gap-2 bg-cta/10 text-cta hover:bg-cta hover:text-white border border-cta/50 px-4 py-2 rounded font-heading font-bold transition-all duration-300 uppercase"
            >
              <Phone size={18} />
              <span>+91 98200 12345</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-xl absolute w-full left-0 top-20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-textSecondary hover:text-accent hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+919820012345"
              className="text-cta block px-3 py-2 rounded-md text-base font-bold bg-cta/5"
            >
              Call Support
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;