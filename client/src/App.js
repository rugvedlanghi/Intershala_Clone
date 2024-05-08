import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Navbar/Sidebar";
import { Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>   
      <Navbar/>
      <Home/>
      {/* <Routes>

      </Routes> */}
    </div>
  );
}

export default App;
