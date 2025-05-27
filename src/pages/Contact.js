import React from 'react';
import './Contact.css';

const Contacts = () => {
    return (
        <section className="contact-container">
            <h1>Contact Me</h1>
            <p>Email: <a href="mailto:leong.ivan@hotmail.com">leong.ivan@hotmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/ivan-leong-709b80316" target="_blank" rel="noopner noreferrer">My LinkedIN</a></p>
            <p>GitHub: <a href="https://github.com/gnoelnavi" target="_blank" rel = "noopener noreferrer">github.com</a></p>
        </section>
    );
};

export default Contacts;