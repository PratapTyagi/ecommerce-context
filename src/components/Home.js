import { CartState } from "../context/index";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return (
    <div className="home">
      {products.map((prod) => {
        return <SingleProduct prod={prod} />;
      })}
    </div>
  );
};

export default Home;
