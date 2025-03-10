import React from "react";
 import "./Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">MDCOM</div>
      <nav className="nav-links">
        <span>Home</span>
        <span>Shop All</span>
        <span>Blog</span>
        <span>About Us</span>
      </nav>

      <div className="search-bar">
        <input type="text" placeholder="Search Product..." />
      </div>
    </header>
  );
};
