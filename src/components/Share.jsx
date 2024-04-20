import { FaPhotoVideo } from "react-icons/fa";
import { PiTagSimpleFill } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMood } from "react-icons/md";

function Share() {
  return (
    <div>
      <div className='border rounded-md px-3 py-4 shadow-2xl mt-6 shadow-slate-300 '>
        <div className='flex items-center mb-9 my-4 gap-2'>
            <img className='w-[40px] rounded-full ' src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp" alt="" />
            <input className="w-full  px-2 p-1 rounded-2xl" placeholder='Whats on your mind?' />
        </div>
        <hr className='border-t-2 border-gray-300 mr-6 ml-6' />
        <div className="flex my-3 mt-8 mb-3 justify-around">
            <div className="flex gap-2 items-center">
            <FaPhotoVideo className="text-orange-600" />
            <span>Photo or Video</span>
            </div>
            <div className="flex items-center gap-2">
                <PiTagSimpleFill className="text-blue-600"/>
                <span>Tags</span>
            </div>
            <div className="flex  items-center gap-2">
                <CiLocationOn className="text-green-600"/>
                <span>Locations</span>
            </div>
            <div className="flex  items-center gap-2">
                <MdOutlineMood className="text-yellow-600"/>
                <span>Feelings</span>
            </div>
            <button className="bg-blue-600 px-3 rounded-lg text-white">share</button>
        </div>
      </div>
    </div>
  )
}

export default Share
