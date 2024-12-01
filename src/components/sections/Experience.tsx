import React, { useEffect, useRef } from 'react';
import { Building2, Calendar, ArrowRight, TrendingUp, Users, Code2, Lightbulb } from 'lucide-react';

// Impact type definition
type ImpactType = 'high' | 'medium' | 'standard';
type ImpactCategory = 'technical' | 'business' | 'leadership' | 'innovation';

interface Impact {
  type: ImpactType;
  category: ImpactCategory;
}

interface Achievement {
  text: string;
  impact: Impact;
}

interface Role {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: Achievement[];
}

const getImpactIcon = (category: ImpactCategory) => {
  switch (category) {
    case 'technical': return <Code2 className="w-4 h-4" />;
    case 'business': return <TrendingUp className="w-4 h-4" />;
    case 'leadership': return <Users className="w-4 h-4" />;
    case 'innovation': return <Lightbulb className="w-4 h-4" />;
  }
};

const getImpactColor = (type: ImpactType, category: ImpactCategory) => {
  const baseColors = {
    technical: 'blue',
    business: 'green',
    leadership: 'purple',
    innovation: 'orange'
  };
  
  const color = baseColors[category];
  const intensity = type === 'high' ? '600' : type === 'medium' ? '400' : '200';
  
  return `bg-${color}-${intensity}/10 text-${color}-${intensity}`;
};

const roles: Role[] = [
  {
    title: "Manager, Strategy & Analytics",
    company: "Kijiji",
    period: "2021 - Present",
    location: "Toronto, ON",
    description: "Leading product analytics and data strategy initiatives while building and mentoring a high-performing analytics team.",
    achievements: [
      {
        text: "Reduced experiment result turnaround from 2 weeks to <1 day through Python testing framework and GitHub documentation process",
        impact: { type: 'high', category: 'technical' }
      },
      {
        text: "Led and mentored team of 4 product analysts, providing training in analysis, stakeholder management, and project execution",
        impact: { type: 'high', category: 'leadership' }
      },
      {
        text: "Developed comprehensive KPI dashboard with 90+ metrics providing 360-degree view of product performance",
        impact: { type: 'high', category: 'business' }
      },
      {
        text: "Engineered end-to-end data pipeline for frontend tracking with automated testing and real-time anomaly detection",
        impact: { type: 'high', category: 'technical' }
      },
      {
        text: "Enhanced marketing analytics through advanced ACM campaign reporting and user cohort development",
        impact: { type: 'medium', category: 'business' }
      },
      {
        text: "Led strategic data discovery initiatives for search functionality and CRM, improving operational effectiveness",
        impact: { type: 'medium', category: 'leadership' }
      }
    ]
  },
  {
    title: "Data Specialist – Analytics and Reporting",
    company: "Ontario Health",
    period: "2021",
    location: "Toronto, ON",
    description: "Enhanced healthcare analytics capabilities through process automation and improved reporting systems.",
    achievements: [
      {
        text: "Automated critical healthcare reporting processes, significantly improving data access efficiency",
        impact: { type: 'medium', category: 'technical' }
      },
      {
        text: "Developed comprehensive BI reports for tracking key health outcomes",
        impact: { type: 'medium', category: 'business' }
      }
    ]
  },
  {
    title: "Data Scientist – Pricing and Promotion Optimization",
    company: "Loblaw Companies Limited",
    period: "2018 - 2021",
    location: "Mississauga, ON",
    description: "Developed and implemented data-driven pricing strategies through advanced analytics and machine learning techniques.",
    achievements: [
      {
        text: "Led development of pricing optimization engine using machine learning and factor analysis",
        impact: { type: 'high', category: 'technical' }
      },
      {
        text: "Designed measurement framework analyzing pricing impacts across test and control sites",
        impact: { type: 'high', category: 'innovation' }
      },
      {
        text: "Developed continuous measurement methodology for pricing monitoring",
        impact: { type: 'medium', category: 'business' }
      },
      {
        text: "Served as key liaison between pricing managers and data science team",
        impact: { type: 'medium', category: 'leadership' }
      }
    ]
  },
  {
    title: "Senior Data Analyst",
    company: "Loblaw Companies Limited",
    period: "2016 - 2018",
    location: "Mississauga, ON",
    description: "Drove analytics initiatives across multiple business units, focusing on customer insights and promotional effectiveness.",
    achievements: [
      {
        text: "Developed trade-off decision tools for promotional pricing optimization",
        impact: { type: 'high', category: 'technical' }
      },
      {
        text: "Led performance monitoring frameworks development for PC Optimum campaigns",
        impact: { type: 'high', category: 'business' }
      },
      {
        text: "Increased efficiency through VBA automation of data cleanup processes",
        impact: { type: 'medium', category: 'innovation' }
      },
      {
        text: "Provided advanced analytics support guiding key strategic business decisions",
        impact: { type: 'medium', category: 'business' }
      }
    ]
  }
];

const TimelineVisualization = () => {
  const timelineRoles = [...roles].reverse();

  return (
    <div className="mb-12 overflow-x-auto">
      <div className="min-w-max flex items-center justify-center gap-4">
        {timelineRoles.map((role, index) => (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-[#373373]" />
              <div className="text-sm text-gray-600 mt-2 whitespace-nowrap">{role.period}</div>
              <div className="text-xs text-gray-500 whitespace-nowrap">{role.company}</div>
            </div>
            {index < timelineRoles.length - 1 && (
              <div className="w-24 h-px bg-gray-200 mx-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  // Intersection Observer for scroll animations
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-4');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${classes.sectionPadding}`} ref={sectionRef}>
      <div className="text-center mb-16">
        <h2 className={`${classes.heading.h2} ${theme.colors.text.primary} mb-4`}>Professional Experience</h2>
        <p className={`text-lg ${theme.colors.text.secondary} max-w-3xl mx-auto`}>
          Progressive experience in analytics leadership, technical implementation, and data strategy.
        </p>
      </div>

      <TimelineVisualization />

      <div className="max-w-5xl mx-auto space-y-12">
        {roles.map((role, index) => (
          <div 
            key={index} 
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative">
              {index < roles.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-px bg-gray-200" />
              )}
              
              <div className={`${theme.card.base} ${theme.card.border} ${theme.card.hover} p-8`}>
                {/* Role Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className={`${classes.heading.h3} ${theme.colors.text.primary}`}>{role.title}</h3>
                    <div className={`flex items-center gap-2 mt-2 ${theme.colors.text.secondary}`}>
                      <Building2 className="w-4 h-4" />
                      <span>{role.company}</span>
                      <span className="text-gray-300">•</span>
                      <span>{role.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2 md:mt-0">
                    <Calendar className={`w-4 h-4 ${theme.colors.text.secondary}`} />
                    <span className={theme.colors.text.secondary}>{role.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className={`${theme.colors.text.secondary} mb-6 leading-relaxed`}>{role.description}</p>

                {/* Achievements with Impact Indicators */}
                <div className="space-y-4">
                  {role.achievements.map((achievement, aIndex) => (
                    <div key={aIndex} className="flex items-start gap-3 group">
                      <div className={`flex items-center gap-2 px-2 py-1 rounded-lg transition-all duration-300 ${
                        getImpactColor(achievement.impact.type, achievement.impact.category)
                      }`}>
                        {getImpactIcon(achievement.impact.category)}
                      </div>
                      <span className={`${theme.colors.text.secondary} flex-1`}>{achievement.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
