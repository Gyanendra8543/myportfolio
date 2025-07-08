import React from 'react';

const Navbar = ({ setActiveSection }) => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-white shadow-sm">
      <div className="container-fluid px-4">
        {/* 🔹 Stylish Title Only */}
        <span
          className="navbar-brand text-uppercase text-primary fw-semibold"
          style={{
            fontSize: '1.1rem',
            letterSpacing: '1px',
            fontFamily: 'Segoe UI, sans-serif',
          }}
        >
          Software Developer
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            {[
              { label: 'Home', value: 'home' },
              { label: 'About', value: 'about' },
              { label: 'Skills', value: 'skills' },
              { label: 'Projects', value: 'projects' },
              { label: 'Contact', value: 'contact' },
            ].map((item, index) => (
              <li key={index} className="nav-item">
                <button
                  onClick={() => setActiveSection(item.value)}
                  className="nav-link btn btn-link text-dark"
                  style={{ textDecoration: 'none' }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
