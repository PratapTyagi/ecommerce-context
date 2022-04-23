import { createContext, useContext, useReducer } from "react";
import data from "../data.js";
import { cartReducer } from "./Reducers.js";

const CartContext = createContext();
const EcommerceContext = ({ children }) => {
  let updatedData = data.map((d) => ({
    id: d._id.oid,
    category: d.category,
    label: d.label,
    image: d.images.medium.url,
    title: d.title,
    price: d.price === undefined ? "Not disclosed" : d.price,
    salesRank: d.salesrank,
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: updatedData,
    cart: [],
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default EcommerceContext;

export const CartState = () => {
  return useContext(CartContext);
};
