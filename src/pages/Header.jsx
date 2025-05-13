import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../components/contexts/AuthContext";

export default function Header() {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handelLogout = async () => {
    try {
      await logout();
      navigate("/signIn");
      alert("You are logged out");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="header">
        <h1>Welcome to the Task Manager</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/signIn">Register</NavLink>
            </li>
            <li>
              <NavLink to="/CartPage">Cart</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink onClick={handelLogout}>Logout</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
