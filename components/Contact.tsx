import React, { useState } from 'react';
import { RESUME_DATA } from '../constants';
import Section from './Section';
import { SendIcon } from './Icons';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${RESUME_DATA.contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };
  
  return (
    <Section title="Get In Touch" id={id}>
      <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg shadow-2xl p-6 md:p-8">
        <p className="text-lg text-gray-300 mb-6 text-center">
          Have a question or want to work together? Feel free to reach out.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition w-full"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition w-full"
            />
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition w-full"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={5}
            className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition w-full resize-none"
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-sky-500 disabled:bg-gray-600 transition-transform transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
            >
              <span>Send Message</span>
              <SendIcon className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Contact;