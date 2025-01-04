import React from 'react';
import { LineChart, Users, Brain, Rocket } from 'lucide-react';
import { theme, classes } from '../../utils/theme';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Analytics Leadership",
      description: "Leading product and analytics teams to drive data-informed decisions and business growth."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Development",
      description: "Building and mentoring high-performing analytics teams across various organizations."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Technical Expertise",
      description: "Combining deep technical knowledge with strategic thinking to solve complex problems."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Product Growth",
      description: "Driving product success through experimentation and data-driven strategies."
    }
  ];

  return (
    <section id="about" className={theme.section.wrapper}>
      <div className={`${theme.section.background.default} w-full h-full`}>
        <div className={theme.section.inner}>
          <div className="text-center mb-16">
            <h2 className={`${classes.heading.h2} text-accent-core-600 mb-4`}>About Me</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Analytics professional focused on building effective teams and data solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column: Image and Text */}
            <div>
              {/* Profile Image */}
              <div className="h-full">
                <div className="sticky top-8">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <div className="aspect-[3/4]">
                      <img
                        src="/../images/IMG_5993.jpg"
                        alt="Rohin Attrey"
                        className="object-cover w-full h-full"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer */}
              <div className="h-8"></div>

              {/* Text Content */}
              <div className="space-y-6">
                <p className="text-gray-700">
                  Hi, I'm Rohin! I was born in India and came to Canada when I was 6 with my mom. I built my first computer when I was 11 years old but it wasn't until much later in University that I found my passion in statistics, probability and decision sciences back in 2014.
                  After my undergraduate degree in Health Sciences, I decided to pursue my interest in statistics and decision making and obtained my Master's Degree in Analytics (MSc.).

                  Since then, I've been in the analytics field for over 7 years and have worked with cross functional teams across Pricing Analytics, Loyalty Analytics, Enterprise Consumer Insights and Product Analytics. 
                </p>

                <p className="text-gray-700">
                  I love exploring the intersection of technology, science and business. I am drawn to solving organizational challenges through using my technical skills in data querying, data modelling and data engineering.
                </p>

                <p className="text-gray-700">
                  When I'm not diving into my professional craft, you'll find me working out, playing golf, or drumming. 
                </p>
              </div>
            </div>

            {/* Right Column: Highlights Cards */}
            <div className="grid grid-cols-1 gap-4">
              {highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className={`flex items-start gap-4 p-6 ${theme.card.dark.base}`}
                >
                  <div className="p-2 rounded-lg bg-accent-core-600/10">
                    <div className="text-accent-core-600">
                      {highlight.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-white/90">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
