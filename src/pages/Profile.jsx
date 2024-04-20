import React from 'react'
import Navbar from '../components/Navbar'
import RightBar from '../components/RightBar'
import Feed from '../components/Feed'
import SideBar from '../components/SideBar'



function Profile() {
  return (
    <div>
    <Navbar/>
    <div className='flex justify-between mx-4'>
        <SideBar/>
        <div className='zakiprofile border relative '>
            <div className='relative'>
                <img className='w-full h-[350px]' src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
            </div>
            <div className='absolute top-64 left-1/2 transform -translate-x-1/2 flex items-center profileImage'>
                <img className='w-[150px] rounded-full object-cover' src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp" alt="" />
            </div>
            <div className='text-center mt-14 '>
                <p className='text-2xl font-bold'>Zakarya Khan</p>
                <p>Hello my Friends!</p>
            </div>
            <div className='flex mt-8'>
                <Feed/>
                <RightBar Profile/>
            </div>
        </div>
    </div>
</div>


  
  )
}

export default Profile
