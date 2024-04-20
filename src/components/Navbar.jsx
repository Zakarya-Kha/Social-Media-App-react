import React from 'react'
import { FaSearch } from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";
import { FaRocketchat } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';



function Navbar() {
  return (
    <div className='flex justify-around items-center bg-blue-600 py-1  text-white'>
      <div>
        {/* logo */}
        <span className='text-4xl font-bold'>Face</span><span className='text-4xl font-bold text-red-600'>book</span>
      </div>
      <div className='border w-[45%] h-[30px] bg-white  text-black rounded-3xl flex items-center '>
        {/* search bar */}
        <FaSearch className='font-bold ml-[10px]'/>
        <input 
        className='w-[70%] ml-[10px] border-none  outline-none'
        placeholder='Search for friend, post or video' />
      </div>
      <div className=''>
        {/* text */}
        <ul>
          <li>
          <NavLink to='/'  className={({isActive})=>  `mr-[20px] ${isActive? "text-orange-500": ""}  cursor-pointer`}>HomePage</NavLink>
        <NavLink to='/register'  className={({isActive})=>  `mr-[20px] ${isActive? "text-orange-500": ""}  cursor-pointer`}>Register</NavLink>
        <NavLink to='/login' className={({isActive})=> `mr-[20px] ${isActive? "text-orange-500": ""}   cursor-pointer`}>Login</NavLink>
          </li>
        </ul>
        
      </div>
      <div className='flex cursor-pointer gap-5'>
        {/* icon */}
        <div>
        <span className='text-sm rounded-full px-1 bg-red-700'>1</span>
        <MdPersonAdd  className='text-2xl'/>
        </div>

        <div>
        <span className='text-sm rounded-full px-1  bg-red-700'>9</span>
        <FaRocketchat  className='text-2xl' />
        </div>

        <div className=''>
        <span className='text-sm rounded-full px-1 bg-red-700'>7</span>
        <IoIosNotifications  className='text-2xl' />
        </div>

      </div>
      <div>
        {/* prfile img */}
       <Link to='/profile' > <img className='w-[55px]  cursor-pointer object-cover rounded-full' src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp" alt="profile image" /> </Link>
      </div>
    </div>
  )
}

export default Navbar
