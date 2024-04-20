import { BsThreeDotsVertical } from "react-icons/bs";
import { Users } from './dummyData'
import { useState } from "react";


function Post({Post}) {
  const [like, setLike] = useState(Post.like)
  const [islike, setIsLike] = useState(false)

  const likeHandler = () => {
    setLike(islike ? like - 1 : like + 1)
    setIsLike(!islike)
  }

  return (
    <div className="shadow-xl rounded-md   bg-white my-6 ">
    <div className="items-center px-2 flex justify-between">
      <div className="flex items-center mt-6 gap-3 ">
        <img className='w-[40px] rounded-full ' src={Users.filter((u)=> u.id === Post?.userId)[0].profilePicture} alt="" />
        <span className="font-bold">{Users.filter((u) => u.id === Post?.userId )[0].username}</span>
        <span className="text-sm text-gray-400">{Post.date}</span>  
      </div>
      <div>
        <BsThreeDotsVertical />
        </div> 
      </div>
        <div className="  px-4 mt-4 ">
            <p className="mb-4">{Post?.desc}</p>
            <img className="w-[650px] rounded-md object-cover " src={Post.photo} alt="" />
        </div>

        <div className="flex justify-between items-center mx-4">
            <div className="flex items-center ">
            <img
            onClick={likeHandler}
             className="w-[100px]  mt-3 object-cover " src="https://media.istockphoto.com/id/1361277890/vector/like-icons-with-thumb-up-and-heart-social-media-button-symbols-love-and-hand-with-finger.jpg?s=612x612&w=0&k=20&c=u3mKWaUwCiJIpO2Ian8IRvn8Gu4s_G5DepDNih-8evQ=" alt="" />
            <span className="text-gray-400"> {like} people like this post</span>
            </div>
            <div>
                <span>{Post.comment} comments </span>
            </div>
        </div>
      </div>

  )
}

export default Post
