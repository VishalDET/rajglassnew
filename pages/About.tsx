import React from 'react';
import { Award, Users, Globe, Settings } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-primary">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-5xl text-white mb-6">ENGINEERING EXCELLENCE</h1>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            Raj Glass Machine (India) LLP is a premier manufacturer of glass processing machinery, dedicated to modernizing the Indian glass industry through automation and precision engineering.
          </p>
        </div>

        {/* Stats/Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[
            { label: 'Years Experience', value: '18+', icon: Award },
            { label: 'Happy Clients', value: '250+', icon: Users },
            { label: 'Countries Served', value: '12', icon: Globe },
            { label: 'Machines Built', value: '500+', icon: Settings },
          ].map((stat, idx) => (
            <div key={idx} className="glass-panel p-6 text-center rounded-lg border border-white/5">
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-4" />
              <div className="font-heading font-bold text-3xl text-white mb-1">{stat.value}</div>
              <div className="text-xs text-textSecondary uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
             <div className="absolute -inset-4 bg-accent/10 rounded-xl blur-xl"></div>
             <img 
              src="https://picsum.photos/id/381/800/600" 
              alt="Factory Floor" 
              className="relative rounded-lg shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div>
            <h2 className="font-heading font-bold text-3xl text-white mb-6 border-l-4 border-cta pl-4">OUR MISSION</h2>
            <p className="text-textSecondary mb-6 leading-relaxed">
              Established with a vision to reduce the dependency on expensive European imports, Raj Glass Machine has bridged the gap between affordability and high precision.
            </p>
            <p className="text-textSecondary mb-6 leading-relaxed">
              Our manufacturing facility in Mumbai is equipped with state-of-the-art CNC machining centers that ensure every component of your glass machine is built to micron-level tolerances. We don't just assemble; we engineer.
            </p>
            <div className="p-4 bg-secondary/50 rounded-l-lg border-l-2 border-accent">
              <p className="text-white italic">"Our goal is to empower glass processors with machinery that works as hard as they do."</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-4 md:ml-1/2 pl-8 md:pl-0">
          <div className="mb-12 md:flex justify-between items-center w-full right-timeline group">
             <div className="order-1 md:w-5/12"></div>
             <div className="z-20 flex items-center order-1 bg-accent shadow-xl w-8 h-8 rounded-full absolute left-[-17px] md:left-1/2 md:translate-x-[-50%] justify-center font-bold text-primary text-xs">
                05
             </div>
             <div className="order-1 bg-secondary rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 border border-white/5 hover:border-accent/30 transition-colors">
                <h3 className="mb-1 font-bold text-white text-xl font-heading">2005</h3>
                <p className="text-textSecondary text-sm">Founded in Mumbai with a single lathe machine and a vision for automation.</p>
             </div>
          </div>

          <div className="mb-12 md:flex justify-between items-center w-full flex-row-reverse left-timeline group">
             <div className="order-1 md:w-5/12"></div>
             <div className="z-20 flex items-center order-1 bg-gray-800 border-2 border-accent shadow-xl w-8 h-8 rounded-full absolute left-[-17px] md:left-1/2 md:translate-x-[-50%] justify-center font-bold text-white text-xs">
                12
             </div>
             <div className="order-1 bg-secondary rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 border border-white/5 hover:border-accent/30 transition-colors">
                <h3 className="mb-1 font-bold text-white text-xl font-heading">2012</h3>
                <p className="text-textSecondary text-sm">Launched India's first locally manufactured 9-Spindle Glass Edger.</p>
             </div>
          </div>

          <div className="mb-12 md:flex justify-between items-center w-full right-timeline group">
             <div className="order-1 md:w-5/12"></div>
             <div className="z-20 flex items-center order-1 bg-accent shadow-xl w-8 h-8 rounded-full absolute left-[-17px] md:left-1/2 md:translate-x-[-50%] justify-center font-bold text-primary text-xs">
                24
             </div>
             <div className="order-1 bg-secondary rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 border border-white/5 hover:border-accent/30 transition-colors">
                <h3 className="mb-1 font-bold text-white text-xl font-heading">2024</h3>
                <p className="text-textSecondary text-sm">Expanded export operations to Middle East and African markets. Introduced IoT ready controllers.</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;