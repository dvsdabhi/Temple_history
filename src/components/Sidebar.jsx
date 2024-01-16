import React from "react";
import { useNavigate } from "react-router-dom";
import { LiaWindowClose } from "react-icons/lia";

const Sidebar = ({ sidebar, setSidebar }) => {
    const navigate = useNavigate();

    const onhandleClick = () => {
        setSidebar(!sidebar);
    }
    return (
        <>
            <div className="flex flex-col space-y-5 shadow-2xl h-full p-2 absolute bg-white">
                <div className="border-b border-gray-400 p-2 flex justify-end">
                    <LiaWindowClose onClick={onhandleClick} className="text-2xl" />
                </div>
                <div className="flex flex-col space-y-2 p-2">
                    <button onClick={(e) => navigate("/")} className="hover:text-gray-400 border-gray-400 border-b-2 p-2 rounded-sm">Home</button>
                    <button onClick={(e) => navigate("/dwarka")} className="hover:text-gray-400 border-gray-400 border-b-2 p-2 rounded-sm">Dwarkadhish Temple</button>
                    <button onClick={(e) => navigate("/somnath")} className="hover:text-gray-400 border-gray-400 border-b-2 p-2 rounded-sm">Somnath Temple</button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;