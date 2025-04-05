
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-white/70">
      <div className="container-custom">
        <div className="flex justify-center">
          <p>© {new Date().getFullYear()} AJ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
