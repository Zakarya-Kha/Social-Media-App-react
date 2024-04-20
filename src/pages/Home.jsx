import React from 'react'
import Navbar from '../components/Navbar'
import RightBar from '../components/RightBar'
import Feed from '../components/Feed'
import SideBar from '../components/SideBar'

function Home() {
  return (
    <div>
      <Navbar/>
      <div className='flex justify-between mx-4'>
      <SideBar/>
      <Feed/>
      <RightBar/>
      </div>
    </div>
  )
}

export default Home
