import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Product } from "./components/Product";
import { Home } from "./components/Home";
import "./App.css";
import { AddProduct } from "./components/AddProduct";
import { ViewProduct } from "./components/ViewProduct";

function App() {
  // const addProduct = () => {};
  const [Products, setProduct] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch("http://localhost:9000/products");
    const data = await response.json();
    setProduct(data);
  };

  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/product"
            element={<Product products={Products} />}
          />
          <Route exact path="/add-product" element={<AddProduct />} />
          <Route exact path={"/view-product/:id"} element={<ViewProduct />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
