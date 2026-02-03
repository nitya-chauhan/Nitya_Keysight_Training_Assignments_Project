import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <>
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-container">
        <p className="contact-text">
          We’d love to hear from you! If you have any questions, feedback,
          or need support regarding your shopping experience on Shoppy,
          feel free to reach out using the details below.
        </p>

        <div className="contact-details">
          <p>
            <strong>Email:</strong> support@shoppy.com
          </p>
          <p>
            <strong>Phone:</strong> +91 9xxxx xxxxx
          </p>
        </div>
      </div>

      {/* Back to home (same as Electronics / About) */}
      <div className="back-home">
        <Link to="/">← Back to Home</Link>
      </div>
    </>
  );
}

export default Contact;
