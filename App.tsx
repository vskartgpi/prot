import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import AiAssistant from './components/AiAssistant';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 antialiased">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <Header />
          <main className="mt-16 space-y-20">
            <About id="about" />
            <AiAssistant id="ai-assistant" />
            <Experience id="experience" />
            <Projects id="projects" />
            <Skills id="skills" />
            <Education id="education" />
            <Contact id="contact" />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;