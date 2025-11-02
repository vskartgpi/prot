
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-white mb-8 tracking-wide relative pb-3">
        {title}
        <span className="absolute bottom-0 left-0 w-16 h-1 bg-sky-400 rounded"></span>
      </h2>
      {children}
    </section>
  );
};

export default Section;