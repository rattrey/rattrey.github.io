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
                  Hi, I'm Rohin! My fascination with data started back in university when I discovered how statistics and programming could uncover hidden patterns in everyday life.
                </p>

                <p className="text-gray-700">
                  I love exploring the intersection of technology and human behavior. Whether it's analyzing consumer patterns or building data tools, I'm drawn to projects that help us understand the 'why' behind the numbers. 
                  I have a solutions oriented mind when it comes to approaching ambiguous problems, and I always strive to find the most effective way to solve them.
                </p>

                <p className="text-gray-700">
                  When I'm not diving into data, you'll find me experimenting with new programming languages, playing golf, or drumming. 
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