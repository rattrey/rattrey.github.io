import React, { useState, useEffect } from 'react';
import { LineChart, Users, Brain, FlaskConical } from 'lucide-react';
import { theme, classes } from '../../utils/theme';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const impactMetrics = [
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Analytics Leadership",
      value: "7+ years",
      description: "Data strategy & implementation"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      value: "5 member team",
      description: "Leading product analytics"
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Product Analytics & Experimentation",
      value: "100+ tests",
      description: "Data-driven product decisions"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Technical Solutions",
      value: "End-to-End",
      description: "Analytics & Architecture"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className={`min-h-screen relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900`}
    >
      <div className={classes.container}>
        <div className="h-[calc(100vh-80px)] flex flex-col justify-center">
          <div className="space-y-12">
            {/* Header Section */}
            <div className={`space-y-6 text-center transform transition-all duration-${theme.animation.slow} 
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className={`${classes.heading.h1} text-accent-light`}>
                Rohin Attrey
              </h1>
              <h2 className="text-2xl text-accent-primary">
                Product & Advanced Analytics Leader
              </h2>
              <p className={`text-lg ${theme.colors.text.secondary} max-w-2xl mx-auto`}>
                Building and leading analytics teams to drive product growth through 
                experimentation, insights, and data-driven strategy.
              </p>
            </div>

            {/* Impact Metrics Grid */}
            <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transform transition-all duration-${theme.animation.slow} delay-300
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {impactMetrics.map((metric, index) => (
                <div 
                  key={metric.title}
                  className={`bg-primary-800/50 backdrop-blur-sm rounded-lg p-6 transform transition-all duration-500
                    hover:bg-primary-700/50 hover:transform hover:scale-105 border border-accent-primary/20
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-accent-primary mb-4">
                    {metric.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-accent-light font-semibold">{metric.title}</h3>
                    <p className="text-2xl font-bold text-accent-primary">{metric.value}</p>
                    <p className={`text-sm ${theme.colors.text.secondary}`}>{metric.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Current Role */}
            <div className={`text-center transform transition-all duration-${theme.animation.slow} delay-700
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-block bg-primary-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-accent-primary/20">
                <p className={theme.colors.text.primary}>
                  Currently leading Product & Analytics at{' '}
                  <span className="font-semibold text-accent-primary">Kijiji</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;