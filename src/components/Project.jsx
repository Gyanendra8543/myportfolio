import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: "Amazon Clone",
      description:
        "Built with React, Bootstrap, Spring Boot, and MySQL. Features: login, cart, and checkout.",
    },
    {
      title: "Movie Search App",
      description:
        "Responsive movie search application using React and OMDB API. Real-time search, movie details, and error handling.",
    }
  ];

  return (
    <section id="projects" className="py-5 mt-5 bg-white text-center">
      <div className="container">
        <h2 className="mb-4 fw-bold text-primary">Projects</h2>
        <div className="row justify-content-center">
          {projectList.map((project, index) => (
            <div className="col-md-5 col-sm-10 mb-4" key={index}>
              <div className="card h-100 border-0 shadow-sm project-card">
                <div className="card-body">
                  <h5 className="card-title text-info fw-semibold">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
