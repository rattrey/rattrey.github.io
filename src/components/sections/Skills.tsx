import React, { useState } from 'react';
import { Code2, ChartBar, Users, Briefcase, Timer, CheckCircle2, Database } from 'lucide-react';
import { theme, classes } from '../../utils/theme';
import { expertiseLevelToKey, ExpertiseLevel } from '../../types/skills';

// Types based on your existing data structure
interface CaseStudy {
  project: string;
  impact: string;
  description: string;
}

interface Skill {
  name: string;
  yearsExperience: number;
  currentlyUsing: boolean;
  expertise: ExpertiseLevel;
  applications: string[];
  caseStudy: CaseStudy;
  relatedSkills: string[];
}

interface Category {
  icon: JSX.Element;
  title: string;
  description: string;
  primaryColor: string;
  accentColor: string;
  textColor: string;
  skills: Skill[];
}

type CategoryId = 'technical' | 'analytics' | 'leadership' | 'business';
type Categories = Record<CategoryId, Category>;

// Your existing categories data
const categories: Categories = {
  technical: {
    icon: <Code2 className="w-6 h-6" />,
    title: "Technical Engineering & Infrastructure",
    description: "Building scalable data solutions and analytics infrastructure",
    primaryColor: "bg-accent-energy-600/10",  // Updated to use our theme colors
    accentColor: "text-accent-energy-600",    // Electric blue accent
    textColor: "text-white",
    skills: [
      {
        name: "Data Engineering & Pipeline Development",
        yearsExperience: 3,
        currentlyUsing: true,
        expertise: "Intermediate",
        applications: [
          "ETL Architecture",
          "Data Pipeline Design",
          "Frontend Tracking Implementation",
          "Anomaly Detection",
          "Real-time Alerting"
        ],
        caseStudy: {
          project: "End-to-End Analytics Infrastructure",
          impact: "Reduced experiment result turnaround from 2 weeks to <1 day, implemented real-time anomaly detection",
          description: "Engineered comprehensive data pipeline for frontend tracking with automated testing and alerting system"
        },
        relatedSkills: ["Python", "ETL", "GitHub", "SQL", "Anomaly Detection", "Data Quality"]
      },
      {
        name: "Analytics Engineering & Modeling",
        yearsExperience: 4,
        currentlyUsing: true,
        expertise: "Advanced",
        applications: [
          "Virtual Data Modeling",
          "KPI Framework Development",
          "Metric Definition",
          "Performance Monitoring",
          "Data Quality Management"
        ],
        caseStudy: {
          project: "Product Analytics Framework",
          impact: "Created unified 360-degree view of product performance with 90+ metrics",
          description: "Developed comprehensive KPI dashboard and virtual data model enabling cross-functional insights"
        },
        relatedSkills: ["SQL", "Data Modeling", "Star Schema", "Dashboard Design", "Metrics Engineering"]
      }
    ]
  },
  analytics: {
    icon: <ChartBar className="w-6 h-6" />,
    title: "Advanced Analytics & Experimentation",
    description: "Driving decisions through statistical analysis and testing",
    primaryColor: "bg-accent-particle-600/10",  // Particle glow accent
    accentColor: "text-accent-particle-600",
    textColor: "text-white",
    skills: [
      {
        name: "Experimentation & Testing",
        yearsExperience: 5,
        currentlyUsing: true,
        expertise: "Expert",
        applications: [
          "A/B Testing Framework Design",
          "Statistical Analysis",
          "Test Implementation",
          "Impact Measurement",
          "Process Automation"
        ],
        caseStudy: {
          project: "Testing Infrastructure Modernization",
          impact: "Automated end-to-end testing process with integrated documentation",
          description: "Implemented Python-based testing framework with GitHub documentation integration"
        },
        relatedSkills: ["Python", "Statistical Analysis", "A/B Testing", "Documentation", "Process Design"]
      },
      {
        name: "Marketing Analytics & Optimization",
        yearsExperience: 6,
        currentlyUsing: true,
        expertise: "Expert",
        applications: [
          "Campaign Performance Analysis",
          "User Cohort Analysis",
          "Customer Segmentation",
          "Marketing Attribution",
          "ROI Optimization"
        ],
        caseStudy: {
          project: "Marketing Analytics Enhancement",
          impact: "Improved campaign targeting and measurement capabilities",
          description: "Developed advanced ACM campaign reporting and cohort-based marketing strategies"
        },
        relatedSkills: ["SQL", "Customer Analytics", "Segmentation", "Campaign Analysis", "Adobe Campaign"]
      }
    ]
  },
  leadership: {
    icon: <Users className="w-6 h-6" />,
    title: "Analytics Leadership",
    description: "Building high-performing teams and driving data strategy",
    primaryColor: "bg-accent-core-600/10",    // Core orange accent
    accentColor: "text-accent-core-600",
    textColor: "text-white",
    skills: [
      {
        name: "Team Leadership & Development",
        yearsExperience: 2,
        currentlyUsing: true,
        expertise: "Advanced",
        applications: [
          "Team Management",
          "Performance Development",
          "Technical Mentorship",
          "Process Implementation",
          "Project Leadership"
        ],
        caseStudy: {
          project: "Analytics Team Development",
          impact: "Built high-performing product analytics team, established core processes and development frameworks",
          description: "Led and mentored team of 4 analysts, implementing structured development programs and analytics best practices"
        },
        relatedSkills: ["Stakeholder Management", "Process Design", "Technical Leadership", "Performance Management"]
      },
      {
        name: "Analytics Strategy",
        yearsExperience: 3,
        currentlyUsing: true,
        expertise: "Advanced",
        applications: [
          "Data Strategy Development",
          "Cross-functional Leadership",
          "Measurement Framework Design",
          "Analytics Architecture",
          "Process Optimization"
        ],
        caseStudy: {
          project: "Enterprise Analytics Framework",
          impact: "Established company-wide analytics standards and processes",
          description: "Developed comprehensive analytics strategy covering data collection, testing methodology, and measurement frameworks"
        },
        relatedSkills: ["Data Strategy", "Business Alignment", "Change Management", "Technical Architecture"]
      }
    ]
  },
  business: {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Business Impact & Optimization",
    description: "Driving business value through data-driven solutions",
    primaryColor: "bg-accent-energy-300/10",  // Subtle energy accent
    accentColor: "text-accent-energy-300",
    textColor: "text-white",
    skills: [
      {
        name: "Product Analytics",
        yearsExperience: 4,
        currentlyUsing: true,
        expertise: "Expert",
        applications: [
          "Product Performance Analysis",
          "Feature Impact Measurement",
          "User Behavior Analysis",
          "Growth Strategy",
          "Decision Support"
        ],
        caseStudy: {
          project: "Product Analytics Framework",
          impact: "Created unified view of product performance enabling data-driven decision making",
          description: "Developed comprehensive analytics framework tracking user engagement, feature adoption, and business metrics"
        },
        relatedSkills: ["Data Analysis", "Product Strategy", "User Analytics", "Growth Metrics"]
      },
      {
        name: "Revenue Optimization",
        yearsExperience: 3,
        currentlyUsing: false,
        expertise: "Advanced",
        applications: [
          "Pricing Strategy",
          "Revenue Modeling",
          "Performance Analysis",
          "Market Analysis",
          "Impact Measurement"
        ],
        caseStudy: {
          project: "Pricing & Revenue Optimization",
          impact: "Developed data-driven approach to pricing decisions and revenue optimization",
          description: "Created pricing optimization models and measurement frameworks to evaluate pricing strategies"
        },
        relatedSkills: ["Statistical Analysis", "Financial Modeling", "Market Analysis", "Strategy Development"]
      }
    ]
  }
};


