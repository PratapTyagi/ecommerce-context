import { Route, Routes } from "react-router-dom";
import { Cart, Filter, Home } from "./components";

const Routing = () => {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <div className="body">
            <Filter />
            <Home />
          </div>
        }
      />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routing;
