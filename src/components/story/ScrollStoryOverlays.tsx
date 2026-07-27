import React from 'react';
import type { StoryStage } from '../../types';
import { Cpu, ChevronDown, Download, Sparkles } from 'lucide-react';

interface ScrollStoryOverlaysProps {
  currentStage: StoryStage;
  onSelectStage: (stage: StoryStage) => void;
  onRequestQuote: () => void;
}

const STAGE_DETAILS: Record<StoryStage, { title: string; subtitle: string; callout: string; specs: string[] }> = {
  1: {
    title: 'Stage 1 – Empty Construction Site',
    subtitle: 'Blueprint Ground Grid & Survey Coordinates',
    callout: 'SITE SURVEY & ANCHOR LOCATION MATRIX',
    specs: ['Site Grid: 40m x 40m', 'Soil Bearing Capacity: 350 kPa', 'Laser Survey Accuracy: ±0.5 mm']
  },
  2: {
    title: 'Stage 2 – Concrete Foundation & Anchor Bolts',
    subtitle: 'Cast-in-Place Concrete Piers & Leveling Nuts',
    callout: 'ANCHOR BOLT CLUSTER SETTING PLAN',
    specs: ['Concrete Grade: f\'c = 45 MPa', 'Anchor Bolts: ASTM F1554 Gr 55', 'Projection Tolerance: 3 mm']
  },
  3: {
    title: 'Stage 3 – Columns Rise',
    subtitle: 'Heavy W-Shape Steel Columns Erected on Baseplates',
    callout: 'BASEPLATE & ANCHOR TORQUE SYNCHRONIZATION',
    specs: ['Steel Grade: ASTM A992 / S355JR', 'Column Mark: C101 - C104', 'Tightening Torque: 950 N·m']
  },
  4: {
    title: 'Stage 4 – Primary Girder Beams Assemble',
    subtitle: 'Horizontal Main Girders Flying into Flange Tabs',
    callout: 'MOMENT GIRDER SPLICE LOCK-IN',
    specs: ['Beam Mark: B201 - B208', 'Clear Span: 12.5 meters', 'Field Shear Tab: AWS D1.1 Weld']
  },
  5: {
    title: 'Stage 5 – Secondary Floor Framing',
    subtitle: 'Floor Joists & Purlin Framing Alignment',
    callout: 'DIAPHRAGM DECKING SUPPORT MATRIX',
    specs: ['Joist Spacing: 1,500 mm O.C.', 'Decking: 75mm Composite Metal Deck', 'Clearance Check: 100% Passed']
  },
  6: {
    title: 'Stage 6 – Bracing Installation',
    subtitle: 'Diagonal X-Bracing & Rigid Moment Connections',
    callout: 'LATERAL SEISMIC RIGIDITY ENGAGED',
    specs: ['Bracing Type: Heavy HSS Chevron', 'Gusset Plate: 20mm A36 Steel', 'Seismic Factor: R = 6.0']
  },
  7: {
    title: 'Stage 7 – Connection Design Deep-Dive',
    subtitle: '3D FEA Bolt Stress, Welds & Stiffener Plates',
    callout: 'PE/SE SEALED CONNECTION CALCULATIONS',
    specs: ['Bolts: A325 Heavy Hex Slip-Critical', 'Weld Inspection: 100% Ultrasonic (UT)', 'FEA Yield Ratio: 0.74 (Safe)']
  },
  8: {
    title: 'Stage 8 – Shop Drawings Overlay',
    subtitle: 'Automated 2D Blueprint HUD & Member BOM',
    callout: 'SYNCHRONIZED FABRICATION DRAWING PACK',
    specs: ['Drawing No: DWG-C101-REV3', 'BOM Export: NC / DSTV Format', 'Dimensioning: Dual Imperial & Metric']
  },
  9: {
    title: 'Stage 9 – BIM Coordination & Clash Scan',
    subtitle: 'Multi-Discipline Spatial Interference Resolution',
    callout: 'NAVISHWORKS MATRIX CLASH SCANNER',
    specs: ['Structural Steel: Cyan (Trade 1)', 'HVAC Ducting: Orange (Trade 2)', 'Clashes Resolved: 100% Pre-Fabrication']
  },
  10: {
    title: 'Stage 10 – Virtual Fabrication Process',
    subtitle: 'CNC Sawing, Robotic Welding & Coating Line',
    callout: 'AUTOMATED SMART FABRICATION LINE',
    specs: ['CNC Drill Line: 3-Axis Carbide', 'Robotic Welding: Active Arc Monitor', 'Coating: Inorganic Zinc Primer']
  },
  11: {
    title: 'Stage 11 – Site Erection & Crane Rigging',
    subtitle: 'Tower Crane Hoisting & Assembly Sequence',
    callout: 'CRANE PICK RADIUS & HOIST LOGISTICS',
    specs: ['Crane Capacity: 45 Ton Metre', 'Max Lift Height: 120 metres', 'Rigger Protocol: AISC Safety Specs']
  },
  12: {
    title: 'Stage 12 – Building Tomorrow With Precision',
    subtitle: 'Completed Illuminated Structural Steel Tower',
    callout: 'ENGINEERING EXCELLENCE ACHIEVED',
    specs: ['Total Steel Tonnage: 18,500 Tons', 'Drawing Accuracy: 99.8%', 'Zero Field Rework Recorded']
  }
};

