import { createContext } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const quantity = localStorage.getItem("cart");
  console.log(quantity);

  return (
    <CartContext.Provider value={quantity}>{children}</CartContext.Provider>
  );
};
