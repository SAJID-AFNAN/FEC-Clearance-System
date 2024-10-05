import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Root = () => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-spinner text-accent"></span>
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