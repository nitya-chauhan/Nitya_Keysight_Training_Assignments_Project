import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Header / Navbar */}
      <h1>Welcome to Shoppy Page</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About Us</Link> |{" "}
        <Link to="/category/electronics">Electronics</Link> |{" "}
        <Link to="/category/clothing">Clothing</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <hr />

      {/* Description Section */}
      <h2>About Shoppy</h2>
      <p>
        Shoppy is a modern e-commerce platform designed to provide users with a simple, smooth, and convenient online shopping experience. The website allows customers to browse products across different categories, explore detailed product information, and make informed purchasing decisions from the comfort of their homes. With an intuitive layout and clear navigation, Shoppy ensures that users can easily discover products that match their needs and preferences.The platform organizes products category-wise, enabling users to quickly filter and view items such as electronics and clothing without unnecessary complexity. Each product is presented in a clean card format with images and names, allowing customers to visually compare multiple items at once. By clicking on a product, users can view detailed information including price, description, category, and other essential details, replicating the functionality of a real-world online shopping application.Shoppy focuses on delivering a seamless browsing experience by minimizing page reloads and maintaining smooth navigation between different sections of the website. This enhances user engagement and creates a faster, more responsive shopping environment. The design emphasizes clarity, accessibility, and usability, ensuring that even first-time users can navigate the platform effortlessly.Overall, Shoppy represents a simplified version of a real e-commerce website, showcasing the core workflow of online shopping—from browsing products to viewing detailed product pages. It serves as a practical demonstration of how digital storefronts operate while prioritizing user convenience, product visibility, and an organized shopping experience.
      </p>

      <hr />

      {/* Categories Section */}
      <h3>Categories:</h3>
      <ul>
        <li>
          <Link to="/category/electronics">Electronics</Link>
        </li>
        <li>
          <Link to="/category/clothing">Clothing</Link>
        </li>
      </ul>

      <hr />

      {/* Footer */}
      <footer>
        <h4>© Shoppy</h4>
      </footer>
    </>
  );
}

export default Home;
