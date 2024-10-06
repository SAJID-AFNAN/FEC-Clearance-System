import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Spinner } from "@material-tailwind/react";

const Root = () => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <Spinner className="h-16 w-16 text-gray-900/50" />;
    }
    return (
        <div className="flex p-4">
            <div className="w-2/6">
                {
                    user && <Sidebar></Sidebar>
                }
            </div>
            <div className="w-full">
                {
                    user ? <Outlet></Outlet> : <Navigate to='/error'></Navigate>
                }
            </div>
        </div>
    );
};

export default Root;