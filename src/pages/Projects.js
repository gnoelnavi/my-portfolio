import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'Built with React to showcase my projects and skills.',
  },
  {
    title: 'Simple Blog Platform',
    description: 'A backend-powered blog using Node.js and Express.',
  },
  {
    title: 'Weather App',
    description: 'Fetches weather data using an external API with React.',
  },
];

const Projects = () => {
    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <div className="project-list">
                {projects.map((project, index) => (
                <div className="project-card" key={index}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
            </div>
            ))}
        </div>
        </div>
    );
};

export default Projects;