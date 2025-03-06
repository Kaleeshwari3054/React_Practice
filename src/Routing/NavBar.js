import React from "react";
import "../App.css";
import { Link, Outlet } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/home" className="link">
          home
        </Link>
        <Link to="/about" className="link">
          about
        </Link>
        <Link to="/dashboard" className="link">
          dashboard
        </Link>
        <Link to="/settings" className="link">
          settings
        </Link>
      </nav>

      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
}
export default NavBar;
