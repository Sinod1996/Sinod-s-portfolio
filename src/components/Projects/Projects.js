import React from 'react';
import './Projects.css';
import Millionaire from '../../assets/image/millionaire.png';
import Product from '../../assets/image/product.png';
import Solar from '../../assets/image/solar.png';
import Todo from '../../assets/image/todo.png';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


function Projects(props) {
    const data = [
        {
            src: Millionaire,
            url: "https://sinod1996.github.io/millionaire-app/"
        },
        {
            src: Product,
            url: "https://sinod1996.github.io/ProductFit/"
        },
        {
            src: Solar,
            url: "https://sinod1996.github.io/solar_task/"
        },
        {
            src: Todo,
            url: "https://sinod1996.github.io/MyToDo/"
        },
    ]
    return (
        <section id={'projects'}>
            <div className="project-heading">
                <h3>Recent Projects</h3>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    }
                }}
                modules={[Navigation,Pagination]}
                className="mySwiper"
            >
                {
                    data.map(project => (
                        <SwiperSlide key={project.src}>
                            <div className={'project-box'}>
                                <a href={project.url}>
                                    <img src={project.src} alt="project"/>
                                    <div className="p-overlayer">
                                        <strong>Outserved Report</strong>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                    ))
                }


            </Swiper>
            <div className="github-btn">
                <a href="https://github.com/Sinod1996" className={'btn-link'}>
                    My Github <i className="fa-brands fa-github"></i>
                </a>
            </div>

        </section>
    );
}

export default Projects;