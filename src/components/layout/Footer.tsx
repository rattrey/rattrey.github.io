import React from 'react';
import { theme } from '../../utils/theme';

const Footer: React.FC = () => {
  return (
    <footer className={`${theme.section.background.hero} py-8 mt-[-80px]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-white/60">© 2024 Rohin Attrey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
