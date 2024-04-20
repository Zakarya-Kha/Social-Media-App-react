import React from 'react';
import { SlFeed } from 'react-icons/sl';
import { IoChatboxEllipses } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { MdEvent } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import Friends from './Friends';
import { Users } from './dummyData';

function SideBar() {
  return (
    <div className='sidebar '>
      <div className='flex flex-col '>
        <ul className=' px-4 '>
          <li className='flex items-center py-3 '>
            <SlFeed className='mr-2 font-bold text-xl' />
            <span>Feed</span>
          </li>

          <li className='flex items-center  py-3 '>
            <IoChatboxEllipses className='mr-2 font-bold text-xl' />
            <span>chat</span>
          </li>

          <li className='flex items-center py-3 '>
            <MdOndemandVideo className='mr-2 font-bold text-xl' />
            <span>Videos</span>
          </li>

          <li className='flex items-center py-3 '>
            <MdGroups className='mr-2 font-bold text-xl' />
            <span>Groups</span>
          </li>

          <li className='flex items-center py-3 '>
            <IoBookmarkSharp className='mr-2 font-bold text-xl' />
            <span>Bookmarks</span>
          </li>

          <li className='flex items-center py-3 '>
            <BsFillQuestionSquareFill className='mr-2 font-bold text-xl' />
            <span>Questions</span>
          </li>

          <li className='flex items-center py-3 '>
            <MdEvent className='mr-2 font-bold text-xl' />
            <span>Events</span>
          </li>

          <li className='flex items-center py-3 '>
            <ImBooks className='mr-2 font-bold text-xl' />
            <span>Courses</span>
          </li>
        <button className='bg-gray-300 px-3 rounded-md'>Show More</button>
        <hr className='mt-3'/>
        </ul>

        {Users.map((user) =>(
          <Friends key={user.id} user={user} />
        ))}

   
      </div>
    </div>
  );
}

export default SideBar;
