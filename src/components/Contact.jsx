import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-5 mt-5 bg-light text-center">
      <div className="container">
        <h2 className="text-primary fw-bold mb-4">Contact Me</h2>

        <div className="d-flex flex-column align-items-center gap-3">

          {/* 🔹 Email */}
          <div className="fs-5 text-muted">
            <FaEnvelope className="me-2 text-info" />
            <a
              href="mailto:gyanendramishra00007@gmail.com"
              className="text-info text-decoration-none fw-semibold"
            >
              gyanendramishra00007@gmail.com
            </a>
          </div>

          {/* 🔹 Phone */}
          <div className="fs-5 text-muted">
            <FaPhoneAlt className="me-2 text-success" />
            <a
              href="tel:7985900611"
              className="text-success text-decoration-none fw-semibold"
            >
              7985900611
            </a>
          </div>

          {/* 🔹 LinkedIn */}
          <div className="fs-5 text-muted">
            <FaLinkedin className="me-2 text-primary" />
            <a
              href="https://www.linkedin.com/in/gyanendra-mishra-3a6171220/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-decoration-none fw-semibold"
            >
              linkedin.com/in/gyanendra
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
