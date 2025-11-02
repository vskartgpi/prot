import React from 'react';
import { RESUME_DATA } from '../constants';
import Section from './Section';

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <Section title="About Me" id={id}>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-shrink-0">
          <img 
            src={RESUME_DATA.aboutMe.photoUrl} 
            alt="Karthikeya Gattupalli"
            className="w-48 h-48 rounded-full object-cover ring-4 ring-sky-400/50 shadow-lg"
          />
        </div>
        <div className="text-lg text-gray-300 leading-relaxed">
          <p>{RESUME_DATA.aboutMe.bio}</p>
        </div>
      </div>
    </Section>
  );
};

export default About;