import React, { useRef } from 'react';
import { Award, Users, Globe, Settings } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.about-title', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2
    })
      .from('.stat-card', {
        y: 30,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1
      }, '-=0.5')
      .from('.content-section', {
        y: 30,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2
      }, '-=0.5');
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="about-title font-heading font-bold text-5xl text-textPrimary mb-6">ENGINEERING EXCELLENCE</h1>
          <p className="about-title text-xl text-textSecondary max-w-3xl mx-auto">
            Raj Glass Machine (India) LLP is a premier Importer, Exporter, and Supplier of high-quality glass processing machinery. Since 2010, we have been dedicated to modernizing the Indian glass industry through automation and precision engineering.
          </p>
        </div>

        {/* Stats/Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[
            { label: 'Years Experience', value: '15+', icon: Award },
            { label: 'Happy Clients', value: '250+', icon: Users },
            { label: 'Countries Served', value: '12', icon: Globe },
            { label: 'Machines Built', value: '500+', icon: Settings },
          ].map((stat, idx) => (
            <div key={idx} className="stat-card glass-panel p-6 text-center rounded-lg border border-gray-200 bg-white/50 shadow-sm hover:shadow-md transition-all">
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-4" />
              <div className="font-heading font-bold text-3xl text-textPrimary mb-1">{stat.value}</div>
              <div className="text-xs text-textSecondary uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content Split */}
        <div className="content-section grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            {/* <div className="absolute -inset-4 bg-accent/10 rounded-xl blur-xl"></div> */}
            <img
              src="https://picsum.photos/id/381/800/600"
              alt="Factory Floor"
              className="relative rounded-lg shadow-2xl border border-gray-200 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div>
            <h2 className="font-heading font-bold text-3xl text-textPrimary mb-6 border-l-4 border-cta pl-4">OUR MISSION</h2>
            <p className="text-textSecondary mb-6 leading-relaxed">
              We aim to serve our clients by offering premium quality glass machinery, including Edging, Beveling, Drilling, and Sandblasting machines. We are committed to ensuring prompt deliveries and immediate responses to all client queries.
            </p>
            <p className="text-textSecondary mb-6 leading-relaxed">
              Our products are sourced from leading manufacturers who strictly adhere to industry-defined quality policies, ensuring durability, dimensional accuracy, and cost-effectiveness.
            </p>
            <div className="p-4 bg-secondary rounded-l-lg border-l-2 border-accent">
              <p className="text-textPrimary italic">"Our goal is to empower glass processors with machinery that works as hard as they do."</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="content-section relative border-l border-gray-200 ml-4 md:ml-1/2 pl-8 md:pl-0">
          <div className="mb-12 md:flex justify-between items-center w-full right-timeline group">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-accent shadow-xl w-8 h-8 rounded-full absolute left-[-17px] md:left-1/2 md:translate-x-[-50%] justify-center font-bold text-primary text-xs">
              10
            </div>
            <div className="order-1 bg-white rounded-lg shadow-md w-full md:w-5/12 px-6 py-4 border border-gray-100 hover:border-accent/30 transition-colors">
              <h3 className="mb-1 font-bold text-textPrimary text-xl font-heading">2010</h3>
              <p className="text-textSecondary text-sm">Established in Mumbai as a trading and supply hub for glass machinery.</p>
            </div>
          </div>

          <div className="mb-12 md:flex justify-between items-center w-full flex-row-reverse left-timeline group">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 border-2 border-accent shadow-xl w-8 h-8 rounded-full absolute left-[-17px] md:left-1/2 md:translate-x-[-50%] justify-center font-bold text-white text-xs">
              15
            </div>
            <div className="order-1 bg-white rounded-lg shadow-md w-full md:w-5/12 px-6 py-4 border border-gray-100 hover:border-accent/30 transition-colors">
              <h3 className="mb-1 font-bold text-textPrimary text-xl font-heading">2015</h3>
              <p className="text-textSecondary text-sm">Expanded product portfolio to include advanced Double Edging and Sandblasting machines.</p>
            </div>
          </div>

          <div className="mb-12 md:flex justify-between items-center w-full right-timeline group">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-accent shadow-xl w-8 h-8 rounded-full absolute left-[-17px] md:left-1/2 md:translate-x-[-50%] justify-center font-bold text-primary text-xs">
              24
            </div>
            <div className="order-1 bg-white rounded-lg shadow-md w-full md:w-5/12 px-6 py-4 border border-gray-100 hover:border-accent/30 transition-colors">
              <h3 className="mb-1 font-bold text-textPrimary text-xl font-heading">2024</h3>
              <p className="text-textSecondary text-sm">Continued growth as a leading supplier in Maharashtra and across India.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;