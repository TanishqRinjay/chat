import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {
    Keyboard,
    Scrollbar,
    Autoplay,
    Pagination,
    Navigation,
    FreeMode,
} from "swiper/modules";
import test1 from "../images/test1.jpeg";
import test2 from "../images/test2.jpeg";
import test3 from "../images/test3.jpeg";

const Testimonials = () => {
    const images = [test1, test2, test3];
    return (
        <div className="flex items-center justify-center w-full lg:py-0 py-10 bg-gray-900 min-h-screen" id="work">
            <div className=" flex w-11/12">
                <div className="flex justify-between flex-col gap-10 w-full items-center">
                    <p className=" lg:text-4xl text-2xl font-semibold text-yellow-500">Testimonials</p>
                    <div className="flex flex-col lg:flex-row gap-8">
                        {images.map((image, i) => (
                            <img
                                src={image}
                                alt=""
                                className="lg:w-[30%] md:h-[20rem] lg:shadow-[10px_10px_0px_0px_rgb(240,190,30)] md:shadow-[5px_5px_0px_0px_rgb(240,190,30)]"
                                key={i}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
