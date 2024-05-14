import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Intern from "./Components/Internships/Intern";
import JobAvl from "./Components/Job/JobAvl";
import { Routes,Route } from "react-router-dom";


function App() {
  return (
    <div>   
      <Navbar/>
      
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Internships" element={<Intern/>} />
      <Route path="/Job" element={<JobAvl/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
