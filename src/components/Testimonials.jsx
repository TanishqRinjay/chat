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
        <div className="flex items-center justify-center w-full bg-gray-900 h-screen">
            <div className=" flex w-11/12">
                <div className="flex justify-between flex-col gap-10 w-full items-center">
                    <p className=" text-4xl font-semibold text-yellow-500">Testimonials</p>
                    <div className="flex gap-8">
                        {images.map((image, i) => (
                            <img
                                src={image}
                                alt=""
                                className="h-[30rem] shadow-[10px_10px_0px_0px_rgb(240,190,30)]"
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