export const ScrollStoryOverlays: React.FC<ScrollStoryOverlaysProps> = ({
  currentStage,
  onSelectStage,
  onRequestQuote
}) => {
  const info = STAGE_DETAILS[currentStage];

  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-6 md:p-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 pointer-events-auto bg-[var(--bg-secondary)]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#00D4FF]/30 glow-box-cyan">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00D4FF] animate-ping" />
          <span className="font-numbers text-xs text-[#00D4FF] font-bold tracking-widest">
            3D STORY // STAGE {currentStage.toString().padStart(2, '0')} OF 12
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1.5 pointer-events-auto bg-[var(--bg-secondary)]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#8C99A5]/20">
          {(Array.from({ length: 12 }, (_, i) => (i + 1) as StoryStage)).map((s) => (
            <button
              key={s}
              onClick={() => onSelectStage(s)}
              className={`w-6 h-6 rounded-full font-numbers text-[10px] transition-all ${
                currentStage === s
                  ? 'bg-[#00D4FF] text-black font-bold scale-110 shadow-[0_0_10px_#00D4FF]'
                  : 'text-[var(--text-muted)] hover:text-current hover:bg-current/10'
              }`}
              title={`Jump to Stage ${s}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end my-auto">
        <div className="lg:col-span-6 pointer-events-auto">
          <div className="glass-panel p-6 rounded-2xl border border-[#00D4FF]/20 shadow-2xl relative overflow-hidden animate-fadeIn">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00D4FF] to-[#4F46E5]" />
            
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#00D4FF]/10 text-[#00D4FF] font-numbers text-[11px] mb-3">
              <Cpu className="w-3.5 h-3.5" />
              {info.callout}
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-current tracking-wide">
              {info.title}
            </h2>
            <p className="font-body text-sm text-[var(--text-muted)] mt-1 mb-4">
              {info.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {info.specs.map((spec, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md bg-[var(--bg-primary)]/80 border border-[#8C99A5]/20 font-numbers text-xs text-current"
                >
                  {spec}
                </span>
              ))}
            </div>

            {currentStage === 12 && (
              <div className="mt-4 pt-4 border-t border-[#00D4FF]/20 flex flex-wrap gap-3">
                <button
                  onClick={onRequestQuote}
                  className="px-5 py-2.5 rounded-lg bg-[#00D4FF] text-black font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-white transition-colors shadow-[0_0_20px_#00D4FF]"
                >
                  <Sparkles className="w-4 h-4" />
                  Request Your Project Quote
                </button>
                <a
                  href="#contact"
                  className="px-4 py-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[#8C99A5]/30 text-current font-heading font-semibold text-xs flex items-center gap-2 hover:border-[#00D4FF] transition-colors"
                >
                  <Download className="w-4 h-4 text-[#00D4FF]" />
                  Download Company Profile
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col items-end gap-3 pointer-events-auto">
          <div className="glass-panel p-4 rounded-xl border border-[#8C99A5]/20 text-right max-w-sm">
            <span className="block font-numbers text-xs text-[#00D4FF] uppercase tracking-wider mb-1">
              ENGINEERING PARAMETERS
            </span>
            <div className="space-y-1 text-xs font-numbers text-current">
              <p>STANDARDS: <span className="font-bold">AISC 360-22 / AWS D1.1</span></p>
              <p>MODEL FORMAT: <span className="font-bold">Tekla .db1 / IFC4</span></p>
              <p>CLASH ACCURACY: <span className="text-[#00D4FF] font-bold">0.00 mm TOLERANCE</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <span className="font-numbers text-[10px] text-[var(--text-muted)] uppercase tracking-widest mb-1 animate-pulse">
          SCROLL TO CONTINUE STRUCTURAL BUILD
        </span>
        <ChevronDown className="w-5 h-5 text-[#00D4FF] animate-bounce" />
      </div>
    </div>
  );
};
