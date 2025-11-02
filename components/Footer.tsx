
import React from 'react';
import { RESUME_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 text-center text-gray-500 text-sm">
      <p>&copy; {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.</p>
      <p className="mt-1">
        This interactive portfolio is powered by React, Tailwind CSS, and the Google Gemini API.
      </p>
    </footer>
  );
};

export default Footer;
