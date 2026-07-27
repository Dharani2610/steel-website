import type { SoftwareTech } from '../types';

export const techStackData: SoftwareTech[] = [
  {
    id: 'tekla',
    name: 'Tekla Structures',
    category: '3D BIM Detailing & Modeling',
    logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=200',
    description: 'Industry-standard 3D structural BIM software for multi-user steel detailing, automated shop drawings, and direct CNC integration.',
    features: ['Multi-user live model sharing', 'Custom parametric component API', 'Direct DSTV CNC exports', 'IFC 4.0 OpenBIM compliance'],
    badgeColor: '#00D4FF'
  },
  {
    id: 'sds2',
    name: 'SDS2 Steel Detailing',
    category: 'Intelligent Connection Modeling',
    logo: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=200',
    description: 'Automated steel detailing engine built with embedded AISC connection intelligence and real-time erection safety checks.',
    features: ['Automated framing connection logic', 'Load planning & shipping optimizer', 'AISC & CISC design check engine'],
    badgeColor: '#FF8C00'
  },
  {
    id: 'revit',
    name: 'Autodesk Revit',
    category: 'BIM Architectural & Structural Coordination',
    logo: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=80&w=200',
    description: 'Enterprise building information modeling platform for seamless spatial coordination between structural steel, concrete, and MEP trades.',
    features: ['Bi-directional Tekla link', 'Parametric rebar & structural families', 'COBie asset parameter management'],
    badgeColor: '#4F46E5'
  },
  {
    id: 'navisworks',
    name: 'Autodesk Navisworks',
    category: '4D/5D BIM Clash Detection',
    logo: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=200',
    description: '3D model federation tool used to detect spatial interferences, run 4D construction schedule simulations, and verify field clearances.',
    features: ['Automated matrix clash detection', '4D Timeline Gantt integration', 'Point cloud laser scan overlay'],
    badgeColor: '#00D4FF'
  },
  {
    id: 'idea-statica',
    name: 'IDEA Statica',
    category: '3D FEA Connection Engineering',
    logo: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=200',
    description: 'Component-based Finite Element Analysis (CBFEM) software for non-standard, heavy moment and seismic steel connection design.',
    features: ['Non-linear stress/strain calculation', 'Buckling & stiffness analysis', 'Code check to AISC/Eurocode/CISC'],
    badgeColor: '#FF8C00'
  },
  {
    id: 'autocad',
    name: 'AutoCAD Structural',
    category: '2D Engineering Drafting',
    logo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=200',
    description: 'Precision CAD drafting engine for specialized anchor bolt setting plans, site layout grids, and shop detail overlays.',
    features: ['DWG/DXF native compatibility', 'Custom LISP automation scripts', 'High-density vector graphics'],
    badgeColor: '#4F46E5'
  }
];
