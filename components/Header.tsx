import React from 'react';
import { RESUME_DATA } from '../constants';
import { LocationIcon, MailIcon, LinkedInIcon, GitHubIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
      <div>
        <div className="relative">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">{RESUME_DATA.name}</h1>
          <div className="absolute top-0 -right-4 h-4 w-4 bg-sky-400 rounded-full animate-ping"></div>
          <div className="absolute top-0 -right-4 h-4 w-4 bg-sky-400 rounded-full"></div>
        </div>
        <p className="mt-2 text-xl text-sky-400 font-semibold">{RESUME_DATA.title}</p>
      </div>
      <div className="flex flex-col items-start md:items-end space-y-2 text-gray-400 text-sm">
        <div className="flex items-center space-x-2">
          <LocationIcon className="w-4 h-4 text-sky-400" />
          <span>{RESUME_DATA.contact.location}</span>
        </div>
        <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex items-center space-x-2 hover:text-sky-400 transition-colors">
          <MailIcon className="w-4 h-4 text-sky-400" />
          <span>{RESUME_DATA.contact.email}</span>
        </a>
         <a href={`https://${RESUME_DATA.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-sky-400 transition-colors">
          <LinkedInIcon className="w-4 h-4 text-sky-400" />
          <span>{RESUME_DATA.contact.linkedin}</span>
        </a>
        <a href={`https://${RESUME_DATA.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-sky-400 transition-colors">
          <GitHubIcon className="w-4 h-4 text-sky-400" />
          <span>{RESUME_DATA.contact.github}</span>
        </a>
      </div>
    </header>
  );
};

export default Header;