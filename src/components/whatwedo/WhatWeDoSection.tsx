import React from 'react';

interface WhatWeDoSectionProps {
  onRequestQuote?: () => void;
}

export const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({ onRequestQuote }) => {
  const cards = [
    {
      title: 'Business sectors',
      image: '/business-sectors.png',
      description:
        'CALDIM focuses on steel construction across four distinct business sectors: commercial, industrial, institutional, and multi-residential projects, delivering tailored solutions for each.',
      buttonText: 'Business sectors',
    },
    {
      title: 'Products',
      image: '/products.png',
      description:
        'Our wide range of products, including joists, decks, heavy and light structural steel, prefab steel buildings, hybrid structures, Elocone nuts, and custom solutions.',
      buttonText: 'Products',
    },
    {
      title: 'Expertise',
      image: '/expertise.png',
      description:
        'We offer expert advice in steel construction, with dedicated teams in BIM, pre-construction, design-build, engineering, detailing, drafting, project management, and fabrication.',
      buttonText: 'Expertise',
    },
    {
      title: 'Projects',
      image: '/projects.png',
      description:
        "CALDIM has a diverse portfolio across different business sectors. Every project is distinctive, showcasing CALDIM's expertise throughout international and domestic sites.",
      buttonText: 'Projects',
    },
  ];

  return (
    <section id="services" className="bg-[#F6F4EF] py-20 px-6 sm:px-12 md:px-16 w-full relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {cards.map((card, idx) => (
            <div key={idx} className="flex flex-col justify-between group">
              <div>
                {/* Section Title */}
                <h3 className="font-heading font-black text-3xl sm:text-4xl text-[#111827] mb-6 tracking-tight">
                  {card.title}
                </h3>

                {/* Card Image */}
                <div className="overflow-hidden rounded-3xl mb-6 shadow-md aspect-[4/3] bg-slate-200 border border-slate-200/60">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Description Paragraph */}
                <p className="font-body text-slate-600 text-sm leading-relaxed mb-8">
                  {card.description}
                </p>
              </div>

              {/* Blue Outline Pill Button */}
              <div>
                <button
                  onClick={onRequestQuote}
                  className="px-7 py-3 rounded-full border-2 border-[#0084FF] text-[#111827] font-heading font-bold text-sm bg-transparent hover:bg-[#0084FF] hover:text-white transition-all shadow-sm"
                >
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