const SkillCard: React.FC<{ 
  skill: Skill;
  categoryId: CategoryId;
  skillIndex: number;
}> = ({ skill, categoryId, skillIndex }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`${theme.card.dark.base} ${theme.card.dark.hover}`}>
      <div className="p-4 sm:p-8">
        {/* Header Section */}
        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
            <h3 className="text-lg sm:text-xl font-semibold text-white">{skill.name}</h3>
            <span className={`
              ${theme.card.base}
              px-2 sm:px-3 py-1 
              text-sm 
              rounded-full
              self-start
              ${skill.expertise === "Expert" ? "bg-accent-core-600/20 text-accent-core-300" :
                skill.expertise === "Advanced" ? "bg-accent-energy-600/20 text-accent-energy-300" :
                "bg-accent-particle-600/20 text-accent-particle-300"}
            `}>
              {skill.expertise}
            </span>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
            <div className="flex items-center gap-1.5">
              <Timer className="w-4 h-4" />
              <span>{skill.yearsExperience}+ years</span>
            </div>
            {skill.currentlyUsing && (
              <div className="flex items-center gap-1.5 text-accent-energy-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Active</span>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Expand/Collapse Button */}
        <button 
          className="md:hidden w-full text-sm text-accent-energy-300 mb-4"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </button>

        {/* Collapsible Content - Always visible on desktop */}
        <div className={`${!isExpanded ? 'hidden md:block' : 'block'}`}>
          {/* Applications Section */}
          <div className="mb-4 sm:mb-6">
            <h4 className="text-sm font-medium text-white mb-2 sm:mb-3">Key Applications</h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {skill.applications.map(app => (
                <span 
                  key={app} 
                  className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm bg-white/10 text-white"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Section */}
          <div className={`${theme.card.dark.base} p-4 sm:p-6 mb-4 sm:mb-6`}>
            <h4 className="text-base sm:text-lg font-medium text-white mb-2 sm:mb-3">
              {skill.caseStudy.project}
            </h4>
            <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-4 leading-relaxed">
              {skill.caseStudy.description}
            </p>
            <div className="flex items-start gap-2 bg-accent-core-600/10 p-2 sm:p-3 rounded-lg">
              <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-accent-core-600 flex-shrink-0 mt-0.5" />
              <p className="text-white text-xs sm:text-sm leading-relaxed">
                {skill.caseStudy.impact}
              </p>
            </div>
          </div>

          {/* Related Skills Section */}
          <div>
            <h4 className="text-sm font-medium text-white mb-2 sm:mb-3">Related Skills</h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {skill.relatedSkills.map(related => (
                <span 
                  key={related} 
                  className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm bg-accent-energy-600/10 text-accent-energy-300"
                >
                  {related}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function EnhancedSkillsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('technical');

  return (
    <section className="w-full min-h-screen py-8 sm:py-20 bg-[#f9fafb]">
      <div className={classes.container}>
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className={`${classes.heading.h2} text-accent-core-600 mb-4`}>
            Skills & Expertise
          </h2>
        </div>

        <div className="max-w-[1400px] mx-auto space-y-6 sm:space-y-12 px-4 sm:px-6">
          {/* Category Selection - Horizontal Scroll on Mobile */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
            {(Object.entries(categories) as [CategoryId, Category][]).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`
                  ${theme.card.dark.base}
                  p-4 sm:p-6 
                  flex-shrink-0
                  w-[280px] md:w-auto
                  ${theme.card.dark.hover}
                  ${activeCategory === key ? 
                    `${theme.card.dark.base} ${theme.effects.glow[key === 'technical' ? 'energy' : 
                      key === 'analytics' ? 'particle' : 'core']}` : 
                    ''}
                  ${activeCategory && activeCategory !== key ? 'opacity-75' : 'opacity-100'}
                `}
              >
                <div className={`
                  ${activeCategory === key ? `text-accent-${key === 'technical' ? 'energy' : 
                    key === 'analytics' ? 'particle' : 'core'}-600` : 'text-white'}
                  transition-colors 
                  duration-300
                `}>
                  {category.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mt-3 sm:mt-4 mb-1 sm:mb-2 text-white">
                  {category.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80">
                  {category.description}
                </p>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {categories[activeCategory].skills.map((skill, index) => (
              <SkillCard 
                key={`${activeCategory}-${index}`}
                skill={skill}
                categoryId={activeCategory}
                skillIndex={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}