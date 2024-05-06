import React from "react";
import logo from "../../Assets/internship_logo.png";
import "./navbar.css";
import Sidebar from "./Sidebar";

function Navbar() {
  const user = 1;
  return (
    <div>
      <nav className="nav1">
        <ul>
          <div className="img">
            <img src={logo} alt="" />
          </div>
          <div className="elem">
            <p id="int">
              Internship <i class="bi bi-caret-down-fill"></i>
            </p>
            <p>
              Jobs <i class="bi bi-caret-down-fill"></i>
            </p>
          </div>
          <div className="search">
            <i class="bi bi-search"></i>
            <input type="text" placeholder="Search" />
          </div>
          <div className="auth">
            <button className="log">Login</button>
            <button className="regi">Register</button>
          </div>
          <div className="flex mt-7 hire">Hire Talent</div>
          <div className="admin">
            <button>Admin</button>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
