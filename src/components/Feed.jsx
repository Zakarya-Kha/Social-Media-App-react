import React from 'react'
import Share from './Share'
import Post from './Post'
import { Posts } from './dummyData'



function Feed() {
  return (

    <div className='feed p-2 px-3'>
      <Share/>
      {Posts.map((p)=> (
        <Post key={p.id} Post={p} />
      ))}
     
    </div>
  )
}

export default Feed
