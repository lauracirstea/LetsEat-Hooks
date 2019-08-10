import React, {Fragment} from 'react';
import '../App.css';
import logoFooter from '../assets/logo/logo-footer.png';
import logoHeader from '../assets/logo/logo.png';

function Contact() {
    return (
        <Fragment>
            <header>
                <div className="container-nav">
                    <div className="logo-box">
                    <a href="index.html">
                        <img src={logoHeader} />
                    </a>
                    </div>
                    <nav>
                        <div className="toggle">
                            <i className="fas fa-bars" id="menu-bar"></i>
                        </div>
                        <ul>
                            <li><a href="index.html">Acasa</a></li>
                            <li><a href="about.html">Despre noi</a></li>
                            <li><a href="#">Contact</a></li>
                    </ul>
                    </nav>
                </div>
            </header>
            <main>
                <h1>Contact</h1>	
                <div className="container-contact">
                    <div className="info">
                        <div className="phone">
                            <p>
                                <i className="fa fa-phone"></i>
                                0712345678
                            </p>
                        </div>
                        <div className="email">
                            <p>
                                <i className="fa fa-envelope"></i>
                                <a href="mailto:support@company.com">support@lets-eat.com</a>
                            </p>
                        </div>
                        <div className="address">
                            <p>
                                <i className="fa fa-map-marker"></i>
                                <strong>Sediul social:</strong> <br />
                                Craiova, Str. Ilie Iancu, Nr. 1, Bl.K, Ap. 1, parter<br />
                                Nr. J12/345/2019<br />
                                C.U.I RO1234567
                            </p>
                        </div>
                    </div>
                    <div className="media">
                        <a href="https://www.facebook.com/"><i className="fa fa-facebook-f"></i></a>
                        <a href="https://www.twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a>
                    </div>
                </div>
            </main>

            <footer>
                <div className="footer-left">
                    <img src={logoFooter} />
                    <p className="footer-links">
                        <a href="index.html">Acasa</a> |			
                        <a href="#">Contact</a>
                    </p>
                    <p className="footer-name">iQuest-Academy &copy; 2019</p>
                </div>
                <div className="footer-center">
                    <div>
                        <i className="fa fa-phone"></i>
                        <p>0712345678</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">support@lets-eat.com</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-about">
                        <span>Despre noi</span>
                                Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                    </p>
                    <div className="footer-icons">
                        <a href="https://www.facebook.com/"><i className="fa fa-facebook-f"></i></a>
                        <a href="https://www.twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}

export default Contact;