 import React, { useRef, useEffect } from 'react';
import Collapse from 'bootstrap/js/dist/collapse'; // ✅ Bootstrap Collapse control

const Navbar = ({ setActiveSection }) => {
  const collapseRef = useRef(null);
  let bsCollapse = null;

  useEffect(() => {
    if (collapseRef.current) {
      bsCollapse = new Collapse(collapseRef.current, { toggle: false });
    }
  }, []);

  const handleNavItemClick = (section) => {
    setActiveSection(section);

    // ✅ Scroll to section smoothly
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }

    // ✅ Close collapse if open (on nav link click)
    if (bsCollapse && collapseRef.current.classList.contains('show')) {
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-white shadow-sm">
      <div className="container-fluid px-4">
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
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          ref={collapseRef}
        >
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
