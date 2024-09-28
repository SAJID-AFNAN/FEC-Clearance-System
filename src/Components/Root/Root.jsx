import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Root = () => {
    return (
        <div className="flex">
            <div className="w-2/6">
                <Sidebar></Sidebar>
            </div>
            <div className="w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;