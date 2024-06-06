import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "./admin.css";


function ViewAllApplication() {
   
    const [application,setApplication] = useState([])
    useEffect(()=>{
        const fetchApplication= async ()=>{
            try{
        const response = await axios.get(`http://localhost:5000/api/application`)
        setApplication(response.data)
        }catch(err){
            alert(err)
        }
    }
    fetchApplication();
    
    },[])
  return (
    <div>
        <div className='hide'>
     
     <h1 className='text-3xl font-semibold mt-3'>Total Applications</h1>
     <div className="flex justify-center " id='tabel'>
         <div className="applications flex flex-col mt-7">
             <div className="overflow-x-auto sm:-mx-6 lg:mx-8">
                 <table className="inline-block min-w-full text-left text-sm font-light">
 <thead className='border-b font-medium'>
     <tr className='bg-gray-200'>
         <th scope='col' className='px-5 py-4'>Company</th>
         <th scope='col' className='px-5 py-4'>Category</th>
         <th scope='col' className='px-5 py-4'>Applied On</th>
         <th scope='col' className='px-5 py-4'>Applied By</th>
         <th scope='col' className='px-5 py-4'>View Detail</th>
         <th scope='col' className='px-5 py-4'>Application Status</th>
 
     </tr>
 
 </thead>
 <tbody>
    {
        application.map((data)=>(
            <tr className='border-b'>
            <td className='whitespace-nowrap px-6 py-4'>{data?.company}</td>
            <td className='whitespace-nowrap px-6 py-4'>{data?.category}</td>
            <td className='whitespace-nowrap px-6 py-4'>{new Date(data?.createAt).toLocaleDateString()}</td>
            <td className='whitespace-nowrap px-6 py-4'>{data?.user?.name }</td>
            <td className='whitespace-nowrap px-6 py-4'><Link to={`/detailApplication?q=${data?._id}`}><i class="bi bi-envelope-open text-blue-500"></i></Link></td>
            <td className='whitespace-nowrap px-6 py-4'>{data?.status}</td>
            </tr>
        ))
    }
 </tbody>
 
                 </table>
 
             </div>
 
         </div>
 
     </div>
  
     </div>

     


    </div>
  )
}

export default ViewAllApplication