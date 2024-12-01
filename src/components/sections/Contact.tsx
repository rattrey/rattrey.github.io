import React from 'react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

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
    <div className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I'm always interested in discussing data strategy, analytics leadership, 
          and technical architecture opportunities.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 p-6 rounded-xl bg-white shadow-md 
              hover:shadow-lg transition-all duration-300 hover:bg-gray-50"
          >
            <div className="p-3 rounded-lg bg-[#373373]/10 text-[#373373]">
              {link.icon}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#373373] transition-colors">
                {link.label}
              </h3>
              <p className="text-gray-600 text-sm">{link.description}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-16 text-center text-gray-600">
        <p>Based in Toronto, Ontario</p>
      </div>
    </div>
  );
};

export default ContactSection;