import React from "react";
import Restaurant from './components/Restaurant';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { CartProvider } from './CartContext';

const routes = {
  "/": () => <Home />,
  "/about": () => <About />,
  "/contact": () => <Contact />,
  "/restaurant/:id": () =>
      <CartProvider>
        <Restaurant />
      </CartProvider>,
  "/restaurant/:id/:filter": () =>
  <CartProvider>
    <Restaurant />
  </CartProvider>
};
export default routes;