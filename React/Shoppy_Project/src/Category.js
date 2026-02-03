import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Category.css";


function Category() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (name === "clothing") {
      // fetch men's + women's clothing
      Promise.all([
        fetch("https://fakestoreapi.com/products/category/men's clothing").then(res => res.json()),
        fetch("https://fakestoreapi.com/products/category/women's clothing").then(res => res.json())
      ]).then(([men, women]) => {
        setProducts([...men, ...women]);
      });
    } else {
      // electronics etc
      fetch(`https://fakestoreapi.com/products/category/${name}`)
        .then(res => res.json())
        .then(data => setProducts(data));
    }
  }, [name]);

  return (
    <>
      <h1>Welcome to {name} Page</h1>

      {/* Row 1 */}
      <div className="category-row">

        {products.slice(0, 6).map((product) => (
          <div className="product-card">

          
            <img src={product.image} alt={product.title} width="150" height="150" />
            <p>
              <Link to={`/product/${product.id}`}>{product.title}</Link>
            </p>
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="category-row">
        {products.slice(6, 12).map((product) => (
          <div className="product-card">
          
            <img src={product.image} alt={product.title} width="150" height="150" />
            <p>
              <Link to={`/product/${product.id}`}>{product.title}</Link>
            </p>
          </div>
        ))}
      </div>

      <hr />
      <footer>
        <p>
            <Link to="/">← Back to Home</Link>
        </p>
      </footer>
    </>
  );
}

export default Category;
