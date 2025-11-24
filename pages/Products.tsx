import React, { useState, useEffect } from 'react';
import { Filter, Download, X, Play, Check, Loader2, AlertCircle } from 'lucide-react';
import { Machine } from '../types';
import { fetchProducts } from '../api';

const Products: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  const [activeImage, setActiveImage] = useState<string>('');
  const [machines, setMachines] = useState<Machine[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch products from API on component mount
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const products = await fetchProducts();
        setMachines(products);
      } catch (err) {
        console.error('Failed to load products:', err);
        setError('Failed to load products. Please make sure the API server is running.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const categories = ['All', 'Edging', 'Beveling', 'Cutting', 'Sandblasting', 'Insulating'];

  const filteredMachines = filter === 'All'
    ? machines
    : machines.filter(m => m.category === filter);

  const openMachine = (machine: Machine) => {
    setSelectedMachine(machine);
    setActiveImage(machine.image);
    document.body.style.overflow = 'hidden';
  };

  const closeMachine = () => {
    setSelectedMachine(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-primary bg-grid-pattern">

      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <Loader2 className="w-12 h-12 text-accent animate-spin mb-4" />
          <p className="text-textSecondary text-lg">Loading products...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
            <div>
              <h3 className="text-textPrimary font-bold mb-2">Failed to Load Products</h3>
              <p className="text-textSecondary mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-accent text-primary px-4 py-2 rounded font-bold hover:bg-accent/90 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content - Only show when not loading and no error */}
      {!loading && !error && (
        <>

          {/* Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-textPrimary mb-4">MACHINERY CATALOG</h1>
            <p className="text-textSecondary max-w-2xl">
              Explore our comprehensive range of glass processing solutions. Filter by category to find the exact machine for your production line needs.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="sticky top-20 z-40 bg-primary/95 backdrop-blur border-y border-white/10 mb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center overflow-x-auto no-scrollbar gap-4">
                <div className="flex items-center text-textSecondary mr-4 shrink-0">
                  <Filter size={18} className="mr-2" />
                  <span className="text-sm font-bold uppercase">Filter:</span>
                </div>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                      ? 'bg-accent text-primary font-bold shadow-[0_0_10px_rgba(100,255,218,0.3)]'
                      : 'bg-secondary text-textSecondary hover:text-textPrimary hover:bg-accent/10'
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMachines.map((machine) => (
                <div
                  key={machine.id}
                  onClick={() => openMachine(machine)}
                  className="group cursor-pointer glass-panel rounded-xl overflow-hidden hover:border-accent/50 transition-all hover:-translate-y-1 duration-300 border border-white/5"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-between items-end">
                        <div>
                          <span className="inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-widest bg-accent text-primary rounded mb-2">
                            {machine.category}
                          </span>
                          <h3 className="font-heading font-bold text-xl text-textPrimary group-hover:text-accent transition-colors leading-tight">
                            {machine.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6 pt-2">
                      <div className="border-l-2 border-white/10 pl-3">
                        <p className="text-[10px] text-textSecondary uppercase tracking-wider">Thickness</p>
                        <p className="text-sm font-bold text-textPrimary font-mono">{machine.specs.thickness}</p>
                      </div>
                      <div className="border-l-2 border-white/10 pl-3">
                        <p className="text-[10px] text-textSecondary uppercase tracking-wider">Power</p>
                        <p className="text-sm font-bold text-textPrimary font-mono">{machine.specs.power}</p>
                      </div>
                    </div>
                    <button className="w-full py-3 border border-black/10 bg-secondary rounded text-sm text-textPrimary hover:bg-accent hover:text-white transition-colors flex items-center justify-center gap-2 group-hover:border-accent/50 font-bold uppercase tracking-wide">
                      View Specs
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full Screen Modal */}
          {selectedMachine && (
            <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md overflow-y-auto animate-fade-in">
              <div className="min-h-screen flex flex-col">

                {/* Modal Header */}
                <div className="sticky top-0 z-50 bg-primary/95 border-b border-white/10 backdrop-blur-lg px-4 py-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <button onClick={closeMachine} className="text-textPrimary hover:text-accent flex items-center gap-2 text-sm font-bold uppercase">
                      <X size={20} /> Close
                    </button>
                    <span className="text-textSecondary">|</span>
                    <span className="text-textPrimary font-heading font-bold text-xl hidden md:inline">{selectedMachine.name}</span>
                  </div>
                  <a href="#quote" className="bg-cta hover:bg-orange-600 text-white px-6 py-2 rounded text-sm font-bold uppercase transition-colors">
                    Request Quote
                  </a>
                </div>

                <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
                  <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left Column: Visuals */}
                    <div className="lg:w-2/3 space-y-8">
                      {/* Main Gallery */}
                      <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-white/10">
                        <img src={activeImage} alt={selectedMachine.name} className="w-full h-full object-contain" />
                      </div>

                      {/* Thumbnails */}
                      <div className="flex gap-4 overflow-x-auto pb-2">
                        {selectedMachine.gallery && selectedMachine.gallery.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImage(img)}
                            className={`relative w-24 h-24 shrink-0 rounded border-2 overflow-hidden ${activeImage === img ? 'border-accent' : 'border-transparent opacity-60 hover:opacity-100'}`}
                          >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                          </button>
                        ))}
                        {selectedMachine.videoUrl && (
                          <button
                            onClick={() => setActiveImage(selectedMachine.image)}
                            className="relative w-24 h-24 shrink-0 rounded border-2 border-transparent bg-secondary flex items-center justify-center group"
                          >
                            <Play className="text-white group-hover:text-accent" />
                            <span className="absolute bottom-1 text-[8px] text-white uppercase font-bold">Video</span>
                          </button>
                        )}
                      </div>

                      {/* Description & Features */}
                      <div>
                        <h3 className="font-heading font-bold text-2xl text-textPrimary mb-4">Machine Overview</h3>
                        <p className="text-textSecondary leading-relaxed text-lg mb-8">
                          {selectedMachine.description}
                        </p>

                        <h3 className="font-heading font-bold text-2xl text-textPrimary mb-4">Technical Specifications</h3>
                        <div className="bg-secondary/50 rounded-lg overflow-hidden border border-white/10">
                          <table className="w-full text-left text-sm">
                            <tbody className="divide-y divide-white/5">
                              {Object.entries(selectedMachine.specs).map(([key, value]) => (
                                value && (
                                  <tr key={key} className="hover:bg-white/5">
                                    <td className="p-4 text-textSecondary uppercase font-bold text-xs tracking-wider w-1/3">
                                      {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </td>
                                    <td className="p-4 text-textPrimary font-mono">
                                      {value}
                                    </td>
                                  </tr>
                                )
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Sticky Sidebar */}
                    <div className="lg:w-1/3">
                      <div className="sticky top-24 space-y-6">

                        {/* Key Benefits */}
                        <div className="bg-secondary/30 p-6 rounded-lg border border-white/10">
                          <h4 className="font-bold text-textPrimary mb-4 flex items-center gap-2">
                            <Check className="text-accent" size={16} /> Why this machine?
                          </h4>
                          <ul className="space-y-3">
                            <li className="text-sm text-textSecondary flex gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                              High-speed motor for continuous operation
                            </li>
                            <li className="text-sm text-textSecondary flex gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                              PLC Control System with Touch Screen
                            </li>
                            <li className="text-sm text-textSecondary flex gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                              1 Year Warranty & Free Installation
                            </li>
                          </ul>
                        </div>

                        {/* Inquiry Form */}
                        <div id="quote" className="glass-panel p-6 rounded-xl border border-accent/20 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                          <h3 className="font-heading font-bold text-xl text-textPrimary mb-2">Get Best Quote</h3>
                          <p className="text-xs text-textSecondary mb-6">Direct factory pricing. Response within 24 hours.</p>

                          <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full bg-white border border-black/20 rounded p-3 text-sm text-textPrimary focus:border-accent outline-none" />
                            <input type="text" placeholder="Company Name" className="w-full bg-white border border-black/20 rounded p-3 text-sm text-textPrimary focus:border-accent outline-none" />
                            <input type="email" placeholder="Email Address" className="w-full bg-white border border-black/20 rounded p-3 text-sm text-textPrimary focus:border-accent outline-none" />
                            <input type="tel" placeholder="Phone Number" className="w-full bg-white border border-black/20 rounded p-3 text-sm text-textPrimary focus:border-accent outline-none" />
                            <textarea placeholder="Message / Specific Requirements" rows={3} className="w-full bg-white border border-black/20 rounded p-3 text-sm text-textPrimary focus:border-accent outline-none"></textarea>

                            <button className="w-full bg-cta hover:bg-orange-600 text-white font-bold py-3 rounded uppercase text-sm tracking-wider shadow-lg">
                              Send Inquiry
                            </button>
                          </form>

                          <div className="mt-4 pt-4 border-t border-white/10 text-center">
                            <button className="text-textPrimary hover:text-accent text-sm flex items-center justify-center gap-2 w-full border border-black/20 py-2 rounded">
                              <Download size={16} /> Download Brochure
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          )}

        </>
      )}

    </div>
  );
};

export default Products;