import { NavLink } from "react-router-dom";
import photo from "../../assets/Images/WhatsApp Image 2024-11-17 at 7.49.37 PM.jpeg"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Profile = () => {
  const [userData,setUserData] = useState({})
  const {user} = useContext(AuthContext)

  useEffect(()=>{
    fetch(`http://localhost:3000/student/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setUserData(data))
  },[])

  const noData = <span className="text-gray-600">None</span>

  return (
    <div>
      <div className=" bg-blue-gray-50 shadow-md rounded-lg p-6 mx-auto">
        <div className="text-center mb-4">
          <img src={photo || "https://via.placeholder.com/100"} alt="Student Avatar" className="rounded-full mx-auto w-32 h-32" />
        </div>
        <div className="profile-details space-y-6">
          <div className="flex justify-between">
            <span className="font-medium text-gray-700 ">Name:</span>
            <span className="text-gray-600">{user?.displayName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Registration No:</span>
            {userData?.reg?<span className="text-gray-600">{userData?.reg}</span>:noData}
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Father&apos;s Name:</span>
            {userData?.fatherName?<span className="text-gray-600">{userData?.fatherName}</span>:noData}
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Mother&apos;s Name:</span>
            {userData?.motherName?<span className="text-gray-600">{userData?.motherName}</span>:noData}
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Phone:</span>
            {userData?.phone?<span className="text-gray-600">{userData?.phone}</span>:noData}
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Email:</span>
            <span className="text-gray-600">{user?.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Department:</span>
            {userData?.dept?<span className="text-gray-600">{userData?.dept}</span>:noData}
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Batch:</span>
            {userData?.batch?<span className="text-gray-600">{userData?.batch}</span>:noData}
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Session:</span>
            {userData?.session?<span className="text-gray-600">{userData?.session}</span>:noData}
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <NavLink to="/update-profile">
          {/* <button className="btn px-12 text-lg bg-black text-white hover:text-black">Update</button> */}
          <button className="btn text-gray-50 bg-blue-gray-700 px-12 hover:bg-[#194f54]">UPDATE</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Profile;