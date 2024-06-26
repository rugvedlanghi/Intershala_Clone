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
import { useDispatch, useSelector } from "react-redux";
import {selectUser, login , logout } from "./Feature/Userslice";
import { useEffect } from "react";
import { auth } from "./firebase/Firebase";
import Profile from "./Profile/Profile";
import AdminLogin from "./Admin/AdminLogin"
import Adminpanel from "./Admin/Adminpanel"
import Postinternships from "./Admin/Postinternships"
import PostJob from "./Admin/PostJob";
import ViewAllApplication from "./Admin/ViewAllApplication"
import DetailApplication from "./Applications/DetailApplication";

function App() {
  // const user=useSelector(selectUser);
  // const dispatch=useDispatch();
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       dispatch(login({
  //         uid: authUser.uid,
  //         photo: authUser.photoURL,
  //         name: authUser.displayName,
  //         email: authUser.email,
  //       }));
  //     } else {
  //       dispatch(logout());
  //     }
  //   });
  // }, [dispatch]);
  
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          name:authUser.displayName,
          email:authUser.email,
        }))
      }
        else{
          dispatch(logout())
        }
    })
    },[dispatch] );

  return (
    <div>   
      <Navbar/>
      
      <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path="/" element={<Home/>} />
      <Route path="/Internships" element={<Intern/>} />
      <Route path="/Job" element={<JobAvl/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/detailJob" element={<JobDetail/>} />
      <Route path="/detailInternship" element={<InternDetail/>} />
      <Route path="/adminLogin" element={<AdminLogin/>} />
      <Route path="/adminpanel" element={<Adminpanel/>} />
      <Route path="/postInternship" element={<Postinternships/>} />
      <Route path="/postJob" element={<PostJob/>} />
      <Route path="/applications" element={<ViewAllApplication/>} />
      <Route path="/detailApplication" element={<DetailApplication/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
