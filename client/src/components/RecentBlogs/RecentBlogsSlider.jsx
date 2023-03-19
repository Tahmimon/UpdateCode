/**
This is a React component that exports a RecentWorksSlider function. 
The component uses MUI's Chip and Stack components, as well as the react-slick library to create a slider with recent blog posts. 
It also uses icons from react-icons/gr and react-icons/bs.

The component includes two helper functions, SampleNextArrow and SamplePrevArrow, that define the appearance and behavior of the slider's previous and next arrows.

The blogData array contains objects that represent each blog post's data, including the post's img, categories, date, title, and id.

The component includes a SingleSlide function that creates a single slide for the slider based on the data provided through its props. 
Finally, the RecentWorksSlider function maps over the blogData array to create a slider with multiple SingleSlide components.
 */


import { Chip } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { blogData } from "../../data"
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import {GrNext,GrPrevious} from "react-icons/gr"
import axios from "../../utils/axiosInstance";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
        return (
        <GrNext
            className="text-6xl absolute right-0 top-1/2 cursor-pointer text-secondary-500 opacity-30 hover:opacity-100 bg-secondary-500 -translate-y-[100%] border p-2 rounded-full translate-x-[30%] shadow"
            style={{ ...style, display: "block"}}
            onClick={onClick}
        />
        );
    }
    
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
        <GrPrevious
            className="z-10 text-6xl absolute left-0 top-1/2 cursor-pointer text-secondary-500 opacity-30 hover:opacity-100 bg-secondary-500 -translate-y-[100%] border p-2 rounded-full -translate-x-[30%] shadow"
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
        <div className="mx-5 mb-20 rounded-lg">
            <img src={props.image} alt="" className="rounded-tl-xl rounded-tr-xl w-full aspect-video" />
            <div className=" bg-white rounded-bl-xl rounded-br-xl shadow p-5 flex flex-col">
                <Stack direction="row" className="flex flex-wrap gap-1">
                    {
                        props.categories.map((category, index) => (
                            <Chip label={category} key={index} variant="outlined" className="hover:border-primary-500 cursor-pointer" />
                        ))
                    }
                </Stack>
                <p className="mt-2 text-gray-400">{props.date}</p>
                <h3 className="text-xl font-bold text-gray-400 my-2">{props.title}</h3>
                <Link to={`/blog/${props.id}`} className="hover:text-secondary-500 flex items-center gap-2">Read More <BsArrowRight /></Link> 
            </div>
        </div>
    )
}

function RecentBlogsSlider() {

    const [data, setData] = useState(null);

    // Data Fetching
    useEffect(() => {
        axios.get('/blog')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);


    return (
        <div className="w-full my-2">
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

export default RecentBlogsSlider;
