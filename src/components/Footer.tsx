
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-white/70">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} AJ. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <p>Made with ❤️ by AJ</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
