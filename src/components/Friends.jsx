import React from 'react'

function Friends({user}) {
  return (
    <div>
      <div className='mt-4 flex items-center gap-2'>
            <img className='w-[60px] rounded-full' src={user.profilePicture} alt="" />
            <span>{user.username}</span>
        </div>
    </div>
  )
}

export default Friends
