
import React from 'react';
import { RESUME_DATA } from '../constants';
import Section from './Section';
import { BriefcaseIcon, CheckIcon } from './Icons';

interface ExperienceProps {
  id: string;
}

const Experience: React.FC<ExperienceProps> = ({ id }) => {
  return (
    <Section title="Professional Experience" id={id}>
      <div className="relative border-l-2 border-gray-700/50 pl-8 space-y-12">
        <div className="absolute -left-[1.35rem] top-2 h-full w-px bg-gradient-to-b from-sky-400 via-sky-400 to-transparent"></div>
        {RESUME_DATA.experience.map((job, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[2.7rem] top-0.5 transform -translate-x-1/2">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center ring-4 ring-gray-900">
                <BriefcaseIcon className="w-5 h-5 text-sky-400" />
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 shadow-lg backdrop-blur-sm border border-gray-700/50">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                    <p className="text-sm text-gray-400 mt-1 sm:mt-0">{job.period}</p>
                </div>
                <h4 className="text-lg font-semibold text-sky-400 mb-4">{job.company}</h4>
                <ul className="space-y-3 text-gray-300">
                    {job.description.map((point, i) => (
                    <li key={i} className="flex items-start">
                        <CheckIcon className="w-4 h-4 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                        <span>{point}</span>
                    </li>
                    ))}
                </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;