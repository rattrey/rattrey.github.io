import React, { useState } from 'react';
import { Mail, Linkedin, Github, FileText, MapPin, ExternalLink } from 'lucide-react';
import { theme, classes } from '../../utils/theme';

const ContactSection = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const contactLinks = [
    {
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rohin-attrey/",
      description: "Connect with me professionally",
      color: "bg-[#0077B5]"
    },
    {
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "GitHub",
      href: "https://github.com/rattrey",
      description: "View my open source contributions",
      color: "bg-[#333]"
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "Email",
      href: "mailto:rohin.attrey@icloud.com",
      description: "Get in touch directly",
      color: "bg-accent-energy-600"
    },
    {
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "Resume",
      href: "/resume.pdf",
      description: "Download my resume",
      color: "bg-accent-core-600"
    }
  ];

  return (
    <section id="contact" className={theme.section.wrapper}>
      <div className={`${theme.section.background.hero} w-full h-full`}>
        <div className={`${theme.section.inner} relative z-10 px-4 sm:px-6 py-12 sm:py-20`}>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className={`${classes.heading.h2} text-accent-core-600 mb-4`}>
              Let's Connect
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto px-4">
              I'm always interested in discussing data strategy, analytics leadership, 
              and technical architecture opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12 sm:mb-16">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group relative overflow-hidden
                  ${theme.card.base} 
                  p-4 sm:p-6 
                  flex items-center gap-4 
                  transition-all duration-300
                  hover:translate-y-[-2px]
                  hover:shadow-lg
                `}
                onMouseEnter={() => setHoveredLink(link.label)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {/* Background gradient effect */}
                <div 
                  className={`
                    absolute inset-0 opacity-0 group-hover:opacity-10 
                    transition-opacity duration-300 
                    ${link.color}
                  `}
                />

                <div className={`
                  p-3 rounded-lg 
                  transition-all duration-300
                  ${hoveredLink === link.label ? link.color : 'bg-accent-core-600/10'}
                `}>
                  <div className={`
                    transition-all duration-300
                    ${hoveredLink === link.label ? 'text-white' : 'text-accent-core-600'}
                  `}>
                    {link.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white mb-1 group-hover:text-accent-core-300 transition-colors">
                      {link.label}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-white/80 text-sm">
                    {link.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-white/80 text-sm sm:text-base">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            <p>Based in Toronto, Ontario</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;