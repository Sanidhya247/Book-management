import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import React from "react";
import YourBooks from "./components/YourBooks";
import BookState from "./context/bookState";

function App() {
  return (
    <>
      <BookState>
        <Router>
          <Navbar />
          <div>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/yourbooks" element={<YourBooks />}></Route>
            </Routes>
          </div>
          <Footer />
        </Router>
      </BookState>
    </>
  );
}

export default App;
