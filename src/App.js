import "./App.css";

import Menubar from "./components/Menubar/Menubar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Apply from "./pages/Apply/Apply";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Menubar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="apply-for-free-coding-events-workshops" element={<Apply />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
