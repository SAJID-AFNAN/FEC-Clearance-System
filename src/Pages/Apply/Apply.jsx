import { NavLink } from "react-router-dom";

const Apply = () => {
    return (
        <div>
            <h1 className="text-center text-xl my-6 bg-teal-300 p-4 rounded-lg text-black">Select the category from which you want clearance </h1>
            <div>
                <div>
                    <NavLink to="/cse"><p className=" text-3xl text-black text-center font-semibold bg-blue-gray-50 py-6 px-4 rounded-lg m-5 hover:bg-blue-gray-700 hover:text-white cursor-pointer">Computer Science and Engineering</p></NavLink>
                    <NavLink to="/eee"><p className=" text-3xl text-black text-center font-semibold bg-blue-gray-50 py-6 px-4 rounded-lg m-5 hover:bg-blue-gray-700 hover:text-white  cursor-pointer">Electrical and Electronics Engineering</p></NavLink>
                    <NavLink to="/civil"><p className=" text-3xl text-black text-center font-semibold bg-blue-gray-50 py-6 px-4 rounded-lg m-5 hover:bg-blue-gray-700 hover:text-white  cursor-pointer">Civil Engineering</p></NavLink>
                    <NavLink to="/ntech"><p className=" text-3xl text-black text-center font-semibold bg-blue-gray-50 py-6 px-4 rounded-lg m-5 hover:bg-blue-gray-700 hover:text-white cursor-pointer">Nontechnical department</p></NavLink>
                    <NavLink to="/academic"><p className=" text-3xl text-black text-center font-semibold bg-blue-gray-50 py-6 px-4 rounded-lg m-5 hover:bg-blue-gray-700 hover:text-white cursor-pointer">Academic</p></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Apply;