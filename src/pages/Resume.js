import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <section className="resume-container">
            <h1>My Resume</h1>
            <p>
                You can download my resume below
            </p>
            <a href="/High School Resume - Ivan Leong.pdf" 
                download
                target = "_blank"
                rel = "noopener noreferrer"
                className = "download-button"
            >
            Download Resume
            </a>
            
            <iframe
                src="/High School Resume - Ivan Leong.pdf"
                title="Resume"
                width = "100%"
                height = "600px"
                className="resume-iframe"
            ></iframe>
        </section>
    );
};

export default Resume;