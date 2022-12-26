import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <footer>
            <span>Copyright &copy;2022</span>

            <div className="social-links">
                <a href="https://www.facebook.com/sinod.poghosyan">
                    <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/sinodpoghosyan/">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#!">
                    <i className="fa-brands fa-youtube"></i>
                </a>
            </div>

            <a href="#!" className={'footer-logo'}>Sinod Poghosyan</a>
        </footer>
    );
}

export default Footer;