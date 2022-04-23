import { CartState } from "../context";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: prod });
  };

  return (
    <div key={prod.id} className="single_product">
      <img
        src={prod.image}
        alt={prod.label ? prod.label : prod.title}
        title={prod.label ? prod.label : prod.title}
      />
      <div className="description">
        <span>
          <strong>Category: </strong>
          {prod.category}
        </span>
        <span>
          <strong>Price: </strong>
          {prod.price}
        </span>
        <span>
          <strong>SalesRank: </strong>
          {prod.salesRank}
        </span>

        <div className="submit">
          {!cart.includes(prod) ? (
            <button onClick={addToCart}>Add To Cart</button>
          ) : (
            <button className="remove">Remove From Cart</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
