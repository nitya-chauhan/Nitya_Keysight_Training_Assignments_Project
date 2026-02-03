import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Product.css";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="product-page">

        {/* LEFT: Product Image */}
        <div className="product-image-wrapper">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
        </div>

        {/* RIGHT: Product Details */}
        <div className="product-details">

          {/* Title */}
          <h2 className="product-title">
            {product.title}
          </h2>

          {/* Rating */}
          <div className="product-rating">
            <span className="rating-score">
              {product.rating?.rate} ★ Rating
            </span>
            <span className="rating-count">
              1,581 ratings
            </span>
          </div>

          {/* Amazon Choice */}
          <div className="amazon-choice">
            <img src="/images/pic1.png" alt="Amazon choice" />
          </div>

          {/* Limited Deal + Price */}
          <div className="price-section">
            <div className="deal-tag">
              Limited time deal
            </div>

            <div className="product-price">
              ₹ {product.price}
            </div>
          </div>

          {/* Fulfilled + Add to Cart */}
          <div className="cart-row">
            <div className="fulfilled">
              <img src="/images/pic2.png" alt="Fulfilled" />
            </div>

            <button
              className="add-to-cart"
              onClick={() => {
                const cart = JSON.parse(localStorage.getItem("cart")) || [];

                const existingProduct = cart.find(
                  item => item.id === product.id
                );

                if (existingProduct) {
                  existingProduct.quantity += 1;
                } else {
                  cart.push({ ...product, quantity: 1 });
                }

                localStorage.setItem("cart", JSON.stringify(cart));
                navigate("/cart");
              }}
            >
              Add to Cart
            </button>
          </div>

          {/* Category */}
          <div className="product-category">
            <b>Category:</b> {product.category}
          </div>

          {/* Description */}
          <div className="product-description">
            <b>Description:</b>
            <p>{product.description}</p>
          </div>

          {/* Bottom Icons */}
          <div className="product-services">
            <img src="/images/pic3.png" alt="Services" />
          </div>

        </div>
      </div>

      <hr />
    </>
  );
}

export default Product;
