import React, { useState } from "react";
import { CartState } from "../context";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const {
    state: { cart },
  } = CartState();

  return (
    <div className="header">
      <h3 className="logo">Groffers</h3>
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
                  <FaTrash color="red" fontSize="12px" />
                </button>
              </div>
            );
          })}

          <button>Cart Page</button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;