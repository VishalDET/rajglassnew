import React from 'react';
import { Link } from 'react-router-dom';
import { MACHINES, FEATURES, TESTIMONIALS } from '../constants';
import { ArrowRight, ChevronRight, CheckCircle2, Play } from 'lucide-react';

const Home: React.FC = () => {
  const featuredMachines = MACHINES.slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Background Video Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40 grayscale"
            poster="https://picsum.photos/id/180/1920/1080"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-factory-conveyor-belt-carrying-bottles-4328-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent/50" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1 border border-accent/30 rounded-full bg-accent/5 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">ISO 9001:2015 Certified Manufacturing</span>
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-8">
              PRECISION <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">GLASS</span> &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500"> STEEL</span>
            </h1>
            <p className="text-lg md:text-xl text-textSecondary mb-10 max-w-xl leading-relaxed border-l-2 border-accent pl-6">
              Engineered for the future of glass processing. We manufacture high-speed, automated machinery that powers India's leading architectural glass facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-cta hover:bg-orange-600 text-white font-bold uppercase tracking-wider transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,107,0,0.3)] rounded-sm"
              >
                View Machinery
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:bg-white/10 hover:border-accent/50 text-white font-bold uppercase tracking-wider transition-all rounded-sm backdrop-blur-sm"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 bg-secondary relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-cta font-bold tracking-widest text-sm uppercase mb-2 block">Why Choose Us</span>
              <h2 className="font-heading font-bold text-4xl text-white">ENGINEERED FOR PERFORMANCE</h2>
            </div>
            <p className="text-textSecondary max-w-md text-sm">
              Our machines are built with a focus on longevity and precision, ensuring minimal downtime and maximum output for your production line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <div key={index} className="glass-panel p-8 rounded-xl hover:bg-white/5 transition-all group border border-white/5 hover:border-accent/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <feature.icon size={80} />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-primary rounded flex items-center justify-center mb-6 border border-white/10 shadow-lg">
                  <feature.icon className="text-accent" size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-accent transition-colors">{feature.title}</h3>
                <p className="text-textSecondary text-sm leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED MACHINES */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -left-40 top-40 w-96 h-96 bg-cta/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-accent font-bold tracking-widest text-sm uppercase mb-2 block">Our Technology</span>
              <h2 className="font-heading font-bold text-4xl text-white">FEATURED MACHINERY</h2>
            </div>
            <Link to="/products" className="hidden md:flex items-center text-textSecondary hover:text-white transition-colors mt-4 md:mt-0 group border border-white/10 px-6 py-2 rounded-full hover:bg-white/5">
              View All Machines <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredMachines.map((machine) => (
              <div key={machine.id} className="group relative bg-[#151b2e] border border-white/5 rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <div className="aspect-[4/3] w-full overflow-hidden bg-black relative">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151b2e] via-transparent to-transparent opacity-80"></div>
                  <div className="absolute top-4 right-4 bg-cta/90 backdrop-blur px-3 py-1 text-[10px] font-bold text-white uppercase tracking-widest rounded-sm shadow-lg">
                    {machine.category}
                  </div>
                </div>
                <div className="p-8 relative -mt-12">
                  <h3 className="font-heading font-bold text-2xl text-white mb-2 leading-tight">{machine.name}</h3>
                  <p className="text-textSecondary text-sm mb-6 line-clamp-2 border-b border-white/5 pb-4">
                    {machine.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase block mb-1">Speed</span>
                      <span className="text-accent font-mono text-sm">{machine.specs.speed}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase block mb-1">Glass Size</span>
                      <span className="text-white font-mono text-sm">{machine.specs.maxGlassSize}</span>
                    </div>
                  </div>
                  <Link
                    to="/products"
                    className="flex items-center justify-between w-full py-3 px-4 bg-white/5 text-white text-xs font-bold uppercase hover:bg-accent hover:text-primary transition-all rounded-sm group-hover:translate-x-1"
                  >
                    View Specifications
                    <Play size={12} className="fill-current" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/products" className="inline-flex items-center text-white border-b border-cta pb-1">
              View All Machines <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS / CLIENTS */}
      <section className="py-20 bg-gradient-to-b from-secondary to-primary border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl text-white mb-6">TRUSTED BY LEADERS IN GLASS PROCESSING</h2>
              <p className="text-textSecondary mb-8 text-lg">
                From small workshops to large-scale architectural glass factories, our machines are the backbone of production lines across India and the Middle East.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start text-white group">
                  <div className="bg-accent/10 p-1 rounded-full mr-4 group-hover:bg-accent/20 transition-colors">
                    <CheckCircle2 className="text-accent" size={20} />
                  </div>
                  <div>
                    <span className="font-bold block text-lg">500+ Machines Installed</span>
                    <span className="text-textSecondary text-sm">Operational in 12+ countries globally.</span>
                  </div>
                </li>
                <li className="flex items-start text-white group">
                  <div className="bg-accent/10 p-1 rounded-full mr-4 group-hover:bg-accent/20 transition-colors">
                    <CheckCircle2 className="text-accent" size={20} />
                  </div>
                  <div>
                    <span className="font-bold block text-lg">Pan-India Service Network</span>
                    <span className="text-textSecondary text-sm">Technicians available in major hubs within 24 hours.</span>
                  </div>
                </li>
                <li className="flex items-start text-white group">
                  <div className="bg-accent/10 p-1 rounded-full mr-4 group-hover:bg-accent/20 transition-colors">
                    <CheckCircle2 className="text-accent" size={20} />
                  </div>
                  <div>
                    <span className="font-bold block text-lg">24/7 Technical Support</span>
                    <span className="text-textSecondary text-sm">Video call support and IoT diagnostics available.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="glass-panel p-8 rounded-lg relative border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-accent text-6xl font-serif absolute top-4 left-4 opacity-10">"</div>
                  <p className="text-gray-300 text-sm italic mb-6 relative z-10 pt-4 leading-relaxed">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="font-bold text-white text-xs">{t.client.substring(0, 2)}</span>
                    </div>
                    <span className="text-white text-xs font-bold uppercase tracking-wide">{t.client}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;