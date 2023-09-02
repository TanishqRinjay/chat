import React from "react";
import {AiOutlineArrowRight} from "react-icons/ai"

const About = () => {
    return (
        <div className=" w-full flex justify-center bg-gray-900 text-white" id="insights">
            <div className="w-11/12">
                <div className="h-[3.5rem]"></div>
                <h2 className="text-2xl font-bold">Why Us?</h2>
            <ul className=" font-semibold text-xl p-8 flex gap-8 flex-col">
                <li className="flex items-center"> <AiOutlineArrowRight/> 10X Cheaper</li>
                <li className="flex items-center"> <AiOutlineArrowRight/>Easily Integrate any type of AI model</li>
                <li className="flex items-center"><AiOutlineArrowRight/>
                    No Hassle, will integrate AI directly into your website in
                    less than 2 days
                </li>
            </ul>
            </div>
        </div>
    );
};

export default About;
