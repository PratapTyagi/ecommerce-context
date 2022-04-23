import { CartState } from "../context/index";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  return (
    <div className="home">
      {products.map((prod) => {
        return <SingleProduct prod={prod} key={prod.id} />;
      })}
    </div>
  );
};

export default Home;
