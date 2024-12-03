import React, { useState, useEffect } from 'react';
import { LineChart, Users, Brain, FlaskConical } from 'lucide-react';
import { theme, classes } from '../../utils/theme';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const impactMetrics = [
    {
      icon: <LineChart className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Analytics Leadership",
      value: "7+ years",
      description: "Data strategy & implementation"
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Team Leadership",
      value: "5 member team",
      description: "Leading product analytics"
    },
    {
      icon: <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Product Analytics & Experimentation",
      value: "100+ tests",
      description: "Data-driven product decisions"
    },
    {
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Technical Solutions",
      value: "End-to-End",
      description: "Analytics & Architecture"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className={`${theme.section.wrapper} min-h-screen`}>
      <div className={`${theme.section.background.hero} w-full h-full`}>
        <div className={`${theme.section.inner} px-4 sm:px-6`}>
          <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-8 sm:py-12">
            <div className="space-y-8 sm:space-y-12">
              {/* Header Section */}
              <div className={`space-y-6 text-center transform transition-all duration-${theme.animation.slow} 
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className={`${classes.heading.h1} text-accent-core-600 text-3xl sm:text-4xl md:text-5xl`}>
                  Rohin Attrey
                </h1>
                <h2 className="text-xl sm:text-2xl text-white">
                  Analytics Professional & Data Scientist
                </h2>
                <p className="text-base sm:text-lg text-white max-w-2xl mx-auto">
                  Building solutions with data.
                </p>
              </div>

              {/* Impact Metrics Grid */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 transform transition-all duration-${theme.animation.slow} delay-300
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {impactMetrics.map((metric, index) => (
                  <div 
                    key={metric.title}
                    className={`${theme.card.base} ${theme.card.hover} p-6 transform transition-all duration-500
                      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="text-accent-core-600 mb-4">
                      {metric.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-white font-semibold">{metric.title}</h3>
                      <p className="text-xl sm:text-2xl font-bold text-accent-core-600">{metric.value}</p>
                      <p className="text-xs sm:text-sm text-white">{metric.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Current Role */}
              <div className={`text-center transform transition-all duration-${theme.animation.slow} delay-700
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className={`inline-block ${theme.card.base} rounded-full px-4 sm:px-6 py-2 sm:py-3`}>
                  <p className="text-sm sm:text-base text-white">
                    Currently leading Product & Analytics at{' '}
                    <span className="font-semibold text-accent-core-600">Kijiji</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;