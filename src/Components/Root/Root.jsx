import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Spinner } from "@material-tailwind/react";

const Root = () => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <>
            <div className="flex justify-center h-screen pt-52">
                <Spinner className="h-32 w-32 text-gray-900/50" />
            </div>
        </>
    }
    return (
        <div className="flex p-4">
            <div className="w-2/6 h-screen top-0 sticky">
                {
                    user && <Sidebar></Sidebar>
                }
            </div>
            <div className="w-full ">
                {
                    user ? <Outlet></Outlet> : <Navigate to='/error'></Navigate>
                }
            </div>
        </div>
    );
};

export default Root;