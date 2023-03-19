/**
This is a React component that displays "Industries We Serve" section.

It imports IndustriesWeServeData from a file named data.js 
The component also imports another custom component called ProcessCard that receives props such as logo and title to display information about an industry in a card format.

The IndustriesWeServe component renders a div that contains a heading and a list of ProcessCard components. 
The list is generated using the map function that iterates over the IndustriesWeServeData array, passing each item as props to the ProcessCard component.

The component is styled using tailwind CSS classes, with responsive design for different screen sizes.
 */

import { IndustriesWeServeData } from "../../data"
import React, { useEffect, useState } from "react";
import axios from "../../utils/axiosInstance"

export const ProcessCard = (props) => {

    return (
        <div className="bg-white rounded-lg flex flex-col items-stretch justify-center p-10 shadow h-[200px] w-[100%] md:w-[18%] md:min-w-[200px] hover:scale-110 transition-all">
            <div className="flex flex-col gap-5 items-center justify-center">
                <img src={props.icon} alt={props.title} className="w-[80px] h-[80px]" />
                <p className="text-xl font-bold text-center text-gray-400">{props.title}</p>
            </div>
        </div>
    )
}

const IndustriesWeServe = () => {
    const [data, setData] = useState(null);

    // Data Fetching
    useEffect(() => {
        axios.get('/industry_we_erve')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);


    return (
        <div className='industriesWeServe w-full overflow-hidden py-10 md:flex md:flex-col md:justify-center bg-primary-100'>
            <div className="p-5 mt-5 w-full md:max-w-[1400px] self-center flex gap-5 flex-wrap items-center justify-center">
                <h1 className="mt-10 text-6xl text-primary-500 font-bold w-full mb-5 ">Industries We Serve</h1>
                {
                    data && data.map((item, index) => {
                        return (
                            <ProcessCard key={index} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default IndustriesWeServe