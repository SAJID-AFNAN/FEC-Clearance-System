import { NavLink } from "react-router-dom";
import photo from "../../assets/Images/WhatsApp Image 2024-11-17 at 7.49.37 PM.jpeg"
const Dashboard = () => {
    return (
        <div>
            <div className="flex gap-6 mb-6">
                <div className="w-2/4 mx-auto text-center bg-gray-300 rounded-2xl">something
                </div>
                <div className="w-2/4 mx-auto text-center bg-gray-300 rounded-2xl">
                    <div className="flex justify-center items-center min-h-72">
                        <div className="relative flex flex-col items-center bg-transparent text-white">
                            {/* Circular Avatar */}
                            <div className="relative">
                                <img
                                    src={photo}
                                    alt="Profile"
                                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
                                />
                                {/* Floating Dots */}
                                <div className="absolute top-0 left-0 h-3 w-3 bg-red-500 rounded-full animate-bounce-custom"></div>
                                <div className="absolute bottom-2 left-[-20px] h-3 w-3 bg-blue-500 rounded-full animate-pulse-custom"></div>
                                <div className="absolute top-10 right-[-20px] h-3 w-3 bg-green-500 rounded-full animate-shake-custom"></div>

                            </div>

                            {/* Text */}
                            <div className="mt-4 text-center">
                                <h2 className="text-xl font-semibold text-black">Sajid Afnan</h2>
                                <p className="text-sm text-black ">2020-21</p>
                                <NavLink to="/profile">
                                    <button className="bg-blue-gray-900 h-8 px-4 rounded-md mt-2">Details</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-300 rounded-2xl h-96">
                <p className="text-center text-7xl text-brown-200 p-36">No Notification</p>
            </div>

        </div>
    );
};

export default Dashboard;