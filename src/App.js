import "./App.css";
import { Filter, Header, Home } from "./components";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <Filter />
        <Home />
      </div>
    </div>
  );
}

export default App;
