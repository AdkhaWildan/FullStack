import { NavLink, Link, Outlet } from "react-router-dom";
import "../styles/main.css";

function RootLayout() {
  return (
    <>
      <NavLink
        className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
        style={{
          marginRight: "10px",
        }}
        to="/"
      >
        Home
      </NavLink>
      |
      <NavLink
        className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
        style={{
          marginLeft: "10px",
          marginRight: "10px",
        }}
        to="/blog"
      >
        Blog
      </NavLink>
      |
      <NavLink
        className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
        style={{
          marginLeft: "10px",
        }}
        to="/about"
      >
        About
      </NavLink>
      <p></p>
      <Outlet />
    </>
  );
}

export default RootLayout;
