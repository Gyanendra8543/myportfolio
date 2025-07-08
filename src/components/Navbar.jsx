import React from 'react';

const Navbar = ({ setActiveSection }) => {
  const handleNavItemClick = (section) => {
    setActiveSection(section);

    // ✅ Scroll smoothly to the target section
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }

    // ✅ Manually close the mobile navbar after click
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');

    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // This will collapse the menu
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-white shadow-sm">
      <div className="container-fluid px-4">
        {/* 🔹 Stylish Title */}
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

        {/* 🔸 Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 🔸 Collapsible Nav */}
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
                  onClick={() => handleNavItemClick(item.value)}
                  className="nav-link btn btn-link text-dark"
                  style={{
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '1rem',
                  }}
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
