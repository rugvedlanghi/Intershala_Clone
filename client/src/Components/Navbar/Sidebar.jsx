import React, { useEffect, useState } from 'react'
import logo from "../../Assets/internship_logo.png"

function Sidebar() {
    const [SidebarOpen,setSidebarOpen] = useState(false)
    const opensidebar =() =>{
        setSidebarOpen(true)
    }
    const cloudSidebar=() => {
        setSidebarOpen(false)
    }
    useEffect(()=>{
        const handelOutsideClick=(e)=>{
            if(SidebarOpen && !e.target.closest('.sidebar') && !e.target.closest('open-btn')){
                cloudSidebar()
            }
            document.addEventListener('click',handelOutsideClick)
            return ()=>{
                document.removeEventListener('click',handelOutsideClick)
            }
        }
    },[SidebarOpen])
    const user=1;
  return (
    <>    
    <div className='App2 -mt2 overflow-hidden'>
    <img src={logo} alt="" />

    <div className={`sidebar ${SidebarOpen ? 'open': ""}`}>
        <span className='cursor-pointer close-btn' onClick={cloudSidebar}></span>
    </div>
    </div>
    </>
  )
}

export default Sidebar