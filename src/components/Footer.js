import React, { useState } from "react";
import "../App.css";
import logoFooter from "../assets/logo/logo-footer.png";
import { A } from "hookrouter";

function Footer() { 
    return (

        <footer>
            <div className="footer-left">
                <img src={logoFooter} />
                <p className="footer-links">
                    <A href="/">Acasa</A> |<A href="/contact">Contact</A>
                </p>
                <p className="footer-name">iQuest-Academy &copy; 2019</p>
            </div>
            <div className="footer-center">
                <div>
                    <i className="fa fa-phone" />
                    <p>0712345678</p>
                </div>
                <div>
                    <i className="fa fa-envelope" />
                    <p>
                        <a href="mailto:support@company.com">support@lets-eat.com</a>
                    </p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-about">
                    <span>Despre noi</span>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
                    euismod convallis velit, eu auctor lacus vehicula sit amet.
                </p>
                <div className="footer-icons">
                    <a href="https://www.facebook.com/">
                        <i className="fa fa-facebook-f" />
                    </a>
                    <a href="https://www.twitter.com/">
                        <i className="fa fa-twitter" />
                    </a>
                    <a href="https://www.instagram.com">
                        <i className="fa fa-instagram" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;