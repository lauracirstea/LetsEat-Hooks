import React, { useState, useEffect } from "react";
import "../App.css";
import logoHeader from "../assets/logo/logo.png";
import { A } from "hookrouter";

function Header() {
    const [menu, toggleMenu] = useState(false);
    
    const handleMenuClick = () =>{
        toggleMenu(!menu);
      }
    
      const size = useWindowSize();

    return (
        <header>
            <div className="container-nav">
                <div className="logo-box">
                    <A href="/">
                        <img src={logoHeader} />
                    </A>
                </div>
                <nav>
                    <div className="toggle" onClick={() => handleMenuClick()}>
                        <i className="fa fa-bars" id="menu-bar" />
                    </div>
                    { (size.width >= 670 || menu) && <ul>
                        <li>
                            <A href="/">Acasa</A>
                        </li>
                        <li>
                            <A href="/about">Despre noi</A>
                        </li>
                        <li>
                            <A href="/contact">Contact</A>
                        </li>
                    </ul> }
                </nav>
            </div> 
        </header>
    )
}
function useWindowSize() {
    const isClient = typeof window === 'object';
  
    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      };
    }
  
    const [windowSize, setWindowSize] = useState(getSize);
  
    useEffect(() => {
      if (!isClient) {
        return false;
      }
      
      function handleResize() {
        setWindowSize(getSize());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowSize;
  }
export default Header;