import React from 'react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';
import { theme, classes } from '../../utils/theme';

const ContactSection = () => {
  const contactLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rohin-attrey/",
      description: "Connect with me professionally"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/rattrey",
      description: "View my open source contributions"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      href: "mailto:rohin.attrey@icloud.com",
      description: "Get in touch directly"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      label: "Resume",
      href: "/resume.pdf",
      description: "Download my resume"
    }
  ];

  return (
    <section id="contact" className={theme.section.wrapper}>
      <div className={`${theme.section.background.hero} w-full h-full`}>
        <div className={`${theme.section.inner} relative z-10`}>
          <div className="text-center mb-12">
            <h2 className={`${classes.heading.h2} text-accent-core-600 mb-4`}>
              Get In Touch
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              I'm always interested in discussing data strategy, analytics leadership, 
              and technical architecture opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${theme.card.base} ${theme.card.hover} p-6 flex items-start gap-4 transition-all duration-300`}
              >
                <div className="p-3 rounded-lg bg-accent-core-600/10">
                  <div className="text-accent-core-600">
                    {link.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1 group-hover:text-accent-core-300 transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {link.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 text-center text-white/80">
            <p>Based in Toronto, Ontario</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
