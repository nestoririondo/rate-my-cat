import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Rate from "./views/Rate";
import Scoreboard from "./views/Scoreboard";
import About from "./views/About";
import NavBar from "./components/NavBar";
import "./styles/App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rate" element={<Rate />} />
        <Route path="/scores" element={<Scoreboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <NavBar />
    </>
  );
}

export default App;
