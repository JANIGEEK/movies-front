import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand mx-3" to="/">
          Movie-Look
        </Link>
        <Link className="navbar-brand mx-3" to="/login">
          Login
        </Link>
        <Link className="navbar-brand mx-3" to="/signup">
          Signup
        </Link>
        <Search />
      </div>
    </nav>
  );
};

export default Header;
