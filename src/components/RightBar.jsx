import Online from "./Online"
import { Users } from "./dummyData"


function RightBar({Profile}) {

  const HomeRightBar = () => {
    return(
      <>
       <div className='flex items-center gap-3'>
        <img className='w-[40px] rounded-md' src="https://hips.hearstapps.com/hmg-prod/images/birthday-cake-with-happy-birthday-banner-royalty-free-image-1656616811.jpg?crop=0.668xw:1.00xh;0.0255xw,0&resize=980:*" alt="" />
        <p> <span className='font-bold'>Jala khan </span> and  <span className='font-bold'> 3 other friends</span> have birthday today </p>
      </div>
      <div>
        <img className='w-[400px] rounded-2xl mt-6' src="https://media.istockphoto.com/id/542095594/photo/birthday-party-in-the-office.jpg?s=612x612&w=0&k=20&c=-QK7XL40VVwucnL4nbi4cMqfuFUGfb8ZFpUQbLsx85E=" alt="" />
      </div>
     < div className='mt-9'>
    <p className='mb-5 font-bold text-xl'>Online Friends</p>
    <hr />
    {Users.map((u) => (
      <Online key={u.id} user={u} />
    ))}
    </div>
      </>
    )
  }
 
  const ProfileRightBar = () => {
    return(
      <>
      <h2 className="text-2xl font-bold">User Information</h2>
      <div className="my-3 px-3">

      <div className="font-semibold">
        <span>City: </span>
        <span>Swabi</span>
      </div>

      <div className="font-semibold">
        <span>From : </span>
        <span>Turlandi</span>
      </div>

      <div className="font-semibold">
        <span>Relationship : </span>
        <span>Single</span>
      </div>
      <hr  className="border border-t-1 border-gray-300 mt-4"/>

      </div>

      <h2 className="text-2xl font-bold">User friends</h2>
      <div className="flex flex-wrap mx-2 px-3 gap-3 my-5 cursor-pointer text-center justify-between">

      <div className="">
        <img className="w-[80px]  h-[80px] mx-auto object-cover rounded-xl" src="https://i.pinimg.com/originals/89/28/dd/8928dd082b4a398947a3cb233617f217.jpg" alt="" />
        <p className="">Tamanna khan</p>
      </div>

      <div className="  ">
        <img className="w-[80px]  h-[80px] mx-auto object-cover rounded-xl" src="https://play-lh.googleusercontent.com/A9Z7xVmrQxeffsmGMIqGpUUdVYfUnMGbcro9XsJaQA16TKFanEzmZGGhn0vGEF3BSXE=w240-h480-rw" alt="" />
        <p className="">Shawal khan</p>
      </div>

      <div className=" ">
        <img className="w-[80px] h-[80px] mx-auto object-cover rounded-xl" src="https://live.staticflickr.com/65535/49627454961_08e7e16160_z.jpg" alt="" />
        <p className="">Rohail khan</p>
      </div>

      <div className=" ">
        <img className="w-[80px] mx-auto  h-[80px] object-cover rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI4jZBY_yZE5OkFyzPu9O6sDq3Tjwc_KgNlw&usqp=CAU" alt="" />
        <p className="">Sajal Ali</p>
      </div> 

      <div className="">
        <img className="w-[80px]  h-[80px] mx-auto object-cover rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPwg2N48-aBJkD1bxXrjdu6y06S1gckTnk6g&usqp=CAU" alt="" />
        <p className="">Romaisa khan</p>
      </div>

      <div className="">
        <img className="w-[80px]  h-[80px] mx-auto object-cover rounded-xl" src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp" alt="" />
        <p className="">jalal khan </p>
      </div>
      

      </div>
      </>
    )
  }


  return (
    <div className='rightbar shadow-xl my-8 p-2 rounded-md'>
     
     {Profile ? <ProfileRightBar/> : <HomeRightBar/> }
     
    </div>
  )
}

export default RightBar
