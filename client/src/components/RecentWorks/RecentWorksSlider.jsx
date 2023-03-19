/**
This component is a React slider that displays recent works data in the form of slides. 
It uses the following dependencies: @mui/material, @mui/system, and react-slick.

The slider includes two arrow components for navigating to the next and previous slide. 
These components are defined using react-icons/gr and named SampleNextArrow and SamplePrevArrow, respectively. 
The arrow components are passed to the slider component using the nextArrow and prevArrow properties of the settings object.

The settings object defines the behavior of the slider, including the number of slides to show at once, the speed of the slide transitions, and the breakpoints for different screen sizes. 
The recentWorksData array is mapped to generate the individual slides. 
Each slide displays an image, title, and a stack of Chip components representing the technologies used in the project.

Finally, the RecentWorksSlider component wraps the slider component and the individual slides to render the complete slider.
 */


import { Chip } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { recentWorksData } from "../../data"
import { GrNext, GrPrevious } from 'react-icons/gr'
import axios from "../../utils/axiosInstance"



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <GrNext
            className="text-6xl absolute right-0 top-1/2 cursor-pointer text-secondary-500 opacity-30 hover:opacity-100 bg-secondary-500 -translate-y-[100%] border p-2 rounded-full translate-x-[70%] shadow"
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <GrPrevious
            className="z-2 text-6xl absolute left-0 top-1/2 cursor-pointer text-secondary-500 opacity-30 hover:opacity-100 bg-secondary-500 -translate-y-[100%] border p-2 rounded-full -translate-x-[70%] shadow"
            style={{ ...style, display: "block", }}
            onClick={onClick}
        />
    );
}

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
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
        <div className="mx-5 mb-20 rounded-lg relative">
            <img src={props.image} alt="" className=" rounded-xl aspect-[1.4] object-cover" />
            <div className="absolute b-0 left-1/2 transform -translate-x-1/2 translate-y-[-50%] bg-white w-[80%] rounded-xl shadow p-5 flex flex-col items-center">
                <h3 className="text-xl font-bold text-gray-400 mb-2">{props.title}</h3>
                <Stack direction="row" spacing={1} className="flex flex-wrap">
                    {
                        props.technologies && props.technologies.map((tech, index) => (
                            <Chip label={tech} key={index} variant="outlined" className="mb-1" />
                        ))
                    }
                </Stack>
            </div>
        </div>
    )
}

function RecentWorksSlider() {
    const [data, setData] = useState(null);

    // Data Fetching
    useEffect(() => {
        axios.get('/work')
            .then(response => setData(response.data.works))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="w-full my-10">
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

export default RecentWorksSlider;
