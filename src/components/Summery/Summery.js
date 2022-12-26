import React from 'react';
import './Summery.css';
import CV from '../../assets/CV/Sinod-CV.pdf';

function Summery(props) {
    return (
        <section id={'summery'}>
            <div className="summery-heading" data-aos="fade-right">
                <strong>My Skillset</strong>

                <h2>HTML5/CSS3, JavaScript, ReactJS, Redux</h2>
                <h3>Bootstrap Tailwind Material Ui</h3>

                <a href={CV} download className={'btn-link'}>
                    Get CV <i className="fa-solid fa-download"></i>
                </a>
            </div>

            {/*<div className="summery-details" data-aos="fade-left">*/}
            {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim et placeat qui. Aspernatur blanditiis dignissimos doloribus exercitationem facere, inventore magnam mollitia necessitatibus quam reiciendis sed sequi. Exercitationem, maxime, quas!</p>*/}
            {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim et placeat qui. Aspernatur blanditiis dignissimos doloribus exercitationem facere, inventore magnam mollitia necessitatibus quam reiciendis sed sequi. Exercitationem, maxime, quas!</p>*/}
            {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim et placeat qui. Aspernatur blanditiis dignissimos doloribus exercitationem facere, inventore magnam mollitia necessitatibus quam reiciendis sed sequi. Exercitationem, maxime, quas!</p>*/}


            {/*</div>*/}
        </section>
    );
}

export default Summery;