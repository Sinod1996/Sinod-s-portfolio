import React from 'react';
import './Career.css';
import CV from '../../assets/CV/Sinod-CV.pdf';

function Career(props) {
    const careers = [
        {
            title: 'Front-End Developer',
            name: 'SmartCode',
            year: '2021 march - 2021 october'
        },
        {
            title: 'Front-End Developer',
            name: 'FullLearning',
            year: '2022 june - 2021 november'
        }
    ];

    const educations = [
        {
            title: 'Front-End Developer',
            name: 'SmartCode',
            year: '2021 march - 2021 october'
        },
        {
            title: 'Front-End Developer',
            name: 'FullLearning',
            year: '2022 june - 2021 november'
        }
    ]
    return (
        <section id={'career'} >
            <div className="career-education">
                <div className="career" data-aos="fade-right">
                    <h3>Career</h3>
                    <div className="c-b-container">
                        {careers.map((career) => (
                            <div className={'c-box'} key={career.id}>
                                <h4>{career.title}</h4>
                                <strong>{career.name}</strong>
                                <span>{career.year}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="career edu" data-aos="fade-left">
                    <h3>Education</h3>
                    <div className="c-b-container">
                        {educations.map((edu) => (
                            <div className={'c-box'} key={edu.id}>
                                <h4>{edu.title}</h4>
                                <strong>{edu.name}</strong>
                                <span>{edu.year}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="btn-c">
                <a href={CV} download className={'btn-link'}>
                    Get CV <i className="fa-brands fa-github"></i>
                </a>
            </div>

        </section>
    );
}

export default Career;