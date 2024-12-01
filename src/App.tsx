// src/App.tsx
import React from 'react';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

// Create a reusable section wrapper
interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className = '' }) => (
  <section 
    id={id} 
    className={`min-h-screen py-20 ${className}`}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section - Full width */}
      <Hero />
      
      {/* About Section */}
      <SectionWrapper id="about" className="bg-white dark:bg-gray-900">
        <About />
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper id="skills" className="bg-gray-50 dark:bg-gray-800">
        <Skills />
      </SectionWrapper>


      {/* Experience Section */}
      <SectionWrapper id="experience" className="bg-gray-50 dark:bg-gray-800">
        <Experience />
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact" className="bg-white dark:bg-gray-900">
        <Contact />
      </SectionWrapper>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Rohin Attrey. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/rohin-attrey/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rattrey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;