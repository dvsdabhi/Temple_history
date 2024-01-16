import React from "react";
import { useNavigate } from "react-router-dom";
import dwarkaImg from "../Asset/Dwarka/Dwarkadhish.jpg";
import somnathImg from "../Asset/Somnath/somnath.jpg";

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="grid grid-cols-3 overflow-auto h-screen gap-3 p-2 xsm:grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                <div onClick={() => navigate("/dwarka")} className="cursor-pointer">
                    <img src={dwarkaImg} alt="" className="h-[250px]" />
                    <p className="text-center p-2 font-bold border-2">Dwarka Temple</p>
                </div>
                <div onClick={() => navigate("/somnath")} className="cursor-pointer">
                    <img src={somnathImg} alt="" className="h-[250px]" />
                    <p className="text-center p-2 font-bold border-2">Somnath Temple</p>
                </div>
            </div>
        </>
    );
};

export default Home;