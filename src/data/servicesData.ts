import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'structural-detailing',
    title: 'Structural Steel Detailing',
    subtitle: 'High-Precision 3D Modeling & Shop Drawings',
    iconName: 'Box',
    description: 'Complete 3D modeling and detailing of complex structural steel frameworks complying with AISC, NISD, BS, Eurocode, and AS/NZS standards with zero-clash tolerances.',
    deliverables: [
      '3D Tekla & SDS2 Master BIM Models',
      'Individual Member Fabrication Drawings (Anchor Plan, Columns, Beams)',
      'Erection Diagrams with Bolt Lists & Crane Pick Points',
      'NC / DSTV Data Files for Automated CNC Machinery',
      'Comprehensive Bill of Materials (BOM) & Material Take-Offs'
    ],
    software: ['Tekla Structures', 'SDS2', 'AutoCAD', 'Navisworks'],
    benefits: [
      '99.8% Shop Drawing Accuracy Guarantee',
      'Accelerated Fabrication Timelines by up to 35%',
      'Seamless CNC Machine Integration'
    ],
    color: '#00D4FF'
  },
  {
    id: 'connection-design',
    title: 'Connection Design & Engineering',
    subtitle: 'PE/SE Stamped Calculations & Finite Element Analysis',
    iconName: 'Cpu',
    description: 'Advanced engineering design of heavy moment, shear, brace, and truss connections featuring PE/SE sealed calculation packages for all US states and international codes.',
    deliverables: [
      'PE/SE Stamped Calculation Calculations',
      '3D Connection Finite Element Analysis (FEA) Reports',
      'Moment Connection Stiffener & Gusset Plate Drawings',
      'High-Strength Bolt & Weld Inspection Protocols'
    ],
    software: ['IDEA Statica', 'RAM Connection', 'RISA 3D', 'Tekla Tedds'],
    benefits: [
      'Optimized Steel Weight via Value Engineering',
      'Full Compliance with AISC 360 & AWS D1.1',
      'Reduced Field Erection Bolting & Welding'
    ],
    color: '#FF8C00'
  },
  {
    id: 'tekla-structures',
    title: 'Tekla Structures Detailing',
    subtitle: 'Enterprise Multi-User Parametric BIM Modeling',
    iconName: 'Layers',
    description: 'Expert Tekla Structures multi-user workflow execution for ultra-large industrial, commercial, and infrastructure steel structures.',
    deliverables: [
      'Multi-User Shared Tekla Model (.db1 & .tekla)',
      'Custom Components & Parametric Connection Libraries',
      'Automated Shop & Assembly Drawings (.dwg / .pdf)',
      'IFC & COBie BIM Exchange Files'
    ],
    software: ['Tekla Structures', 'Tekla Model Sharing', 'Trimble Connect'],
    benefits: [
      'Real-Time Multi-Engineer Collaboration',
      'Direct Export to Steel Fabrication Management Systems',
      'Automated Revision Management'
    ],
    color: '#4F46E5'
  },
  {
    id: 'sds2-detailing',
    title: 'SDS2 3D Steel Detailing',
    subtitle: 'Automated Connection Intelligence & Framing',
    iconName: 'Workflow',
    description: 'Automated steel detailing leveraging SDS2 connection intelligence for heavy industrial plants, power stations, and complex framing.',
    deliverables: [
      'SDS2 3D Steel Frame Models',
      'Automated Framing Connection Verification Drawings',
      'CNC Saw & Drill Line Export Files',
      'Shippable Assembly & Sub-Assembly Bundles'
    ],
    software: ['SDS2 Steel', 'SDS2 Load Planning'],
    benefits: [
      'Automated Code Compliance Verification',
      'Reduced Detailing Cycle Times',
      'Flawless Fit-Up on Construction Sites'
    ],
    color: '#00D4FF'
  },
  {
    id: 'rebar-detailing',
    title: '3D Rebar Detailing & Estimation',
    subtitle: 'Concrete Reinforced Bar Placement & Schedules',
    iconName: 'Grid',
    description: 'Comprehensive 3D rebar modeling, bar bending schedules (BBS), and coupler layout diagrams for heavy foundations, core walls, and cast-in-place structures.',
    deliverables: [
      '3D Reinforced Concrete BIM Models',
      'Bar Bending Schedules (BBS) to ACI / BS Standards',
      'Rebar Placement & Lap Splice Layout Drawings',
      'aSa & BVBS Machine Cut/Bend Export Files'
    ],
    software: ['Tekla Structures Rebar', 'Revit Structure', 'RebarCAD'],
    benefits: [
      'Zero Congestion at Beam-Column Joints',
      'Eliminated Field Steel Cutting Waste',
      'Accurate Concrete & Steel Quantity Tracking'
    ],
    color: '#FF8C00'
  },
  {
    id: 'misc-steel',
    title: 'Miscellaneous Steel & Architectural Metals',
    subtitle: 'Stairs, Handrails, Ladders & Support Structures',
    iconName: 'Maximize',
    description: 'Intricate detailing of commercial egress stairs, monumental spiral staircases, industrial platforms, guardrails, and equipment supports.',
    deliverables: [
      'Stringer & Tread Layout Drawings',
      'Handrail & Guardrail Fabrication Views',
      'Equipment Skids & Cage Ladder Assemblies',
      'Field Bolt & Anchor Placement Drawings'
    ],
    software: ['Tekla Structures', 'Advance Steel', 'SolidWorks'],
    benefits: [
      'Architectural Accuracy & Precision Aesthetics',
      'Compliance with OSHA & IBC Safety Codes',
      'Easy Modular Modular Assembly'
    ],
    color: '#4F46E5'
  },
  {
    id: 'bim-coordination',
    title: 'BIM Coordination & Clash Detection',
    subtitle: 'Multi-Discipline 4D/5D Spatial Integration',
    iconName: 'ShieldAlert',
    description: 'Full BIM federation resolving spatial clashes between structural steel, MEP ductwork, piping, architectural facades, and concrete cores prior to fabrication.',
    deliverables: [
      'Federated Navisworks BIM Models (.nwd)',
      'Matrix Clash Detection & Resolution Reports',
      '4D Construction Sequencing Animations',
      'COBie Asset Management Data Integration'
    ],
    software: ['Navisworks Manage', 'BIM 360', 'Revizto', 'Trimble Connect'],
    benefits: [
      'Zero Site Rework Caused by Trade Interferences',
      'Synchronized Construction Master Schedules',
      'Reduced RFIs and Site Delay Claims'
    ],
    color: '#00D4FF'
  },
  {
    id: 'fabrication-drawings',
    title: 'Shop & Erection Drawings',
    subtitle: 'Production-Ready Shop Packs & Field Erection Guides',
    iconName: 'FileText',
    description: 'Meticulously formatted shop assembly drawings containing single-part sheets, erection marks, field weld details, and center-of-gravity hoist specifications.',
    deliverables: [
      'Single-Part & Assembly Shop Drawings',
      'Erection Key Plans with Crane Lift Radii',
      'Field Bolt Lists & Anchor Bolt Placement Sheets',
      'Shipping Manifests & Bundle Packing Plans'
    ],
    software: ['Tekla Structures', 'AutoCAD', 'Advance Steel'],
    benefits: [
      'Streamlined Shop Shop Production',
      'Clear Field Erection Guidance for Riggers',
      'Traceable Heat Number & Material Grade Records'
    ],
    color: '#FF8C00'
  }
];
