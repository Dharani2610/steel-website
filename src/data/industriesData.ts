import type { IndustryItem } from '../types';

export const industriesData: IndustryItem[] = [
  {
    id: 'industrial-manufacturing',
    title: 'Industrial & Manufacturing Facilities',
    iconName: 'Factory',
    image: '/expertise.png',
    tagline: 'Heavy Structural Support for Process Lines & Refineries',
    description: 'Precision detailing for chemical processing plants, automotive assembly facilities, automated warehouses, and heavy manufacturing structures requiring heavy crane runways and equipment skids.',
    keyServices: [
      'Heavy Equipment Skids & Pipe Racks',
      'Overhead Crane Runway Framing & Stops',
      'Vibration FEA Connection Design',
      'NC Data Integration for Automated CNC Lines'
    ],
    featuredStat: '500,000+ Tons Detailed'
  },
  {
    id: 'commercial-highrise',
    title: 'Commercial Towers & High-Rise Buildings',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    tagline: 'High-Density Architectural Steel & Seismic Framing',
    description: 'Comprehensive 3D BIM detailing for commercial office towers, mixed-use complexes, and hotels featuring outrigger trusses, composite decks, and monumental architectural steel.',
    keyServices: [
      'Composite Steel Beam & Slab Detailing',
      'Seismic Moment Frame (SMF) Connections',
      'Architectural Glass Atrium Support Framing',
      'Egress Stair & Guardrail Assemblies'
    ],
    featuredStat: '60+ Towers Completed'
  },
  {
    id: 'bridges-infrastructure',
    title: 'Bridges & Heavy Civil Infrastructure',
    iconName: 'Milestone',
    image: '/projects.png',
    tagline: 'AASHTO-Compliant Plate Girders & Tie Arches',
    description: 'Engineered bridge steel detailing adhering strictly to AASHTO and state DOT specifications. Includes continuous plate girders, bascule spans, pedestrian bridges, and heavy viaduct supports.',
    keyServices: [
      'Fracture-Critical Weld Layouts',
      'Camber & Deflection Geometry Calculation',
      'Bridge Expansion Joint Detailing',
      'PE/SE Sealed Calculation Packages'
    ],
    featuredStat: '100% DOT Approval Rate'
  },
  {
    id: 'energy-mining',
    title: 'Energy, Power & Mining Projects',
    iconName: 'Zap',
    image: '/construction-bg.png',
    tagline: 'Extreme Loads & Harsh Environment Steel Engineering',
    description: 'Robust detailing solutions for power generation plants, wind turbine structural bases, solar racking structures, conveyor towers, and bulk material handling systems.',
    keyServices: [
      'Heavy Conveyor & Gallery Steel Detailing',
      'High-Temperature Material Selection Support',
      'Modular Skid Assembly Drawings',
      '3D Rebar Detailing for Heavy Foundations'
    ],
    featuredStat: '120+ Power & Mining Sites'
  }
];
