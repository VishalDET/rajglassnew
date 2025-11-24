import { Machine, Testimonial, NavItem } from './types';
import { Cpu, ShieldCheck, Zap, Sliders } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const MACHINES: Machine[] = [
  {
    id: 'rg-e100',
    name: 'Straight Line Edging Machine',
    category: 'Edging',
    image: 'https://picsum.photos/id/1/800/600',
    gallery: [
      'https://picsum.photos/id/1/800/600',
      'https://picsum.photos/id/119/800/600',
      'https://picsum.photos/id/180/800/600'
    ],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: 'High-precision 9-spindle straight line edging for heavy duty architectural glass. Designed with a rigid cast iron base to minimize vibration and ensure superior edge quality.',
    specs: {
      power: '18.5 kW',
      speed: '0.5 - 5.0 m/min',
      maxGlassSize: '3000 x 3000 mm',
      thickness: '3 - 25 mm',
    },
  },
  {
    id: 'rg-b200',
    name: 'Vertical Beveling Machine',
    category: 'Beveling',
    image: 'https://picsum.photos/id/20/800/600',
    gallery: [
       'https://picsum.photos/id/20/800/600',
       'https://picsum.photos/id/160/800/600',
       'https://picsum.photos/id/175/800/600'
    ],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: 'Advanced chain-transmitting beveling with PLC control for mirror finishing. Features automatic lubrication and digital display for bevel width and angle.',
    specs: {
      power: '22 kW',
      speed: '0.4 - 4.0 m/min',
      maxGlassSize: '2500 x 2500 mm',
      thickness: '4 - 19 mm',
    },
  },
  {
    id: 'rg-c300',
    name: 'CNC Glass Cutting Table',
    category: 'Cutting',
    image: 'https://picsum.photos/id/201/800/600',
    gallery: [
       'https://picsum.photos/id/201/800/600',
       'https://picsum.photos/id/250/800/600',
       'https://picsum.photos/id/366/800/600'
    ],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: 'Fully automated CNC cutting with laser optimization and automatic loading. Includes air-cushion floatation for easy glass handling.',
    specs: {
      power: '8.5 kW',
      speed: '150 m/min',
      maxGlassSize: '3660 x 2440 mm',
      thickness: '2 - 19 mm',
    },
  },
  {
    id: 'rg-s400',
    name: 'Automatic Sandblasting Machine',
    category: 'Sandblasting',
    image: 'https://picsum.photos/id/314/800/600',
    gallery: [
      'https://picsum.photos/id/314/800/600',
      'https://picsum.photos/id/319/800/600',
      'https://picsum.photos/id/326/800/600'
    ],
    description: 'Dust-free automatic sandblasting with computerized pattern generation. Equipped with automatic dust separation system.',
    specs: {
      power: '5.5 kW',
      speed: '12 m/min',
      maxGlassSize: '2000 x 3000 mm',
      thickness: '3 - 50 mm',
    },
  },
  {
    id: 'rg-i500',
    name: 'Insulating Glass Line',
    category: 'Insulating',
    image: 'https://picsum.photos/id/400/800/600',
    gallery: [
       'https://picsum.photos/id/400/800/600',
       'https://picsum.photos/id/449/800/600',
       'https://picsum.photos/id/450/800/600'
    ],
    description: 'Vertical insulating glass production line with automatic gas filling. Suitable for double and triple glazing production.',
    specs: {
      power: '35 kW',
      speed: '45 m/min',
      maxGlassSize: '2500 x 3500 mm',
      thickness: '12 - 60 mm',
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    client: 'Apex Glazing Solutions',
    logo: 'https://picsum.photos/id/60/100/100',
    quote: 'Raj Glass Machines increased our daily output by 40%. The precision on the beveling units is unmatched in this price bracket.',
  },
  {
    id: 2,
    client: 'Mumbai Architectural Glass',
    logo: 'https://picsum.photos/id/61/100/100',
    quote: 'Robust build quality. We have been running the edging machine for 5 years with minimal maintenance.',
  },
];

export const FEATURES = [
  {
    icon: Cpu,
    title: 'Industry 4.0 Ready',
    description: 'IoT-enabled controllers for real-time production monitoring and remote diagnostics.',
  },
  {
    icon: ShieldCheck,
    title: 'Built for Durability',
    description: 'Heavy-duty cast iron bases ensure vibration-free operation for decades.',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'Smart variable frequency drives reduce power consumption by up to 30%.',
  },
  {
    icon: Sliders,
    title: 'High Precision',
    description: 'Micrometer-level accuracy ensures perfect fitting for architectural projects.',
  },
];