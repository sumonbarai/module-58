import React from "react";
import useFirebase from "../../hooks/useFirebase";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  const { user, handleSignOut } = useFirebase();

  return (
    <div className="header-area">
      <nav>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/orders">Orders</CustomLink>
        <CustomLink to="/register">Register</CustomLink>
        <span>{user?.displayName && user.displayName}</span>
        {user?.uid ? (
          <button className="ms-1" onClick={handleSignOut}>
            sign out
          </button>
        ) : (
          <CustomLink to="/login">Login</CustomLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
