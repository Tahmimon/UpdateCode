/**
This is a React component that renders a full-page hero slider. 
It uses the react-slick library for the slider functionality and custom arrow components for navigation. 
The slider data is imported from an external data file and mapped to the SingleSlide component, which renders a single slide with an image, title, subtitle, description, and a button that links to a specified URL. 
The HeroSlide component maps all the slide data to SingleSlide and renders them within the Slider component with the custom arrow components. 
The HeroSlide component is then used within the Hero component to display the hero slider with a particle animation in the background. 
The Hero component is intended to be used as the hero section of a landing page or a website homepage.
 */

import React from "react";
import Slider from "react-slick";
import { GrNext, GrPrevious } from 'react-icons/gr'
import { BsArrowRight } from 'react-icons/bs'
import { sliderData } from '../../data'
import { Link } from "react-router-dom";



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrNext
      className="text-6xl absolute right-0 top-1/2 cursor-pointer text-secondary-500 opacity-30 bg-secondary-500 hover:opacity-100 hover:bg-secondary-500 -translate-y-[100%] border p-2 rounded-full translate-x-[20%] shadow"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrPrevious
      className="z-2 text-6xl absolute left-0 top-1/2 cursor-pointer text-secondary-500 opacity-30 bg-secondary-500 hover:opacity-100 hover:bg-secondary-500 -translate-y-[100%] border p-2 rounded-full -translate-x-[20%] shadow"
      style={{ ...style, display: "block", }}
      onClick={onClick}
    />
  );
}

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export const SingleSlide = (props) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="md:max-w-[1200px] lg:container container flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="left flex-1 h-full flex flex-col justify-center">
          <h1 className="text-6xl text-primary-500 font-bold mb-2">
            {props.title}
          </h1>
          <p className='mb-5 text-gray-300 text-3xl font-bold'>{props.subtitle}</p>
          <div className="flex gap-5 items-center mb-5">
            {/* <div className="pr-5 border-r border-gray-300">
                  <h1 className="text-4xl text-secondary-500 font-bold">
                    #1
                  </h1>
                </div> */}
            <p className="md:w-2/3 w-4/5 text-xl">
              {props.description}
            </p>
          </div>
          <Link to={props.button_link}>
            <button className='bg-secondary-400 hover:bg-secondary-300 px-10 py-3 text-white rounded-sm hover:scale-110 transition-all font-bold mt-2 flex items-center gap-3'>
              {props.button_text} <BsArrowRight />
            </button>
          </Link>
        </div>
        <div className="right flex-1 flex items-end justify-center ">
          <img src={props.image} alt={props.title} className="max-h-[50vh]" />
        </div>
      </div>
    </div>
  )
}

function HeroSlide({ heroData }) {
  return (
    <div className="w-full p-3">
      <Slider {...settings} className="py-2">
        {/* {
          sliderData.map((item, index) => (
            <SingleSlide key={index} {...item} />
          ))
        } */}
        {
          heroData && heroData.map((item, index) => (
            <SingleSlide key={index} {...item} />
          ))
        }
      </Slider>
    </div>
  );
}

export default HeroSlide;
