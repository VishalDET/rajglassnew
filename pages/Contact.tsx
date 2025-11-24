import React from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-primary relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-5xl text-white mb-4">GET IN TOUCH</h1>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">
            Ready to upgrade your production line? Our engineers are here to assist with technical specifications and pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="glass-panel p-8 rounded-xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-8 -mt-8"></div>
            <h2 className="font-heading font-bold text-2xl text-white mb-6">Send an Inquiry</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-textSecondary uppercase mb-2">Name</label>
                  <input type="text" className="w-full bg-black/30 border border-white/10 rounded p-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-textSecondary uppercase mb-2">Company</label>
                  <input type="text" className="w-full bg-black/30 border border-white/10 rounded p-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder="Glass Works Pvt Ltd" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-textSecondary uppercase mb-2">Email Address</label>
                <input type="email" className="w-full bg-black/30 border border-white/10 rounded p-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs font-bold text-textSecondary uppercase mb-2">Machine Interest</label>
                <select className="w-full bg-black/30 border border-white/10 rounded p-3 text-white focus:border-accent focus:outline-none transition-colors">
                  <option>Select a category...</option>
                  <option>Edging Machines</option>
                  <option>Beveling Machines</option>
                  <option>Cutting Tables</option>
                  <option>Sandblasting</option>
                  <option>Spare Parts / Service</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-textSecondary uppercase mb-2">Message</label>
                <textarea rows={4} className="w-full bg-black/30 border border-white/10 rounded p-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button type="button" className="w-full bg-cta hover:bg-orange-600 text-white font-bold py-4 rounded uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-900/20 transform hover:-translate-y-1">
                <Send size={18} />
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919820012345"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] p-4 rounded-lg flex items-center justify-center gap-3 hover:bg-[#20b858] transition-colors group shadow-lg"
              >
                <MessageCircle size={28} className="text-white fill-current" />
                <span className="text-white font-bold text-lg">Chat on WhatsApp</span>
              </a>

              <div className="bg-secondary p-6 rounded-lg border-l-4 border-accent flex items-start gap-4 hover:bg-white/5 transition-colors">
                <div className="bg-primary p-3 rounded-full border border-white/10">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Phone Support</h3>
                  <p className="text-textSecondary text-sm mb-1">Mon-Sat, 9am - 7pm IST</p>
                  <a href="tel:+919820012345" className="text-xl font-heading font-bold text-white hover:text-accent">+91 98200 12345</a>
                </div>
              </div>

              <div className="bg-secondary p-6 rounded-lg border-l-4 border-accent flex items-start gap-4 hover:bg-white/5 transition-colors">
                <div className="bg-primary p-3 rounded-full border border-white/10">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Email Us</h3>
                  <p className="text-textSecondary text-sm mb-1">For quotes and catalogs</p>
                  <a href="mailto:sales@rajglassmachine.com" className="text-lg font-heading font-bold text-white hover:text-accent">sales@rajglassmachine.com</a>
                </div>
              </div>

              <div className="bg-secondary p-6 rounded-lg border-l-4 border-accent flex items-start gap-4 hover:bg-white/5 transition-colors">
                <div className="bg-primary p-3 rounded-full border border-white/10">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Visit Factory</h3>
                  <p className="text-textSecondary text-sm">
                    Plot No. 45, Industrial Estate,<br />
                    Parel, Mumbai - 400012
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-secondary rounded-xl overflow-hidden border border-white/10 relative group shadow-2xl">
              <img
                src="https://picsum.photos/id/10/800/400"
                alt="Map Location"
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-primary/90 backdrop-blur text-white px-5 py-3 rounded-lg font-bold shadow-lg flex items-center gap-2 border border-accent/20">
                  <MapPin size={18} className="text-accent" />
                  <span>View on Google Maps</span>
                </div>
              </div>
              <a href="#" className="absolute inset-0 z-10" aria-label="Open Google Maps"></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;