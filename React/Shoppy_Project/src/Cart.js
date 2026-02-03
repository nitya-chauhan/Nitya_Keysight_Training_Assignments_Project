import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  // Helper: update state + localStorage together
  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Increase quantity
  const increaseQty = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    updateCart(updatedCart);
  };

  // Decrease quantity (qty = 1 → delete item)
  const decreaseQty = (id, qty) => {
    if (qty === 1) {
      const updatedCart = cartItems.filter(item => item.id !== id);
      updateCart(updatedCart);
    } else {
      const updatedCart = cartItems.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      updateCart(updatedCart);
    }
  };

  // Empty whole cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  // Total price calculation
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <h1>Cart Page</h1>

      <div className="cart-container">
        <table>
          <colgroup>
    <col style={{ width: "80px" }} />     {/* Image */}
    <col />                               {/* Product Name */}
    <col style={{ width: "140px" }} />    {/* PRICE COLUMN */}
    <col style={{ width: "160px" }} />    {/* Quantity */}
  </colgroup>
  <thead>
    <tr>
      <th>Image</th>
      <th>Product Name</th>
      <th>Price</th>
      <th>Quantity</th>
    </tr>
  </thead>

  <tbody>
  {cartItems.map((item) => (
    <tr key={item.id}>
      <td>
        <img src={item.image} alt={item.title} />
      </td>

      <td>{item.title}</td>

      {/* 👇 YAHI LINE */}
      <td className="price-col">₹ {item.price}</td>

      <td>
        <div className="qty-box">
          <button onClick={() => decreaseQty(item.id, item.quantity)}>
            {item.quantity === 1 ? "🗑️" : "-"}
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQty(item.id)}>+</button>
        </div>
      </td>
    </tr>
  ))}
</tbody>


  {/* 🔴 PRICE COLUMN KE NEECHे */}
 <tfoot>
  <tr>
    {/* LEFT SIDE — Purchase buttons */}
    <td colSpan="2">
      <div className="cart-actions">
        <Link to="/category/clothing">
          <button>Purchase More Clothing</button>
        </Link>

        <Link to="/category/electronics">
          <button>Purchase More Electronics</button>
        </Link>
      </div>
    </td>

    {/* PRICE COLUMN — Total */}
    <td className="price-col total-price">
      Total Price: ₹ {totalPrice.toFixed(2)}
    </td>

    {/* RIGHT SIDE — Empty cart */}
    <td style={{ textAlign: "right" }}>
      <button className="clear-cart-btn" onClick={clearCart}>
        Empty Cart
      </button>
    </td>
  </tr>
</tfoot>



</table>


        {/* Bottom row: left buttons + right empty cart */}
        

      
      </div>
    </>
  );
}

export default Cart;
