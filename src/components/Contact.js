import React, {Fragment} from 'react';
import '../App.css';
import Header from './Header';
import Footer from "./Footer";

function Contact() {
    return (
        <Fragment>
            <Header />
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

            <Footer />
        </Fragment>
    );
}

export default Contact;