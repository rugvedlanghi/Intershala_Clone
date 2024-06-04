import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [username,setusername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const loginadmin = async() =>{
      if(username==="" || password===""){
        alert('Fill the blanks');
  }else{
    const bodyjson={
      username: username,
      password: password
      
    };
    axios.post("http://localhost:5000/api/admin/adminLogin",bodyjson).then((res)=>{
      console.log(res,"Data is sent")
      alert("Admin Logged in")
      navigate("/adminpanel")
    } ).catch((err)=>{
      console.log(err,"Data failed to sent")
    })

  }
}

  return (
    <div>
      <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Admin Login</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Admin Details</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text"  id="name" value={username} onChange={(e)=>setusername(e.target.value)} name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="Pass" class="leading-7 text-sm text-gray-600">Password</label>
            <input type="password" id="pass" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div>
        <button onClick={loginadmin} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default AdminLogin