/**
The Information component is a functional component that renders a section containing information about a company and an embedded YouTube video. 
The component has the following features:

The section is styled with tailwind css

The section has two columns on large screens and one column on smaller screens.
The left column contains a heading, a subheading, and a paragraph describing the company's services.
The right column contains an embedded YouTube video with a custom URL.
The video is responsive and maintains its aspect ratio on different screen sizes.
 */

import React, { useEffect, useState } from 'react'
import axios from '../../utils/axiosInstance'
import Card from './Card'

const Information = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('/info')
            .then(response => setData(response.data[0]))
            .catch(error => console.error(error));
    }, []);


    // const videoUrl = 'https://www.youtube.com/embed/A23jUjVatn4?autoplay=1&loop=1';
    return (
        <div className='md:p-5 bg-white w-full flex justify-center items-center'>
            <div className="w-full md:max-w[1400px] lg:max-w-[1400px] p-10 md:px-5 lg:px-0 flex flex-col items-center justify-between md:flex-col lg:flex-row gap-5">
                <div className="left flex-[2] h-full">
                    <h1 className="text-6xl text-primary-500 font-bold mb-5 ">{data && data.name}</h1>
                    <p className="mb-5 text-2xl text-gray-300 font-bold">{data && data.slogan}</p>
                    <p className="text-justify text-xl text-gray-300">
                        {data && data.about}
                    </p>
                </div>
                <div className="right flex-[3] w-full flex items-center justify-center lg:justify-end md:p-10  ">

                    <iframe
                        src={data && data.video_link}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className='rounded-3xl w-full md:w-4/5 aspect-video mt-5 shadow-lg'
                    ></iframe>
                    {/* <img src={data && data.image_link} alt="" className="rounded-3xl w-full md:w-4/5 aspect-video mt-5 shadow-lg" /> */}

                </div>
            </div>
        </div>
    )
}

export default Information