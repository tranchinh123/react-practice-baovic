import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
    setCartItems(storedCart);
  }, []);

  const addToCart = (productId) => {
    const newCart = { ...cartItems };
    newCart[productId] = (newCart[productId] || 0) + 1;
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeToCart = (productId) => {
    const newCart = { ...cartItems };
    delete newCart[productId];
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Đếm số sản phẩm khác nhau
  const getTotalUniqueItems = () => {
    return Object.keys(cartItems).length;
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeToCart, getTotalUniqueItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
