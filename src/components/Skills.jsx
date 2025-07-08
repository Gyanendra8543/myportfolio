import React from 'react';

const Skills = () => {
  const skillList = [
    'HTML5', 'CSS3', 'JavaScript', 'ReactJS',
    'Bootstrap', 'Java', 'Spring Boot', 'MySQL',
    'Git & GitHub', 'REST API'
  ];

  return (
    <section id="skills" className="py-5 mt-5 bg-light text-center">
      <div className="container">
        <h2 className="mb-4 text-primary fw-bold">Skills</h2>
        <div className="row justify-content-center">
          {skillList.map((skill, index) => (
            <div key={index} className="col-6 col-md-3 mb-4">
              <div className="border rounded shadow-sm p-3 bg-white skill-card hover-effect">
                <strong className="text-info">{skill}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
