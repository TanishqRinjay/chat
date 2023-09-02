import React from "react";
import messenger from "../images/svgs/messenger.svg";
import Icon from "../images/messageApp.png";
import chatBot from "../images/chatBot.png";
import { BsArrowUpRight } from "react-icons/bs";

const HeroSection = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-50">
            <div className=" h-[3.5rem]"></div>
            <div className="flex md:flex-row flex-col items-center md:justify-center w-11/12 relative min-h-[calc(100vh)]">
                <div className="md:w-[50%] w-full flex items-center justify-between px-16 py-10 md:py-0 ">
                    <div className=" flex flex-col gap-20">
                        <div className="flex items-center">
                            <div className=" flex justify-center items-center bg-white rounded-full max-w-max p-2 shadow">
                                <img src={Icon} alt="" className=" w-16" />
                            </div>
                            <div className="border-b-4 border-dotted w-10 h-1 border-black"></div>
                            <p className="appName text-4xl font-bold">
                                Chatify
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="h-[1.5px] w-20 bg-black"></div>
                            <div className="text-xl font-medium">
                                <p className=" text-[#2f2e41]">
                                    Integrate AI into your Website
                                </p>
                                <p className="text-black">
                                    with{" "}
                                    <span className=" text-2xl text-blue-600 font-semibold drop-shadow-[1px_1px_0_rgba(99,136,255,1)]">
                                        Ease
                                    </span>
                                </p>
                            </div>
                        </div>
                        <a className=" group text-white bg-gray-900 py-1 rounded-xl flex md:gap-1 items-center duration-200 justify-between lg:w-[250px] w-[150px] tracking-wider lg:pl-[30%] pl-2 pr-4" href="https://calendar.google.com/calendar/u/0/r/eventedit?vcon=meet&dates=now&hl=en-GB&pli=1" target="_blank">
                            Book a Call
                            <BsArrowUpRight className="group-hover:rotate-45 duration-300 font-semibold justify-self-end text-white " />
                        </a>
                    </div>
                    <img src={chatBot} alt="" className=" md:w-36 w-20 hidden sm:block m-8" />
                </div>
                <div className="md:w-[50%] w-full bg-gray-100 flex items-center justify-between py-20 flex-col gap-2">
                    <img src={messenger} className="w-full h-[60%]" />
                    <p className="text-xl font-medium text-blue-800 self-start ml-16 mt-10 border-y border-gray-500">
                        Let AI <br /> do the work <br /> for you!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
