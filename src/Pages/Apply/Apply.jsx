import { NavLink } from "react-router-dom";

const Apply = () => {
    return (
        <div>
            <h1 className="text-center text-5xl ">Select the category from which you want clearance </h1>
            <div>
                <div>
                    <NavLink to="/cse"><p className=" text-3xl text-white text-center font-semibold bg-blue-gray-600 py-6 px-4 rounded-lg m-5 hover:bg-blue-gray-700 cursor-pointer">Computer Science and Engineering</p></NavLink>
                    <NavLink to="/cse"><p className=" text-3xl text-white text-center font-semibold bg-blue-gray-600 py-6 px-4 rounded-lg m-5 hover:bg-blue-gray-700 cursor-pointer">Electrical and Electronics Engineering</p></NavLink>
                    <NavLink to="/cse"><p className=" text-3xl text-white text-center font-semibold bg-blue-gray-600 py-6 px-4 rounded-lg m-5 hover:bg-blue-gray-700 cursor-pointer">Civil Engineering</p></NavLink>
                    <NavLink to="/cse"><p className=" text-3xl text-white text-center font-semibold bg-blue-gray-600 py-6 px-4 rounded-lg m-5 hover:bg-blue-gray-700 cursor-pointer">Nontechnical department</p></NavLink>
                    <NavLink to="/cse"><p className=" text-3xl text-white text-center font-semibold bg-blue-gray-600 py-6 px-4 rounded-lg m-5 hover:bg-blue-gray-700 cursor-pointer">Academic</p></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Apply;