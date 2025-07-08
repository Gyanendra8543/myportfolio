import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 border-top border-secondary">
      <div className="container">
        <p className="mb-0">
          © {new Date().getFullYear()} <strong>Gyanendra Mishra</strong>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
