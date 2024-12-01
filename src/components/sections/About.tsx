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
          <div className="space-y-6">
            <p className="text-gray-700">
              Hi, I'm Rohin. I started my analytics journey in 2013 in 2nd year university when I 
              began learning statistics and R programming. After I finished my undergraduate degree,
              I started learning programming more seriously and transitioned to analytics fully through 
              a Master's degree specialty in Business Analytics. 
            </p>

            <p className="text-gray-700">
              My first role was at Loblaw Companies Limited, where I developed pricing models and 
              automated processes using tools like VBA, creating tools that were adopted across analytics teams. 
              I later moved into consumer insights, where I developed core measurement methodologies for in-app loyalty testing, working on user segmentation and retention analysis among others.
              My final role there involved developing a pricing optimization engine using neural networks 
              and Bayesian models for measurement methodology. I leaned heavily into python and SQL 
              during this part of my role and developed a passion for data engineering.
            </p>

            <p className="text-gray-700">
              Now at Kijiji as Manager of Analytics & Strategy, I work to advance our 
              data infrastructure and analytics frameworks. My work spans ETL architecture, 
              driver tree analysis, KPI frameworks, and product analytics; supporting teams across the 
              organization with data-driven solutions.
            </p>

            <p className="text-gray-700">
              I love solving complex problems by connecting the dots between data, technology, and business needs. At every organization I've worked with, 
              I've focused on understanding the common goals, current data needs, and the limitations. This allows me to make a determination on the best 
              analytical model or approach. This has led to building tools and frameworks that teams want to use.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 gap-4">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="flex items-start gap-4 p-6 bg-[#273e54] rounded-lg border border-[#324d65]"
              >
                <div className="p-2 rounded-lg bg-accent-core-600/10">
                  <div className="text-accent-core-600">
                    {highlight.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 text-white">
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
