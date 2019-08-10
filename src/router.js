import React from "react";
import Restaurant from './components/Restaurant';
import Home from './components/Home';
import { CartProvider } from './CartContext';
const routes = {
  "/": () => <Home />,
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