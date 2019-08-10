import React, {Fragment} from 'react';
import '../App.css';
import logoFooter from '../assets/logo/logo-footer.png';
import logoHeader from '../assets/logo/logo.png';
import imageContent from '../assets/big-ben.jpg';

function About() {
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
                <h1>Despre noi</h1>
                <div className="container-about">
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                    </p>
                    <img src={imageContent} />
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

export default About;