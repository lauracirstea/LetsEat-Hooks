import React, { useContext, useEffect, useState} from 'react';
import '../App.css';
import db from '../db';
import { CartContext } from '../CartContext';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

function Restaurant() {
  const pathname = window.location.pathname;
  const [foods, setFoods] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [modal, triggerModal] = useState(false);
  
  const id = pathname.split('/')[2];
  const restaurant = db.restaurants.find(_ => _.id === parseInt(id));

  useEffect(() => {
    const filter = pathname.split('/')[3];
    setFilter(filter);
  }, []);

  const handleOpenModal = () => {
    triggerModal(true);
  }

  const handleCloseModal = () => {
    triggerModal(false);
  }

  const setFilter = (activeFilter) => {
    if(activeFilter) {
      const filterFoods = db.foods.filter(food => 
        food.restaurantId === parseInt(id) && food.category.includes(activeFilter)
      );
      setFoods(filterFoods)
    } else {
      const filterFoods = db.foods.filter(food => food.restaurantId === parseInt(id));
      setFoods(filterFoods)
    }    
  }

  const [cart, setCart] = useContext(CartContext);

  const addToCart = (props) => {
    const delivery = { image: props.image, name: props.name, price: props.price, quantity: 1 };

    const existingItem = cart.find(_ => _.name === props.name);
    if(!existingItem) {
      setCart(currentState => [...currentState, delivery]);
      const newCart = [delivery, ...cart]
      processTotalPrice(newCart);
    } else {
      existingItem.quantity++;
      processTotalPrice(cart);
    }
  }

  const removeCart = index => {
    const newCart = cart.filter((_, idx) =>  idx !== index);
    setCart(newCart);
    processTotalPrice(newCart);
  };

  const handleQuantityChange = (e, index, price) => {
    const value = e.target.value;
    cart[index].quantity = value;
    processTotalPrice(cart)
  }

  const processTotalPrice = (cart) => {
    const totalPrice = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    setTotalPrice(totalPrice);
  }

  return (
    <Router>
      <Header />

      <main>
        <h1 className="restaurant-name"></h1>
        <div className="navbar" id="myBtnFilter">
          <Link onClick={() => setFilter()} to={`/restaurant/${restaurant.id}`} className="all btn active">Arata tot</Link>
          <Link onClick={() => setFilter('menu')} to={`/restaurant/${restaurant.id}/menu`} className="btn">Meniul zilei</Link>
          <Link onClick={() => setFilter('soup')} to={`/restaurant/${restaurant.id}/soup`} className="btn">Ciorbe/Supe</Link>
          <Link onClick={() => setFilter('appetizer')} to={`/restaurant/${restaurant.id}/appetizer`} className="btn">Antreuri</Link>
          <Link onClick={() => setFilter('chicken')} to={`/restaurant/${restaurant.id}/chicken`} className="btn">Carne pasare</Link>
          <Link onClick={() => setFilter('pig')} to={`/restaurant/${restaurant.id}/pig`} className="btn">Carne porc</Link>
          <Link onClick={() => setFilter('beef')} to={`/restaurant/${restaurant.id}/beef`} className="btn">Carne vita</Link>
          <Link onClick={() => setFilter('fish')} to={`/restaurant/${restaurant.id}/fish`} className="btn">Peste</Link>
          <Link onClick={() => setFilter('pasta')} to={`/restaurant/${restaurant.id}/pasta`} className="btn">Paste</Link>
          <Link onClick={() => setFilter('pizza')} to={`/restaurant/${restaurant.id}/pizza`} className="btn">Pizza</Link>
          <Link onClick={() => setFilter('burger')} to={`/restaurant/${restaurant.id}/burger`} className="btn">Burgeri</Link>
          <Link onClick={() => setFilter('salad')} to={`/restaurant/${restaurant.id}/salad`} className="btn">Salate</Link>
          <Link onClick={() => setFilter('desert')} to={`/restaurant/${restaurant.id}/desert`} className="btn">Desert</Link>
          <Link onClick={() => setFilter('dressing')} to={`/restaurant/${restaurant.id}/dressing`} className="btn">Garnituri/Paine/Sosuri</Link>
        </div>
        <div className="navbar-sub"> </div>
        <div className="cart trigger mobile" onClick={() => handleOpenModal()}>
          <i className="fa fa-shopping-cart"></i>
        </div>
        <div className="inner">
          <div className="container">
            
            { foods.map((food,k) => {
              return (
                <div key={k} className="column-item">
                  <article className="item">
                    <a href="#" className="item-image">
                      <div className="post-image">
                        <img className="shop-item-image"  src={require(`../${food.image}`)} />
                      </div>
                    </a>
                    <div className="post-content">
                      <h4 className="shop-item-title">{food.name}</h4>
                      <span className="price">Pret:
                        <span className="shop-item-price">{food.price} lei</span>
                      </span>
                      <p className="ingredients">{food.ingredients}</p>
                      <button className="shop-item-button" onClick={() => addToCart(food)}>Comanada <i className="fa fa-shopping-basket"></i></button>
                    </div>
                  </article>
                </div>
              )
            }) }
          </div>
          <div className="checkout" id="checkout-desktop">
            <h3>Comanda</h3>
            <hr />
            <div className="checkout-product">
              <div className="cart-row">
                <span className="cart-item cart-header cart-column">Produs</span>
                <span className="cart-price cart-header cart-column">Pret</span>
                <span className="cart-quantity cart-header cart-column">Cantitate</span>
              </div>
            </div>
            <div className="cart-items">
              { cart.map((item,key) => {
                return (
                  <div key={key} className="d-flex">
                    <div className="cart-item cart-column">
                      <img className="cart-item-image" src={require(`../${item.image}`)} width="100" height="100" />
                      <br />
                      <span className="cart-item-title">{item.name}</span>
                    </div>
                    <span className="cart-price cart-column center-item">{item.price}</span>
                    <div className="cart-quantity cart-column center-item">
                      <input className="cart-quantity-input" onChange={(e) => handleQuantityChange(e, key, item.price)} min="1" type="number" value={item.quantity}/>     
                      <i className="fa fa-trash delete" onClick={() => removeCart(key)}></i>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="cart-total">
              <strong className="cart-total-title">Total</strong>
              <span className="cart-total-price"> {totalPrice} lei</span>
            </div>
            <hr /> 
            <h4>Adresa livrare:</h4>
            <form className="command" action='#' method='#'>
              <label id="town" name="town">Oras</label>
              <input type="text" name="town" id="town" />
              <label id="address" name="address">Adresa</label>
              <input type="text" name="address" />
              <label id="phone" name="phone">Telefon</label>
              <input type="phone" name="phone" />
              <input type="submit" className="inline command-button-desktop" id="send" value="Trimite" />
            </form>
          </div>

          { modal && <div className="modal">
            <div className="modal-content">
              <span className="close-button" onClick={() => handleCloseModal()}>×</span>
              <div className="checkout" id="checkout-mobile">
              <h3>Comanda</h3>
              <hr />
              <div className="checkout-product">
                <div className="cart-row">
                  <span className="cart-item cart-header cart-column">Produs</span>
                  <span className="cart-price cart-header cart-column">Pret</span>
                  <span className="cart-quantity cart-header cart-column">Cantitate</span>
                </div>
              </div>
              <div className="cart-items">
                { cart.map((item,key) => {
                  return (
                    <div key={key} className="d-flex">
                      <div className="cart-item cart-column">
                        <img className="cart-item-image" src={require(`../${item.image}`)} width="100" height="100" />
                        <br />
                        <span className="cart-item-title">{item.name}</span>
                      </div>
                      <span className="cart-price cart-column center-item">{item.price}</span>
                      <div className="cart-quantity cart-column center-item">
                        <input className="cart-quantity-input" onChange={(e) => handleQuantityChange(e, key, item.price)} min="1" type="number" value={item.quantity}/>     
                        <i className="fa fa-trash delete" onClick={() => removeCart(key)}></i>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="cart-total">
                <strong className="cart-total-title">Total</strong>
                <span className="cart-total-price"> {totalPrice} lei</span>
              </div>
              <hr /> 
              <h4>Adresa livrare:</h4>
              <form className="command" action='#' method='#'>
                <label id="town" name="town">Oras</label>
                <input type="text" name="town" id="town" />
                <label id="address" name="address">Adresa</label>
                <input type="text" name="address" />
                <label id="phone" name="phone">Telefon</label>
                <input type="phone" name="phone" />
                <input type="submit" className="inline command-button-desktop" id="send" value="Trimite" />
              </form>
              </div>
            </div>
          </div> }
        </div>
      </main>

      <Footer />
      </Router>
  );
}

export default Restaurant;