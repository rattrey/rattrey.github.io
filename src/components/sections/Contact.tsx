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
    <div className={`${classes.sectionPadding}`}>
      <div className="text-center mb-12">
        <h2 className={`${classes.heading.h2} ${theme.colors.text.primary} mb-4`}>Get In Touch</h2>
        <p className={`text-lg ${theme.colors.text.secondary} max-w-2xl mx-auto`}>
          I'm always interested in discussing data strategy, analytics leadership, 
          and technical architecture opportunities.
        </p>
      </div>

      <div className={`${classes.container} grid grid-cols-1 md:grid-cols-2 gap-6`}>
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-start gap-4 p-6 ${theme.card.base} ${theme.card.hover}`}
          >
            <div className={`p-3 rounded-lg bg-accent-primary/10 text-accent-light`}>
              {link.icon}
            </div>
            <div>
              <h3 className={`font-semibold ${theme.colors.text.primary} mb-1 group-hover:text-accent-light transition-colors`}>
                {link.label}
              </h3>
              <p className={`${theme.colors.text.secondary} text-sm`}>{link.description}</p>
            </div>
          </a>
        ))}
      </div>

      <div className={`mt-16 text-center ${theme.colors.text.secondary}`}>
        <p>Based in Toronto, Ontario</p>
      </div>
    </div>
  );
};

export default ContactSection;
