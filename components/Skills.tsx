
import React from 'react';
import { RESUME_DATA } from '../constants';
import Section from './Section';
import { CodeIcon } from './Icons';

interface SkillsProps {
  id: string;
}

const Skills: React.FC<SkillsProps> = ({ id }) => {
  return (
    <Section title="Skills" id={id}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESUME_DATA.skills.map((category, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg p-6 shadow-lg border border-gray-700/50 hover:border-sky-400/50 transition-colors duration-300">
            <h3 className="text-lg font-bold text-sky-400 mb-4 flex items-center">
              <CodeIcon className="w-5 h-5 mr-2" />
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span key={i} className="bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;