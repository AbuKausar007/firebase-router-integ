import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, handleLogOut } = useFirebase();
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="services">Services</Link>
      <Link to="register">Register</Link>
      <span>{user?.displayName && user.displayName} </span>
      {user?.uid ? (
        <button onClick={handleLogOut}>Log Out</button>
      ) : (
        <Link to="/login"> Login</Link>
      )}
    </nav>
  );
};

export default Header;
