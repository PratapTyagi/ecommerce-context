import { CartState } from "../context/index";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    const res = cart.reduce((prev, curr) => prev + curr.price, 0);
    setTotalPrice(res);
  }, [cart]);

  const removeFromCart = (prod) => {
    dispatch({ type: "DELETE_FROM_CART", payload: prod });
  };
  return (
    <div className="cart">
      <div className="home cart_items">
        {cart.map((item) => {
          return (
            <div key={item.id} className="item">
              <img
                src={item.image}
                alt={item.label ? item.label : item.title}
                title={item.label ? item.label : item.title}
              />
              <div className="right">
                <span>{item.label ? item.label : item.title}</span>
                <span>
                  <strong>Price: </strong>
                  {item.price}
                </span>
                <span>
                  <strong>SalesRank: </strong> {item.salesRank}
                </span>
              </div>
              <button>
                <FaTrash
                  color="red"
                  fontSize="12px"
                  onClick={() => removeFromCart(item)}
                />
              </button>
            </div>
          );
        })}
      </div>
      <div className="filter">
        <h2>Total cost</h2>
        <br />$ {totalPrice}
      </div>
    </div>
  );
};

export default Cart;
