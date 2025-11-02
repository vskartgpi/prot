
import React from 'react';
import { RESUME_DATA } from '../constants';
import Section from './Section';
import { AcademicCapIcon } from './Icons';

interface EducationProps {
  id: string;
}

const Education: React.FC<EducationProps> = ({ id }) => {
  return (
    <Section title="Education" id={id}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {RESUME_DATA.education.map((edu, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg p-6 flex items-center space-x-4 shadow-lg border border-gray-700/50">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                <AcademicCapIcon className="w-6 h-6 text-sky-400"/>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
              <p className="text-gray-400">{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;