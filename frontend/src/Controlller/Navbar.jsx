import React, { useState } from 'react'
import Login from './Login'

const Navbar = ({login,setLogin}) => {
 
  
  
  return (
<>
<div className="navbar bg-slate-900 md:text-white font-serif font-bold sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a href='/'>Home</a></li>
              <li><a href='/studio'>Studio</a></li>
              <li><a>Service</a></li>
              <li><a>About us</a></li>
              <li><a>Contact</a></li>
             
            </ul>
          </div>
          <a className="text-2xl"><span className="text-3xl text-red-500">S</span>tudio.com</a>
        </div>
        <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><a  href='/'>Home</a></li>
          <li><a href='/studio'>Studio</a></li>
          <li><a>Service</a></li>
           <li><a>About us</a></li>
          <li><a>Contact</a></li>
             
          </ul>
        </div>
        {
            login?<a className="btn btn-outline btn-accent" onClick={()=>document.getElementById('my_modal_1').showModal()}>
            logout
            
            </a>
            :
            <a className="btn btn-outline btn-accent" onClick={()=>document.getElementById('my_modal_1').showModal()}>
            Login
            
            </a>
        }
          
          <Login login={login} setLogin={setLogin}/>
        </div>
      </div>
</>
  )
}

export default Navbar
