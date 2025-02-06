import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Technologies from "./pages/Technologies";
import Team from "./pages/Team";
import Documentation from "./pages/Documentation";
import Blog from "./pages/Blog";

const Footer = () => (
  <footer className="bg-gray-900 p-6 text-center text-white">
    <p>Follow us on Social Media</p>
  </footer>
);

const App = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <nav className="p-6 flex justify-around bg-gray-900 text-white">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/technologies">Technologies</Link>
          <Link to="/team">Team</Link>
          <Link to="/documentation">Docs</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/team" element={<Team />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;