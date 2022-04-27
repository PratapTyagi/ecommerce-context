import React, { useState } from "react";
import { CartState } from "../context";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const removeFromCart = (prod) => {
    dispatch({ type: "DELETE_FROM_CART", payload: prod });
  };

  return (
    <div className="header">
      <Link
        to="/"
        className="link"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <h3>TechCart</h3>
      </Link>
      <input type="text" placeholder="Search Item" />
      <button onClick={() => setisOpen(!isOpen)}>
        <FaShoppingCart color="white" fontSize="14px" />
        <span>{cart.length}</span>
      </button>

      {isOpen ? (
        <div className="dropdown">
          {cart.map((cartItem) => {
            return (
              <div className="item" key={cartItem.id}>
                <img src={cartItem.image} alt={cartItem.label} />
                <span>{cartItem.label ? cartItem.label : cartItem.title}</span>
                <button>
                  <FaTrash
                    color="red"
                    fontSize="12px"
                    onClick={() => removeFromCart(cartItem)}
                  />
                </button>
              </div>
            );
          })}

          <Link
            to="/cart"
            className="link"
            style={{ textDecoration: "none", marginBottom: "8px" }}
          >
            <button>Cart Page</button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
