export interface Machine {
  id: string;
  name: string;
  category: 'Edging' | 'Beveling' | 'Cutting' | 'Sandblasting' | 'Insulating';
  image: string;
  gallery: string[];
  videoUrl?: string;
  description: string;
  specs: {
    power: string;
    speed: string;
    maxGlassSize: string;
    thickness: string;
    voltage?: string;
    model?: string;
    weight?: string;
    angle?: string;
  };
}

export interface Testimonial {
  id: number;
  client: string;
  logo: string;
  quote: string;
}

export interface NavItem {
  label: string;
  path: string;
}