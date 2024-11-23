import { NavLink } from "react-router-dom";
import photo from "../../assets/Images/Unknown.webp"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import AllVerifiedStudents from "../verification/AllVerifiedStudents";


const Dashboard = () => {

    const [userData, setUserData] = useState({})
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://fec-clearance-server.onrender.com/student/${user?.email}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])

    return (
        <div>
            <div className="flex gap-6 mb-6">
                <div className="w-2/4 mx-auto text-center bg-gray-300 rounded-2xl">
                </div>
                <div className="w-2/4 mx-auto text-center bg-gray-100 rounded-2xl">
                    <div className="flex justify-center items-center min-h-72">
                        <div className="relative flex flex-col items-center bg-transparent text-white">
                            {/* Circular Avatar */}
                            <div className="relative">
                                <img
                                    src={userData?.photo? userData?.photo : {photo}}
                                    alt="Profile"
                                    className="w-28 h-28 rounded-full object-cover border-4 border-blue-500"
                                />
                                {/* Floating Dots */}
                                <div className="absolute top-0 left-0 h-3 w-3 bg-red-500 rounded-full animate-bounce-custom"></div>
                                <div className="absolute bottom-2 left-[-20px] h-3 w-3 bg-blue-500 rounded-full animate-pulse-custom"></div>
                                <div className="absolute top-10 right-[-20px] h-3 w-3 bg-green-500 rounded-full animate-shake-custom"></div>

                            </div>

                            {/* Text */}
                            <div className="mt-4 text-center">
                                {userData?.name ? <h2 className="text-xl font-semibold text-black">{userData?.name}</h2> : <h2 className="text-xl font-semibold text-black">{user?.displayName}</h2>}
                                {userData?.session ? <p className="text-sm text-black ">{userData?.session}</p> : <p className="text-sm text-black ">session: --</p>}
                                <NavLink to="/profile">
                                    <button className="bg-blue-gray-900 h-8 px-4 rounded-md mt-2">Details</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-2xl h-96">
                {/* <p className="text-center text-7xl text-brown-200 p-36">No Notification</p> */}
                {/* <div className="border-b-2 border-blue-gray-200 py-3 px-6  flex justify-between my-4">
                    <p><span className="text-2xl font-semibold font-serif">Samsul Islam</span> <br /> <span className="font-sans text-lg">Assistant professor</span></p>
                    <p className="px-8 py-4 text-lg">Request Pending....</p>
                </div> */}
                <AllVerifiedStudents></AllVerifiedStudents>
            </div>

        </div>
    );
};

export default Dashboard;