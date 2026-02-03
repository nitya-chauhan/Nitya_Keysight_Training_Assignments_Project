import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Category from "./Category";
import Product from "./Product";
import Cart from "./Cart";   
import About from "./About";
import Contact from "./Contact";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/category/:name" element={<Category />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />   
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
