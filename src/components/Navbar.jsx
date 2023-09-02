import React from "react";
import "./Navbar.css";

const Navbar = ({navbar}) => {

    return (
        <div className={`navbar flex justify-center text-gray-800 fixed w-full z-10 bg-white ${navbar && "shadow"}`}>
            <div className={`w-11/12 flex justify-between items-center ${navbar? " h-[calc(3.5rem-2px)]":"border-b-2 border-gray-200 h-[3.5rem]"}`}>
                <div className=" text-3xl font-semibold cursor-pointer"><a href="#">chatify</a></div>
                <ul className="flex gap-4 font-medium">
                    <li className=" cursor-pointer"><a href="#">Home</a></li>
                    <li className=" cursor-pointer"><a href="#work">Work</a></li>
                    <li className=" cursor-pointer"><a href="#insights">Insights</a></li>
                    <li className=" cursor-pointer"><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
