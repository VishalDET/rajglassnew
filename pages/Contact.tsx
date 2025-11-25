import React, { useRef } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.contact-title', {
      y: 50,
      opacity: 1,
      duration: 1,
      stagger: 0.2
    })
      .from('.contact-card', {
        y: 30,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2
      }, '-=0.5');
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-40"></div>

      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="contact-title font-heading font-bold text-5xl text-textPrimary mb-4">GET IN TOUCH</h1>
          <p className="contact-title text-textSecondary text-lg max-w-2xl mx-auto">
            Ready to upgrade your production line? Our engineers are here to assist with technical specifications and pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="contact-card glass-panel p-8 rounded-xl border border-gray-200 relative overflow-hidden shadow-lg bg-white/50 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-8 -mt-8"></div>
            <h2 className="font-heading font-bold text-2xl text-textPrimary mb-6">Send an Inquiry</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-textSecondary uppercase mb-2">Name</label>
                  <input type="text" className="w-full bg-white border border-gray-300 rounded p-3 text-textPrimary focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-textSecondary uppercase mb-2">Company</label>
                  <input type="text" className="w-full bg-white border border-gray-300 rounded p-3 text-textPrimary focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all" placeholder="Glass Works Pvt Ltd" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-textSecondary uppercase mb-2">Email Address</label>
                <input type="email" className="w-full bg-white border border-gray-300 rounded p-3 text-textPrimary focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs font-bold text-textSecondary uppercase mb-2">Machine Interest</label>
                <select className="w-full bg-white border border-gray-300 rounded p-3 text-textPrimary focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all">
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
                <textarea rows={4} className="w-full bg-white border border-gray-300 rounded p-3 text-textPrimary focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all" placeholder="Tell us about your requirements..."></textarea>
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
                href="https://wa.me/917971671193"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card bg-[#25D366] p-4 rounded-lg flex items-center justify-center gap-3 hover:bg-[#20b858] transition-colors group shadow-lg transform hover:-translate-y-1"
              >
                <MessageCircle size={28} className="text-white fill-current" />
                <span className="text-white font-bold text-lg">Chat on WhatsApp</span>
              </a>

              <div className="contact-card bg-white p-6 rounded-lg border-l-4 border-accent flex items-start gap-4 hover:shadow-md transition-all border border-gray-100">
                <div className="bg-red-50 p-3 rounded-full border border-red-100">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-textPrimary text-lg">Phone Support</h3>
                  <p className="text-textSecondary text-sm mb-1">Mon-Sat, 9am - 7pm IST</p>
                  <a href="tel:+917971671193" className="text-xl font-heading font-bold text-textPrimary hover:text-accent transition-colors">+91 79716 71193</a>
                </div>
              </div>

              <div className="contact-card bg-white p-6 rounded-lg border-l-4 border-accent flex items-start gap-4 hover:shadow-md transition-all border border-gray-100">
                <div className="bg-red-50 p-3 rounded-full border border-red-100">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-textPrimary text-lg">Email Us</h3>
                  <p className="text-textSecondary text-sm mb-1">For quotes and catalogs</p>
                  <a href="mailto:info@rajglassindia.com" className="text-lg font-heading font-bold text-textPrimary hover:text-accent transition-colors">info@rajglassindia.com</a>
                </div>
              </div>

              <div className="contact-card bg-white p-6 rounded-lg border-l-4 border-accent flex items-start gap-4 hover:shadow-md transition-all border border-gray-100">
                <div className="bg-red-50 p-3 rounded-full border border-red-100">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-textPrimary text-lg">Visit Office</h3>
                  <p className="text-textSecondary text-sm">
                    Unit No. 224, 2nd Floor, Bussa Udyog Bhavan,<br />
                    T.J. Road, Sewree, Mumbai - 400015
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="contact-card w-full h-64 bg-gray-100 rounded-xl overflow-hidden border border-gray-200 relative group shadow-lg">
              <img
                src="https://picsum.photos/id/10/800/400"
                alt="Map Location"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/90 backdrop-blur text-textPrimary px-5 py-3 rounded-lg font-bold shadow-lg flex items-center gap-2 border border-accent/20">
                  <MapPin size={18} className="text-accent" />
                  <span>View on Google Maps</span>
                </div>
              </div>
              <a href="https://maps.google.com/?q=Unit+No.+224,+2nd+Floor,+Bussa+Udyog+Bhavan,+T.J.Road,+Sewree,+Mumbai+-+400015" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label="Open Google Maps"></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;