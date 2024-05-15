import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Intern from "./Components/Internships/Intern";
import JobAvl from "./Components/Job/JobAvl";
import { Routes,Route } from "react-router-dom";
import JobDetail from "./Components/Job/JobDetail";
import InternDetail from "./Components/Internships/InternDetail";
import Register from "./Components/auth/Register";

function App() {
  return (
    <div>   
      <Navbar/>
      
      <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path="/" element={<Home/>} />
      <Route path="/Internships" element={<Intern/>} />
      <Route path="/Job" element={<JobAvl/>} />
      <Route path="/Job_details" element={<JobDetail/>} />
      <Route path="/Intern_details" element={<InternDetail/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
