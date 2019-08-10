import React, { Fragment, useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import "../App.css";
import logoFooter from "../assets/logo/logo-footer.png";
import logoHeader from "../assets/logo/logo.png";
import imageSection from "../assets/images/slide.jpg";
import imgSearch from "../assets/logo/search.png";
import imgChoose from "../assets/logo/choose.png";
import imgDelivery from "../assets/logo/delivery.png";
import imgFood from "../assets/logo/food.png";
import db from "../db";

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  
  function onSelectChange(e) {
    const value = parseInt(e.target.value);
    filterRestaurants(value);
  }

  useEffect(() => {
    filterRestaurants(1);
  }, []);

  const filterRestaurants = (id) => {
    const _ = db.restaurants.filter(restaurant => restaurant.cityId === id);
    return setRestaurants(_)    
  }

  return (
    <Fragment>
      <header>
        <div className="container-nav">
          <div className="logo-box">
            <a href="#">
              <img src={logoHeader} />
            </a>
          </div>
          <nav>
            <div className="toggle">
              <i className="fas fa-bars" id="menu-bar" />
            </div>
            <ul>
              <li>
                <a href="#">Acasa</a>
              </li>
              <li>
                <a href="about.html">Despre noi</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="section">
        <img src={imageSection} />
      </div>

      <div className="content">
        <div className="row">
          <div>
            <img src={imgSearch} />
            <h4>Cautare</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
          </div>
          <div>
            <img src={imgChoose} />
            <h4>Alegere</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
          </div>
          <div>
            <img src={imgDelivery} />
            <h4>Livrare</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
          </div>
          <div>
            <img src={imgFood} />
            <h4>Multumire</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
          </div>
        </div>
      </div>

      <main>
        <div className="custom-dropdown">
          <select default="1" onChange={(e) => onSelectChange(e)} id="city-select" >
            <option value="1">Craiova</option>
            <option value="2">Cluj-Napoca</option>
            <option value="3">Sibiu</option>
            <option value="4">Bucuresti</option>
            <option value="5">Brasov</option>
            <option value="6">Iasi</option>
          </select>
        </div>
        <div className="inner">
          <div className="index">
            {restaurants.map((restaurant, i) => {
              return (
                <div key={i} className="column-item">
                  <article className="item">
                    <a href={`/restaurant/${restaurant.id}`} className="item-image">
                      <div className="post-image">
                        <img
                          src={require(`../${restaurant.image}`)}
                          alt={restaurant.name}
                        />
                      </div>
                      <div className="post-content">
                        <h4>{restaurant.name}</h4>
                      </div>
                    </a>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <footer>
        <div className="footer-left">
          <img src={logoFooter} />
          <p className="footer-links">
            <a href="index.html">Acasa</a> |<a href="#">Contact</a>
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
    </Fragment>
  );
}

export default Home;
