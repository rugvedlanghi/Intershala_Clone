import React, { useEffect, useState } from "react";
import logo from "../../Assets/internship_logo.png";
import './sidebar.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Sidebar() {
  const [SidebarOpen, setSidebarOpen] = useState(false);
  const opensidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  useEffect(() => {
    const handelOutsideClick = (e) => {
      if (
        SidebarOpen &&
        !e.target.closest(".sidebar") &&
        !e.target.closest("open-btn")
      ) {
        closeSidebar();
      }
      document.addEventListener("click", handelOutsideClick);
      return () => {
        document.removeEventListener("click", handelOutsideClick);
      };
    };
  }, [SidebarOpen]);

  const logoutFuction = () => {

  }
  const user = 1;
  // const user=1;
  return (
    <>
    <div>
      <div className="App2 -mt-2 overflow-hidden">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className={`sidebar ${SidebarOpen ? "open" : ""}`}>
        <span className="cursor-pointer close-btn" onClick={closeSidebar}>
          &time;
        </span>
        {user ? (
          <>
            <div className="profile">
              <Link to={"/profile"}>
                <img
                  className="rounded-full justify-center"
                  src={user.photo}
                  alt=""
                  srcset=""
                />
              </Link>
              <p className=" text-center">
                Profile name{" "}
                <span
                  className="font-bold
text-blue-500"
                >
                  {user?.name}
                </span>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="auth">

            </div>
          </>
        )
        }
    <Link to="/internship">Internship</Link>
    <Link to="/job">Jobs</Link>
    <Link to="/">Contact Us</Link>
    <hr />
    {
        user?(
            <Link to={'"/userapplication"'}>
                <p>My Application</p>
            </Link>
        ):(
            <>
            <Link to={'"/regsiter"'}>
                <p>Register</p>
            </Link>
        
    <Link>
    <p>View Resume</p>
    </Link>
    <Link>
    <p>More</p>
    </Link>
    <button className="bt-log" id="bt" onClick={logoutFuction}>
    <i class="bi bi-box-arrow-right"></i>
    </button>
    </>
    )
}
      </div>
      </div>
    </>
  );
}

export default Sidebar;
