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
    <section id="about" className={`${classes.section.wrapper}`}>
      <div className={classes.section.inner}>
        <div className="text-center mb-16">
          <h2 className={`${classes.heading.h2} ${theme.colors.text.primary} mb-4`}>About Me</h2>
          <p className={`text-lg ${theme.colors.text.secondary} max-w-3xl mx-auto`}>
            Analytics leader focused on building effective teams and data solutions.
          </p>
        </div>

      <div className="grid md:grid-cols-2 gap-12 items-center"> {/* Changed from items-start to items-center */}
        {/* Main Content */}
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Hi, I'm Rohin.
            
            I started in my 
            
            health sciences before transitioning to analytics through a 
            Master's degree. The statistical foundation from both programs proved valuable 
            throughout my career in data and analytics.
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            At Loblaw Companies Limited, I began by automating pricing processes with VBA, 
            creating tools that were adopted across analytics teams. I later moved into 
            consumer insights, working on user segmentation and retention analysis. My final 
            role there involved developing a pricing optimization engine using neural networks 
            and Bayesian models for measurement methodology. I leaned heavily into python and SQL 
            during this part of my role and developed a passion for data engineering.
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            Now at Kijiji as Manager of Analytics & Strategy, I work to advance our 
            data infrastructure and analytics frameworks. My work spans ETL architecture, 
            driver tree analysis, KPI frameworks, and product analytics; supporting teams across the 
            organization with data-driven solutions.
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            I love solving complex problems by connecting the dots between data, technology, and business needs. At every organization I've worked with, 
            I've focused on understanding the common goals, current data needs, and the limitations. This allows me to make a determination on the best 
            analytical model or approach. This has led to building tools and frameworks that teams want to use.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 gap-6 h-fit">
          {highlights.map((highlight, index) => (
            <div 
              key={highlight.title}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-[#373373]/10 text-[#373373] dark:text-white">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
