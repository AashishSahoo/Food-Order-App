import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Elevate your dining experience with Fusion—a menu filled with diverse
          and delicious dishes, all crafted with the best ingredients to satisfy
          every craving.
        </p>
        <button>
          <a href="#explore-menu">View Menu</a>
        </button>
      </div>
    </div>
  );
};
export default Header;
