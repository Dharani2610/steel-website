import type { ProjectItem } from '../types';

export const portfolioData: ProjectItem[] = [
  {
    id: 'lumina-tower',
    name: 'The Lumina Skyscraper Tower',
    location: 'New York City, USA',
    steelWeight: '18,500 Tons',
    projectType: 'Commercial High-Rise (72 Floors)',
    software: ['Tekla Structures', 'IDEA Statica', 'Navisworks'],
    completionYear: '2025',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    description: 'Ultra-complex high-rise steel tower featuring an exterior diagonal steel diagrid, outrigger moment trusses, and 4-story high transfer girders carrying 72 residential floors over a subterranean subway transit hub.',
    memberCount: '42,800 Members',
    drawingCount: '6,400 Shop Drawings',
    testimonial: {
      quote: 'APEX STEEL delivered flawless 3D models for our diagrid connections. Their Tekla detailing saved us over 12 weeks of shop fabrication time.',
      author: 'Marcus Vance',
      role: 'VP of Structural Operations',
      company: 'Skanska USA Building'
    }
  },
  {
    id: 'titan-arena',
    name: 'Titan National Sports Arena',
    location: 'Melbourne, Australia',
    steelWeight: '14,200 Tons',
    projectType: 'Sports & Entertainment Dome',
    software: ['SDS2', 'RISA 3D', 'Navisworks'],
    completionYear: '2024',
    heroImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&q=80&w=1200',
    description: 'Long-span retractable roof structure spanning 180 meters without intermediate columns. Detailing included node pin connections, motorized truss tracks, and custom curved box girders.',
    memberCount: '31,500 Members',
    drawingCount: '4,850 Shop Drawings',
    testimonial: {
      quote: 'The accuracy of APEX STEEL on the long-span roof trusses was exceptional. Every single pin connection fit perfectly on the first crane lift.',
      author: 'Sarah Jenkins',
      role: 'Project Director',
      company: 'Multiplex Engineering'
    }
  },
  {
    id: 'hyperion-green-hydrogen',
    name: 'Hyperion Green Energy Refinery',
    location: 'Rotterdam, Netherlands',
    steelWeight: '24,800 Tons',
    projectType: 'Heavy Industrial Energy Plant',
    software: ['Tekla Structures', 'Revit', 'Advance Steel'],
    completionYear: '2025',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200',
    description: 'Massive chemical refinery steel framing consisting of heavy piperacks, equipment support skids, elevated flare stacks, and multi-tier access platforms operating under severe marine corrosive conditions.',
    memberCount: '58,000 Members',
    drawingCount: '9,100 Shop Drawings',
    testimonial: {
      quote: 'BIM coordination and clash detection were crucial for this hydrogen plant. APEX detected 1,200+ clashes before fabrication began.',
      author: 'Dr. Aris Thorne',
      role: 'Chief Technical Officer',
      company: 'Fluor Europe'
    }
  },
  {
    id: 'orion-international-airport',
    name: 'Orion International Airport Terminal 4',
    location: 'Dubai, UAE',
    steelWeight: '32,000 Tons',
    projectType: 'Aviation Infrastructure',
    software: ['Tekla Structures', 'IDEA Statica', 'Trimble Connect'],
    completionYear: '2024',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200',
    description: 'Curvilinear wave roof canopy framing supported by organic tree-column assemblies, long-span skylight frames, and cantilevered boarding bridge steelwork.',
    memberCount: '74,200 Members',
    drawingCount: '11,400 Shop Drawings',
    testimonial: {
      quote: 'Their connection design team solved complex multi-planar tube connections that other detailing firms claimed were impossible.',
      author: 'Tariq Al-Mansoor',
      role: 'Lead Infrastructure Manager',
      company: 'Consolidated Contractors Company'
    }
  },
  {
    id: 'valkyrie-suspension-bridge',
    name: 'Valkyrie Strait Viaduct & Bridge',
    location: 'Vancouver, Canada',
    steelWeight: '16,700 Tons',
    projectType: 'Transportation Infrastructure',
    software: ['SDS2', 'AutoCAD', 'Navisworks'],
    completionYear: '2023',
    heroImage: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=1200',
    description: 'High-seismic zone steel arch bridge detailing including orthotropic steel deck plates, cable-stay anchor nodes, and heavy box girder splices.',
    memberCount: '28,900 Members',
    drawingCount: '4,200 Shop Drawings',
    testimonial: {
      quote: 'Zero field RFIs on the main span splices. APEX STEEL sets the standard for bridge detailing.',
      author: 'David Sterling',
      role: 'Senior VP Infrastructure',
      company: 'PCL Construction'
    }
  }
];
