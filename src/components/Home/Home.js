import React from 'react';
import './Home.css';
import Avatar from '../../assets/image/Sinod.jpg';

function Home(props) {
    return (
        <section id={'home'}>
            <div className="home-text" data-aos="fade-down">
                <strong>Hello, it's me</strong>
                <h1>Sinod Poghosyan</h1>

                <a href="#summery" className={'btn-link'}>Scroll For Me</a>
            </div>

            <div className="home-img" data-aos="fade-up">
                <div className="img-box">
                    <img src={Avatar} alt=""/>
                    <h2>SInod Poghosyan <br/> <span>Front-End Developer</span> </h2>
                    <div className="social">
                        <a href="#!">
                            <i className="fa-brands fa-facebook"></i>
                        </a>

                        <a href="#!">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>

                    <a href="#!" className={'hire-me '}>Hire me</a>
                </div>
            </div>
        </section>
    );
}

export default Home;