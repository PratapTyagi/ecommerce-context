import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import Routing from "./Routing";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routing />
      </div>
    </Router>
  );
}

export default App;
