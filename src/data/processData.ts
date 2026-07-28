import type { ProcessStep } from '../types';

export const processData: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Input Analysis & Specification Alignment',
    subtitle: 'Scope Verification & Code Parameter Audit',
    description: 'Our senior engineering team reviews architectural drawings, structural calculations, specifications, and RFIs to establish project-wide modeling standards, grid systems, and title block templates.',
    deliverables: [
      'BIM Execution Protocol Alignment',
      'Structural Load & Material Grade Matrix',
      'Project RFQ & Query Log Initialization'
    ],
    qualityChecks: [
      'Architectural vs Structural Grid Audit',
      'Material Specification Verification (A992, A36, A500)',
      'Design Load Combination Cross-Check'
    ]
  },
  {
    stepNumber: '02',
    title: 'Connection Engineering & Calculations',
    subtitle: 'PE/SE Sealed Calculation Packages & FEA Modeling',
    description: 'Licensed Structural Engineers calculate member end-connection forces, performing 3D Finite Element Analysis (FEA) for complex moment and brace nodes to optimize steel tonnage and shop weld efficiency.',
    deliverables: [
      'PE/SE Stamped Design Calculations',
      '3D FEA Stress Distribution Plots',
      'Standardized Connection Plate Schemes'
    ],
    qualityChecks: [
      'AISC 360 / 341 Seismic & Wind Code Check',
      'AWS D1.1 Weld Design Verification',
      'Bolt Edge Distance & Clearance Validation'
    ]
  },
  {
    stepNumber: '03',
    title: '3D BIM Detailing & Assembly Construction',
    subtitle: 'Parametric Tekla / SDS2 Model Construction',
    description: 'Detailers construct the master 3D steel framework in Tekla Structures or SDS2, incorporating member sizes, connections, cut-outs, stiffeners, and erection piece marks in a single source of truth.',
    deliverables: [
      'Master 3D Structural Steel BIM Model',
      'Parametric Custom Components Library',
      'Initial IFC Federated Model Export'
    ],
    qualityChecks: [
      'Automated Zero-Clash Geometric Detection',
      'Member Center-Line & Work Point Verification',
      'Erection Clearance & Bolt Access Validation'
    ]
  },
  {
    stepNumber: '04',
    title: 'Independent QA/QC Technical Audit',
    subtitle: 'Multi-Level Check by Senior Checker Specialists',
    description: 'An independent Checker auditor reviews 100% of member dimensions, connections, hole patterns, and weld symbols against contract documents before drawing output release.',
    deliverables: [
      'Checker Red-Line Audit Report',
      'Quality Compliance Checklist Sign-Off',
      'RFI Transmittal Resolution Records'
    ],
    qualityChecks: [
      '100% Single-Part & Assembly Dimension Check',
      'Shipping Dimensions & Hot-Dip Galvanizing Hole Check',
      'Member Mark & Assembly Piece Alignment Audit'
    ]
  },
  {
    stepNumber: '05',
    title: 'NC Data & CNC Machine Export Generation',
    subtitle: 'Direct Interoperability with Steel Fabrication Lines',
    description: 'We extract NC/DSTV data files, DXF plate cutting profiles, and Kiss/FabTrol files, validating data compatibility with automated saw, drill, coping, and plate cutting CNC equipment.',
    deliverables: [
      'Verified NC / DSTV CNC Machine Files',
      'DXF Plasma & Laser Plate Cutting Files',
      'BOM / Material Take-Off Nesting Reports'
    ],
    qualityChecks: [
      'NC Machine Tool Path Simulation',
      'DXF Contour & Hole Diameter Audit',
      'Kiss / FabTrol ERP Import Test'
    ]
  },
  {
    stepNumber: '06',
    title: 'Final Transmittal & Field Erection Support',
    subtitle: 'Shop Drawing Package Release & Erection Rigging Guides',
    description: 'We deliver clean, high-resolution PDF shop packs, DWG erection plans, field bolt lists, and crane lift plans, providing continuous technical support through final field erection.',
    deliverables: [
      'Complete Shop Assembly & Fitting Packs (PDF & DWG)',
      'Erection Drawings & Anchor Placement Maps',
      'Field Bolt Lists & Shipping Bundle Manifests'
    ],
    qualityChecks: [
      'Document Version & Revision Tag Audit',
      'Transmittal Sheet Index Verification',
      'Dedicated Field Erection RFI Rapid Response'
    ]
  }
];
