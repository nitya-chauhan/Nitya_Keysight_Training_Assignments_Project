import React from "react";
import "./About.css";
import { Link } from "react-router-dom";


function About() {
  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        About Shoppy
      </h2>

      <p style={{ lineHeight: "1.8", color: "#374151" }}>
        Shoppy is an e-commerce platform designed to simplify the process of online buying and selling by bringing multiple product categories together in one place. The platform allows customers to browse products, compare prices, and make purchase decisions easily through a structured and user-friendly interface. By organizing products into clear categories such as electronics and clothing, Shoppy helps users quickly find items that match their needs without unnecessary complexity.

The primary objective of Shoppy is to demonstrate the core workflow of an online commerce system. Users can view product listings, check detailed product information including price and category, and add items to their shopping cart. The cart functionality enables users to manage product quantities, remove items, and view the total price before proceeding further. This reflects the essential features commonly found in real-world e-commerce websites.

Shoppy focuses on providing a smooth shopping experience by maintaining a clean layout and simple navigation structure. Each product is displayed in a card-based format with an image and title, allowing customers to visually evaluate products before selecting them. Category-wise navigation ensures that users can explore different types of products without confusion, improving usability and accessibility.

From a commerce perspective, Shoppy emphasizes transparency and clarity. Prices are clearly displayed, quantities can be adjusted easily, and the total cost is calculated dynamically to help users understand their purchase value. This mirrors standard e-commerce practices where customers expect clear pricing and control over their cart before checkout.

Overall, Shoppy represents a simplified e-commerce application that highlights the fundamental concepts of online shopping. It showcases how digital storefronts operate by combining product browsing, category management, and cart-based purchasing into a single cohesive platform, making it an effective demonstration of core commerce functionality.

      </p>
      <div className="back-home">
  <Link to="/">← Back to Home</Link>
</div>

    </div>
    
  );
}

export default About;
