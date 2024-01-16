import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col space-y-5 shadow-2xl h-full p-2">
                {/* <div className="border-b border-gray-400 p-2">
                    <input type="search" placeholder="search here" className="border-2 border-gray-300 rounded-md p-2 " />
                </div> */}
                <div className="flex flex-col space-y-2 p-2">
                    <button onClick={(e) => navigate("/")} className="hover:text-gray-400 border-gray-400 border-b-2 p-2 rounded-sm">Home</button>
                    <button onClick={(e) => navigate("/dwarka")} className="hover:text-gray-400 border-gray-400 border-b-2 p-2 rounded-sm">Dwarkadhish Temple</button>
                    <button onClick={(e) => navigate("/somnath")} className="hover:text-gray-400 border-gray-400 border-b-2 p-2 rounded-sm">Somnath Temple</button>
                </div>
            </div>
        </>
    );
};

export default Header;