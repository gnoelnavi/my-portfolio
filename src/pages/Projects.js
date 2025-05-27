import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';

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
                    <a
                        key ={index}
                        href = {project.github}
                        target ="_blank"
                        rel = "noopener noreferrer"
                       className = "project-card-link"
                    >
                        <div className="project-card" key={index}>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="github-icon">
                                <FaGithub size={24} />
                            </div>            
                        </div>
                    </a>
            ))}
        </div>
        </div>
    );
};

export default Projects;