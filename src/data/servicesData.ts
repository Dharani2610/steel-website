import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'structural-detailing',
    title: 'Structural Steel Detailing',
    subtitle: 'High-Precision 3D Modeling & Production Drawings',
    iconName: 'Box',
    description: 'Comprehensive 3D modeling and detailing of heavy structural steel frameworks adhering to AISC, NISD, BS, Eurocode, and AS/NZS standards with guaranteed clash-free erection.',
    fullDescription: 'CALDIM delivers multi-disciplinary structural steel detailing for complex industrial complexes, commercial towers, and infrastructure projects worldwide. Leveraging industry-leading Tekla Structures and SDS2 platforms, our detailing teams transform complex structural engineering calculations into production-ready 3D BIM models and 2D fabrication shop packages.',
    capabilities: [
      'Multi-tier structural framing 3D modeling and clash resolution',
      'NC / DSTV file generation directly tailored for CNC drill & saw lines',
      'Fully dimensioned anchor bolt plans, column schedules, and beam elevation drawings',
      'Field erection framing diagrams complete with bolt lists and assembly piece marks'
    ],
    deliverables: [
      'Master Tekla Structures / SDS2 3D Model',
      'Anchor Bolt Layout Plans & Embedded Plate Schedules',
      'Single-Part (Fittings) & Assembly Shop Drawings (PDF & DWG)',
      'NC / DSTV Data Files for Automated Machinery',
      'Comprehensive Bill of Materials (BOM) & Material Take-Offs'
    ],
    software: ['Tekla Structures', 'SDS2', 'AutoCAD', 'Navisworks Manage'],
    applications: [
      'Heavy Industrial & Chemical Refineries',
      'Commercial High-Rise Steel Frames',
      'Sports Arenas & Long-Span Roof Trusses',
      'Data Centers & Mission-Critical Buildings'
    ],
    processSteps: [
      'Input Drawing & RFQ Analysis',
      '3D BIM Model Construction & Connection Integration',
      'Internal QA/QC Check against Design Criteria',
      'Client / Engineer Approval Submittal',
      'Final CNC & Shop Drawing Package Delivery'
    ],
    faqs: [
      {
        question: 'Which international steel codes do your detailing teams follow?',
        answer: 'Our engineers and detailers strictly comply with AISC (American Institute of Steel Construction), NISD, BS EN 1090 / Eurocode 3, and AS/NZS standards, depending on project geography.'
      },
      {
        question: 'Do you provide CNC data files for automated steel fabrication shops?',
        answer: 'Yes, every detailing package includes fully validated NC/DSTV files, DXF profiles for plate cutting, and automated Kiss format files compatible with all major CNC machinery.'
      }
    ],
    benefits: [
      '99.8% Erection Accuracy Guarantee',
      'Accelerated Fabrication Timelines by up to 35%',
      'Seamless CNC Machinery Data Integration'
    ],
    color: '#0F2744'
  },
  {
    id: 'connection-design',
    title: 'Connection Engineering & Calculations',
    subtitle: 'PE/SE Stamped Calculations & Finite Element Analysis',
    iconName: 'Cpu',
    description: 'Advanced structural connection engineering for heavy moment, shear, brace, and truss joints complete with PE/SE stamped calculation sheets for US states and global jurisdictions.',
    fullDescription: 'Our licensed Structural Engineers (PE/SE) specialize in solving high-stress structural steel connections. Utilizing FEA (Finite Element Analysis) via IDEA Statica and RAM Connection, we produce structural connection design calculations that minimize material weight while streamlining shop fabrication and field bolting.',
    capabilities: [
      'PE/SE Professional Engineer Seal & Signature across US states & Canada',
      'Complex 3D FEA stress analysis for non-standard geometric joints',
      'Seismic moment frames (SMF/IMF) and braced frame connection design',
      'High-strength bolt, weld layout, and stiffener plate optimization'
    ],
    deliverables: [
      'PE/SE Stamped Design Calculation Packages',
      '3D Connection Finite Element Analysis (FEA) Stress Reports',
      'Moment Connection Stiffener & Gusset Plate Drawings',
      'High-Strength Bolt & Weld Inspection Protocols'
    ],
    software: ['IDEA Statica', 'RAM Connection', 'RISA 3D', 'Tekla Tedds'],
    applications: [
      'Seismic Resilient Moment Frames',
      'Heavy Heavy Industrial Equipment Skids',
      'Long-Span Roof Trusses & Bridge Girders',
      'Wind & Seismic Brace Connections'
    ],
    processSteps: [
      'Structural Load Effect Review (Member End Forces)',
      'Iterative FEA & Code Calculation Check (AISC 360 / 341)',
      'Value Engineering for Fabrication Optimization',
      'PE/SE Seal & Calculation Package Stamping',
      'Integration into 3D Steel Detailing Model'
    ],
    faqs: [
      {
        question: 'In which jurisdictions can CALDIM provide PE/SE seals?',
        answer: 'We maintain registered Professional Engineer (PE) and Structural Engineer (SE) coverage across US states, Canada, and international structural code frameworks.'
      },
      {
        question: 'How does connection optimization save costs?',
        answer: 'By value-engineering connections for shop weld efficiency and standardized plate thicknesses, we reduce overall steel tonnage and field erection labor.'
      }
    ],
    benefits: [
      'Optimized Steel Weight via Value Engineering',
      'Full Compliance with AISC 360, 341 & AWS D1.1',
      'Minimized Field Erection Bolting & Welding'
    ],
    color: '#3A6C8C'
  },
  {
    id: 'tekla-structures',
    title: 'Tekla Structures 3D BIM Detailing',
    subtitle: 'Enterprise Multi-User Parametric BIM Workflows',
    iconName: 'Layers',
    description: 'Expert execution of multi-user Tekla Model Sharing environments for ultra-large industrial, commercial, and infrastructure structural steel detailing.',
    fullDescription: 'CALDIM leverages Trimble Tekla Structures to drive parametric 3D BIM modeling for megastructures. Our team handles complex spatial geometries, custom component development, and real-time collaboration with general contractors, fabricators, and erectors.',
    capabilities: [
      'Real-time Tekla Model Sharing across multi-national engineering teams',
      'Custom parametric component development for specialized joints',
      'Automated revision management and revision cloud tracking',
      'Direct export of IFC, COBie, and FabTrol/StruMIS data models'
    ],
    deliverables: [
      'Multi-User Shared Tekla Model (.db1 & Trimble Connect)',
      'Custom Components & Parametric Connection Libraries',
      'Automated Shop & Assembly Drawings (.dwg / .pdf)',
      'IFC & COBie BIM Exchange Files'
    ],
    software: ['Tekla Structures', 'Tekla Model Sharing', 'Trimble Connect'],
    applications: [
      'Stadiums & Convention Centers',
      'Automotive & Aerospace Manufacturing Facilities',
      'Power Plants & Energy Infrastructure',
      'Commercial High-Rise Towers'
    ],
    processSteps: [
      'BIM Execution Plan (BEP) Alignment',
      'Parametric Geometry & Grid Setup',
      'Multi-User Structural Framing Model Creation',
      'Clash Federation & Interoperability Verification',
      'Automated Drawing & Data Export'
    ],
    faqs: [
      {
        question: 'Can your team work directly inside our existing Tekla Model Sharing setup?',
        answer: 'Yes, we seamlessly integrate into client Tekla Model Sharing environments, matching custom attributes, naming conventions, and drawing presentation standards.'
      }
    ],
    benefits: [
      'Real-Time Multi-Engineer Collaboration',
      'Direct Export to Steel Management Systems',
      'Automated Revision Management'
    ],
    color: '#0F2744'
  },
  {
    id: 'sds2-detailing',
    title: 'SDS2 Steel Detailing & Automated Connection Intelligence',
    subtitle: 'Automated Framing Connection Verification & Modeling',
    iconName: 'Workflow',
    description: 'Specialized 3D steel detailing using SDS2 connection intelligence for rapid framing execution and heavy industrial framing projects.',
    fullDescription: 'Utilizing SDS2 connection intelligence, CALDIM automates framing connection design while creating high-density steel models. This workflow ensures design rules are validated as members are detailed, drastically shortening engineering lead times.',
    capabilities: [
      'Automated AISC code checking within 3D modeling workspace',
      'Heavy industrial framing and pipe rack module detailing',
      'CNC saw, drill line, and robotic welding machine interface files',
      'Automated erection sequencing and shippable bundle organization'
    ],
    deliverables: [
      'SDS2 3D Steel Frame Master Models',
      'Framing Verification Drawings & Member Erection Views',
      'CNC Saw & Drill Line Export Files',
      'Shippable Assembly & Sub-Assembly Bundles'
    ],
    software: ['SDS2 Steel', 'SDS2 Load Planning', 'Navisworks'],
    applications: [
      'Heavy Industrial Power Stations',
      'Mining & Bulk Material Handling Plants',
      'Commercial Steel Buildings',
      'Modular Process Skids'
    ],
    processSteps: [
      'SDS2 Job Setup & Connection Rules Definition',
      'Structural Framing & Secondary Steel Modeling',
      'Automated Connection Verification',
      'Drawing Generation & Dimension Validation',
      'CNC & ERP Package Transmittal'
    ],
    faqs: [
      {
        question: 'What advantages does SDS2 offer for industrial projects?',
        answer: 'SDS2 provides built-in connection logic that calculates bolt clearance, erection access, and strength criteria simultaneously with 3D modeling.'
      }
    ],
    benefits: [
      'Automated Code Compliance Verification',
      'Reduced Detailing Cycle Times',
      'Flawless Fit-Up on Construction Sites'
    ],
    color: '#3A6C8C'
  },
  {
    id: 'rebar-detailing',
    title: '3D Rebar Detailing & Bar Bending Schedules',
    subtitle: 'Concrete Reinforced Bar Placement & Quantities',
    iconName: 'Grid',
    description: 'Comprehensive 3D rebar placement modeling, automated Bar Bending Schedules (BBS), and coupler layout plans for heavy foundation slabs, cores, and civil structures.',
    fullDescription: 'Accurate reinforced concrete detailing prevents rebar congestion and steel placement errors on site. CALDIM provides detailed 3D rebar placement models and automated Bar Bending Schedules (BBS) adhering to ACI, BS 8666, and Eurocode standards.',
    capabilities: [
      '3D rebar modeling for heavy foundation mats, shear walls, and bridge piers',
      'Automated Bar Bending Schedules (BBS) eliminating site steel waste',
      'Congestion checks at complex beam-column and post-tensioning joints',
      'BVBS and aSa machine data export for automated shear/bender lines'
    ],
    deliverables: [
      '3D Reinforced Concrete BIM Models',
      'Bar Bending Schedules (BBS) to ACI / BS Standards',
      'Rebar Placement & Lap Splice Layout Drawings',
      'aSa & BVBS Machine Cut/Bend Export Files'
    ],
    software: ['Tekla Structures Rebar', 'Revit Structure', 'RebarCAD'],
    applications: [
      'Nuclear & Hydroelectric Dam Foundations',
      'High-Rise Building Concrete Cores',
      'Bridge Abutments & Viaduct Piers',
      'Subsurface Heavy Retaining Walls'
    ],
    processSteps: [
      'Structural Concrete Calc & Rebar Standard Review',
      '3D Rebar Placement & Splice Staggering',
      'Congestion & Clearance Audit',
      'BBS Schedule Generation',
      'Bender Machine File Output'
    ],
    faqs: [
      {
        question: 'How do 3D rebar models resolve site placement issues?',
        answer: 'By modeling every rebar in 3D, we identify congestion at beam-column nodes and mechanical coupler clashes before rebar is cut and bent.'
      }
    ],
    benefits: [
      'Zero Congestion at Beam-Column Joints',
      'Eliminated Field Steel Cutting Waste',
      'Accurate Concrete & Steel Quantity Tracking'
    ],
    color: '#D97706'
  },
  {
    id: 'misc-steel',
    title: 'Miscellaneous Metals & Architectural Steel',
    subtitle: 'Stairs, Handrails, Industrial Platforms & Egress Systems',
    iconName: 'Maximize',
    description: 'Intricate detailing of commercial egress stairs, monumental spiral staircases, industrial catwalks, platforms, handrails, and equipment framing.',
    fullDescription: 'Miscellaneous metal detailing requires high dimensional accuracy and adherence to safety codes (OSHA, IBC, ADA). CALDIM details commercial egress stairs, industrial catwalks, guardrails, ladders, and decorative steel frameworks with exact fabrication clarity.',
    capabilities: [
      'Commercial & architectural stair detailing (scissor, spiral, monumental)',
      'Industrial platform, catwalk, and cage ladder detailing to OSHA standards',
      'Handrail, guardrail, and glass railing assembly sheet creation',
      'Field bolt and anchor placement template development'
    ],
    deliverables: [
      'Stringer & Tread Fabrication Layout Drawings',
      'Handrail & Guardrail Assembly Views',
      'Equipment Skids & Cage Ladder Assemblies',
      'Field Bolt & Anchor Placement Drawings'
    ],
    software: ['Tekla Structures', 'Advance Steel', 'SolidWorks'],
    applications: [
      'Commercial Building Emergency Egress Towers',
      'Industrial Process Plant Catwalks & Mezzanines',
      'Airport Terminals & Transit Hubs',
      'Architectural Glass & Steel Atriums'
    ],
    processSteps: [
      'Architectural Grid & Floor Elevation Verification',
      'Stair Tread / Stringer Geometry Calculation',
      '3D Assembly Modeling & Guardrail Detailing',
      'Field Anchorage Verification',
      'Shop Fabrication Pack Output'
    ],
    faqs: [
      {
        question: 'Do you design stairs to meet specific code compliance like OSHA and ADA?',
        answer: 'Yes, all stair stringers, tread risers, handrail heights, and clearance dimensions are strictly checked against OSHA, IBC, and ADA regulations.'
      }
    ],
    benefits: [
      'Architectural Accuracy & Precision Aesthetics',
      'Full Compliance with OSHA & IBC Safety Codes',
      'Easy Modular Modular Assembly'
    ],
    color: '#0F2744'
  },
  {
    id: 'bim-coordination',
    title: 'BIM Coordination & 3D Clash Resolution',
    subtitle: 'Multi-Discipline Spatial Integration & Pre-Construction Audit',
    iconName: 'ShieldAlert',
    description: 'Multi-trade BIM federation and spatial clash detection between structural steel, MEP ductwork, piping, architectural facades, and concrete cores.',
    fullDescription: 'Unresolved spatial clashes cause expensive field rework and schedule delays. CALDIM federates architectural, structural, and MEP models inside Navisworks Manage to detect, track, and resolve trade interferences long before steel fabrication starts.',
    capabilities: [
      'Federated Navisworks 3D BIM model creation and management',
      'Hard clash, clearance clash, and installation access audit reports',
      '4D construction schedule simulation and erection sequence planning',
      'COBie asset management metadata integration'
    ],
    deliverables: [
      'Federated Navisworks BIM Models (.nwd / .nwc)',
      'Matrix Clash Detection & Resolution Reports',
      '4D Construction Sequencing Animations',
      'COBie Asset Management Data Integration'
    ],
    software: ['Navisworks Manage', 'BIM 360', 'Revizto', 'Trimble Connect'],
    applications: [
      'Complex Healthcare Facilities',
      'High-Density Semiconductor Fabrication Plants',
      'Data Centers with Heavy Mechanical Piping',
      'Mixed-Use Commercial Developments'
    ],
    processSteps: [
      'Multi-Disciplinary Model Import & Alignment',
      'Automated Clash Matrix Execution',
      'Trade Coordination Meetings & RFI Clarifications',
      'Model Adjustment & Re-Audit',
      'Approved Clash-Free Federated Model Sign-Off'
    ],
    faqs: [
      {
        question: 'How early in the design cycle should BIM coordination start?',
        answer: 'BIM coordination delivers maximum ROI when initiated during schematic/design development, before structural fabrication packages are locked.'
      }
    ],
    benefits: [
      'Zero Site Rework Caused by Trade Interferences',
      'Synchronized Construction Master Schedules',
      'Drastically Reduced RFIs and Field Change Orders'
    ],
    color: '#3A6C8C'
  },
  {
    id: 'fabrication-drawings',
    title: 'Shop & Erection Drawing Packages',
    subtitle: 'Production-Ready Shop Packs & Rigging Guides',
    iconName: 'FileText',
    description: 'Meticulously organized shop assembly drawings containing single-part sheets, erection key plans, field weld details, and center-of-gravity lift markings.',
    fullDescription: 'The true test of detailing quality is shop floor readability and field erection speed. CALDIM produces complete shop and erection drawing packages engineered to eliminate ambiguity for fabricator shop floors and field riggers.',
    capabilities: [
      'Single-part fitting sheets formatted for shop plate and angle cutters',
      'Sub-assembly and main assembly drawings with full bill of materials',
      'Erection key plans complete with bolt lists, crane lift radii, and field weld symbols',
      'Shipping manifests and shipping bundle packing lists'
    ],
    deliverables: [
      'Single-Part & Assembly Shop Drawings',
      'Erection Key Plans with Crane Lift Radii',
      'Field Bolt Lists & Anchor Bolt Placement Sheets',
      'Shipping Manifests & Bundle Packing Plans'
    ],
    software: ['Tekla Structures', 'AutoCAD', 'Advance Steel'],
    applications: [
      'Heavy Steel Fabrication Shops',
      'Modular Construction Yard Assemblies',
      'Field Steel Erection Riggers',
      'Quality Inspection & QC Audit Departments'
    ],
    processSteps: [
      'Model Assembly & Mark Number Assignment',
      'Drawing Sheet Layout & Scaling Optimization',
      'Dimension & Weld Symbol Quality Audit',
      'Bill of Material Cross-Verification',
      'Final Transmittal Delivery'
    ],
    faqs: [
      {
        question: 'Can your drawing sheets be customized to our shop title block standards?',
        answer: 'Yes, we adapt title blocks, layer structures, drawing sizes (ANSI / ISO), and dimensioning standards to match client shop preferences.'
      }
    ],
    benefits: [
      'Streamlined Shop Production',
      'Clear Field Erection Guidance for Riggers',
      'Traceable Heat Number & Material Grade Records'
    ],
    color: '#D97706'
  }
];
