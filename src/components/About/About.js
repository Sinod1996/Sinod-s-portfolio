import React from 'react';
import './About.css';

function About(props) {
    return (
        <section id={'about'}>
            <div className="about-container">
                <div className="about-heading" data-aos="flip-left">
                    <strong>About me</strong>
                    <h3>I am a beginner in this sphere and i have a great desire to improve my knowledge
                        and skills and gain professional experience.
                    </h3>
                    <a href="tel:077960266" className={'btn-link'}>
                        077-96-02-66 <i className="fa-solid fa-phone"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;