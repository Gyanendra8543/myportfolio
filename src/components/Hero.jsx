import React from 'react';
import { ReactTyped } from 'react-typed';
import profileImage from '../assets/images/profile.png';
import '../index.css';

const Hero = ({ setActiveSection }) => {
  const scrollToProjects = () => {
    setActiveSection('projects');
  };

  return (
    <section className="hero-section bg-light text-center d-flex align-items-center justify-content-center min-vh-100">
      <div className="container">
        {/* 🔹 Profile Image (Bigger Size) */}
        <img
          src={profileImage}
          alt="Gyanendra Mishra"
          className="rounded-circle shadow mb-4 border border-4 border-primary"
          style={{ width: '200px', height: '200px', objectFit: 'cover' }}
        />

        {/* 🔹 Heading */}
        <h1 className="display-4 fw-bold gradient-text">Hi, I'm Gyanendra Mishra</h1>

        {/* 🔹 Typed Text Animation */}
        <ReactTyped
          strings={[
            'Software Developer 👨‍💻',
            'React Developer ✨',
            'Java Backend Developer ⚡',
            'Full Stack Engineer 🚀',
            'Frontend Enthusiast 🔧'
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className="lead d-block mb-4 text-animated"
        />

        {/* 🔹 CTA Button */}
        <button
          onClick={scrollToProjects}
          className="btn btn-primary btn-lg shadow-sm stylish-btn"
          aria-label="Scroll to Projects"
        >
          See My Projects
        </button>
      </div>
    </section>
  );
};

export default Hero;
