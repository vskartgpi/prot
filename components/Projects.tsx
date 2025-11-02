import React from 'react';
import { RESUME_DATA } from '../constants';
import Section from './Section';
import { GitHubIcon, ExternalLinkIcon } from './Icons';

interface ProjectsProps {
  id: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  return (
    <Section title="Projects" id={id}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {RESUME_DATA.projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-800/50 rounded-lg p-6 shadow-lg border border-gray-700/50 flex flex-col justify-between hover:border-sky-400/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-sky-900/50 text-sky-300 text-xs font-mono px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-gray-700/50">
              {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
                <a 
                  href={project.liveDemoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-sm text-gray-300 hover:text-sky-400 transition-colors"
                >
                  <ExternalLinkIcon className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              )}
               {project.sourceCodeUrl && project.sourceCodeUrl !== '#' && (
                <a 
                  href={project.sourceCodeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-sm text-gray-300 hover:text-sky-400 transition-colors"
                >
                  <GitHubIcon className="w-4 h-4 mr-2" />
                  Source Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;