import React, { Fragment, useState, useEffect } from "react";
import "../App.css";
import imageSection from "../assets/images/slide.jpg";
import imgSearch from "../assets/logo/search.png";
import imgChoose from "../assets/logo/choose.png";
import imgDelivery from "../assets/logo/delivery.png";
import imgFood from "../assets/logo/food.png";
import db from "../db";
import Header from './Header';
import Footer from "./Footer";

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
      <Header />

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
      <Footer />
    </Fragment>
  );
}

export default Home;
