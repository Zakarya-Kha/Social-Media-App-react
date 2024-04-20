import React from 'react'

function Online({user}) {
  return (
    
    <div className='flex items-center mt-5 gap-3'>
    <img className='w-[40px] rounded-full object-cover h-[40px]' src={user.profilePicture} alt="" />
    <span className="font-bold">{user.username}</span>
    </div>  
  
  )
}

export default Online
