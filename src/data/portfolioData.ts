import type { ProjectItem } from '../types';

export const portfolioData: ProjectItem[] = [
  {
    id: 'apex-industrial-complex',
    name: 'Apex Petrochemical Refining Facility',
    location: 'Houston, Texas, USA',
    steelWeight: '18,400 Tons',
    projectType: 'Industrial / Heavy Process',
    software: ['Tekla Structures', 'IDEA Statica', 'Navisworks Manage'],
    completionYear: '2025',
    heroImage: '/business-sectors.png',
    description: 'Ultra-heavy structural steel detailing and complex PE/SE connection engineering for a multi-tiered refinery process unit containing heavy pipe racks and equipment skids.',
    challenge: 'Intricate moment connection loading combined with stringent 3D clash tolerances near pre-engineered process skids.',
    solution: 'Engineered custom 3D FEA moment connection nodes in IDEA Statica and synchronized Tekla multi-user detailing across 14 engineers.',
    outcome: 'Zero field fit-up errors across 18,400 tons of structural framing and 100% on-time shop drawing delivery.',
    memberCount: '42,500 Structural Members',
    drawingCount: '3,800 Shop Drawings',
    testimonial: {
      quote: 'CALDIM delivered 18,400 tons of flawless steel drawings with zero shop re-cuts. Their PE connection calcs saved our team weeks during permit approval.',
      author: 'Marcus Vance',
      role: 'VP of Structural Fabrication',
      company: 'Gulf Coast Heavy Steel Inc.'
    }
  },
  {
    id: 'meridian-tower',
    name: 'Meridian Commercial Skyscraper',
    location: 'Chicago, Illinois, USA',
    steelWeight: '12,600 Tons',
    projectType: 'Commercial / High-Rise',
    software: ['Tekla Structures', 'RAM Connection', 'Revit'],
    completionYear: '2024',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: '54-story commercial tower featuring outrigger trusses, composite floor framing, and monumental entrance atrium steel detailing.',
    challenge: 'Extremely tight erection schedule requiring accelerated detailing transmittals and 4D construction sequencing.',
    solution: 'Deployed automated SDS2 framing connection intelligence and Tekla drawing generation rules to produce 250 drawings weekly.',
    outcome: 'Erection completed 3 weeks ahead of master schedule with zero field rework claims.',
    memberCount: '28,900 Structural Members',
    drawingCount: '2,600 Shop Drawings',
    testimonial: {
      quote: 'The precision of CALDIM’s 3D erection drawings allowed our riggers to set steel seamlessly in downtown Chicago conditions.',
      author: 'David Sterling',
      role: 'Project Executive',
      company: 'Midwest General Erectors'
    }
  },
  {
    id: 'pacific-arch-bridge',
    name: 'Pacific Skyway Arch Bridge Replacement',
    location: 'Seattle, Washington, USA',
    steelWeight: '9,800 Tons',
    projectType: 'Bridges & Heavy Civil',
    software: ['Tekla Structures', 'IDEA Statica', 'AutoCAD'],
    completionYear: '2024',
    heroImage: '/projects.png',
    description: 'High-precision plate girder and arch tie connection detailing for a 4-lane structural steel bridge spanning tidal salt water.',
    challenge: 'Strict AASHTO fracture-critical weld requirements and complex curved box girder geometries.',
    solution: 'Utilized advanced Tekla parametric plate modeling and integrated NC/DSTV data directly into fabricator CNC plate processors.',
    outcome: 'Passed 100% non-destructive weld testing on first inspection and achieved flawless span closure.',
    memberCount: '11,200 Structural Members',
    drawingCount: '1,450 Shop Drawings'
  },
  {
    id: 'titan-data-center',
    name: 'Titan Enterprise Hyper-Scale Data Center',
    location: 'Ashburn, Virginia, USA',
    steelWeight: '7,400 Tons',
    projectType: 'Mission Critical & Tech Infrastructure',
    software: ['SDS2', 'Navisworks Manage', 'BIM 360'],
    completionYear: '2025',
    heroImage: '/products.png',
    description: 'Rapid-turnaround steel detailing and 3D BIM clash resolution for a 600,000 sq ft hyper-scale data facility with heavy MEP ceiling framing.',
    challenge: 'Intensive MEP trade integration required millimetric spatial coordination to avoid ceiling duct clashes.',
    solution: 'Conducted weekly federated BIM clash audits in Navisworks, resolving 420+ trade conflicts before shop drawing sign-off.',
    outcome: 'Zero trade conflicts during mechanical installation, saving estimated $650k in potential field modifications.',
    memberCount: '16,500 Structural Members',
    drawingCount: '1,890 Shop Drawings'
  }
];
