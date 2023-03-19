/**
This is a React component that displays a slider of testimonials from clients. 
It uses the react-slick library for the slider functionality, and imports data for each testimonial from a separate data file. 
The component includes two arrow buttons for navigating between slides, styled using React Icons. 
It is responsive, with different settings for different screen sizes. 
The SingleSlide component is a child component that renders each individual testimonial slide within the slider.
 */

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { WhatOurClientSayData } from "../../data"
import { GrNext, GrPrevious } from 'react-icons/gr'
import { ImQuotesRight, ImQuotesLeft } from 'react-icons/im'
import axios from '../../utils/axiosInstance';



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <GrNext
            className="text-6xl absolute right-0 top-1/2 cursor-pointer text-secondary-500 opacity-30 hover:opacity-100 bg-secondary-500 -translate-y-[130%] border p-2 rounded-full translate-x-[70%] shadow"
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <GrPrevious
            className="z-2 text-6xl absolute left-0 top-1/2 cursor-pointer text-secondary-500 opacity-30 hover:opacity-100 bg-secondary-500 -translate-y-[130%] border p-2 rounded-full -translate-x-[70%] shadow"
            style={{ ...style, display: "block", }}
            onClick={onClick}
        />
    );
}

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export const SingleSlide = (props) => {
    return (
        <div className="mx-5 mb-20 p-2 md:p-0 rounded-2xl flex flex-col justify-between items-center bg-white shadow-xl lg:h-[300px]">
            <div className="flex flex-col md:grid md:grid-cols-3 md:gap-10 ">
                <div className=" col-span-1 h-full">
                    <img src={props.client_image} alt="" className="md:rounded-tl-xl md:rounded-bl-xl aspect-square object-cover lg:h-[300px] " />
                </div>

                <div className="col-span-2 p-5 flex flex-col justify-between">

                    <p className=""> <ImQuotesLeft className="text-primary-500  font-bold text-xl inline-block mr-2" /> {props.review_text} <ImQuotesRight className="text-primary-500   text-xl inline-block ml-2" /></p>
                    <div>
                        <h2 className="font-bold text-xl text-secondary-500 mt-3 text-center md:text-left ">{props.client_name}</h2>
                        <h3 className="font-bold text-center md:text-left">{props.position}</h3>
                        <h3 className="font-medium text-center md:text-left">{props.company_name}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

function WhatOurClientsSaySlider() {
    const [data, setData] = useState(null);

    // Data Fetching
    useEffect(() => {
        axios.get('/client_review')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="w-full mb-10">
            <Slider {...settings} className="py-2">
                {
                    data && data.map((item, index) => (
                        <SingleSlide key={index} {...item} />
                    ))
                }
            </Slider>
        </div>
    );
}

export default WhatOurClientsSaySlider;