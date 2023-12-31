import React from "react";
import "./Navbar.css";

const Contact = () => {
    return (
        <div className="w-full flex justify-center min-h-screen" id="contact">
            <div className="w-11/12 flex flex-col items-center justify-center">
                <div className="w-full p-6">
                    <div className="w-[50%] flex justify-end"></div>
                    <div className="w-[50%]"></div>
                </div>
                <form
                    action="https://docs.google.com/forms/d/e/1FAIpQLScuahN5Qwq9TS6Uj1mgpc2aAxd488Hoj6MKpMBr9o_tMnwavA/formResponse"
                    className="flex flex-col w-[80%] gap-4 p-4 text-black items-center"
                >
                    <h2 className=" text-4xl font-semibold navbar md:px-10 px-4 mb-8">
                        Love to hear from you, <br />
                        Get in touch👋
                    </h2>
                    <div className="flex md:flex-row flex-col justify-between sm:items-start min-w-[250px] md:px-10 md:py-0 py-4 lg:gap-4">
                        <div className="flex flex-col">
                            <label className="font-medium" htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                name="entry.1692114509"
                                id="name"
                                placeholder="Enter your name"
                                className="px-4 py-2 rounded-sm bg-gray-50 sm:w-[300px] w-[200px]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                name="entry.157337104"
                                id="email"
                                placeholder="Enter your E-mail id"
                                className="px-4 py-2 rounded-sm bg-gray-50 w-[200px] sm:w-[300px]"
                            />
                        </div>
                    </div>
                    {/* <div className="flex md:flex-row flex-col justify-between px-10 md:py-0 py-4">
                        <div className="flex flex-col">
                            <label className="font-medium" htmlFor="budget">Enter Budget</label>
                            <input
                                type="number"
                                id="budget"
                                name="entry.1143348460"
                                placeholder="Enter your budget"
                                className="px-4 py-2 rounded-sm bg-gray-50 w-[300px]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" htmlFor="interest">Select Interest</label>
                            <select
                                name="entry.202853023"
                                id="interest"
                                defaultValue="disable"
                                className=" text-black px-4 py-2 rounded-sm w-[300px] bg-gray-50"
                            >
                                <option value="disable" disabled>
                                    Select your Interest
                                </option>
                                <option value="Design">Design</option>
                                <option value="UI/UX">UI/UX</option>
                                <option value="Coding">Coding</option>
                            </select>
                        </div>
                    </div> */}
                    <div className="flex max-w-[800px] md:w-[700px] flex-col min-w-[200px] md:px-10">
                        <label className="font-medium" htmlFor="message">Feedback</label>
                        <textarea
                            name="entry.1574852582"
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Enter feedback"
                            className="px-4 py-2 rounded-sm bg-gray-50 w-full"
                        ></textarea>
                    </div>
                    <button className=" bg-blue-600 px-4 w-[200px] py-2 font-medium text-white flex justify-center self-center">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
