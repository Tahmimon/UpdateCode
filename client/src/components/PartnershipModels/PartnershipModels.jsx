/**
This component is a React functional component that displays a section on partnership models. 
It imports data from a data file and exports two components - PartnershipModels and Card.

Card is a sub-component that takes in props and renders a card displaying an image, title, and description.

PartnershipModels is the main component that renders the section, which includes a heading, introductory paragraph, and multiple instances of the Card component. 
It maps through the imported data to create each card. 
The component is responsive for mobile and desktop displays.
The component uses Tailwind css for styling
 */

import React, { useEffect, useState } from 'react'
import { PartnershipModelsData } from "../../data"
import axios from "../../utils/axiosInstance"


export const Card = (props) => {
    return (
        <div className="mx-5 p-5 rounded-lg shadow-lg flex-1 hover:scale-110 transition-all md:min-h-[450px]">
            <div className="text-6xl">
                <img className="img-fluid" src={props.icon} alt={props.title} />
            </div>
            <h2 className="text-2xl font-bold my-5">
                {props.title}
            </h2>
            <p className="text-justify">
                {props.description}
            </p>
        </div>
    )
}

const PartnershipModels = () => {
    const [data, setData] = useState(null);

    // Data Fetching
    useEffect(() => {
        axios.get('/partnership_model')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='w-full overflow-hidden pt-10 pb-20 md:flex md:flex-col md:justify-center bg-white'>
            <div className="p-5 mt-5 w-full md:max-w-[1400px] self-center">
                <h1 className="mt-10 text-6xl font-bold w-full text-primary-500 mb-5 ">Partnership Models</h1>
                <p className="text-gray-400 text-justify">At DotpotiT, we have a variety of partnership models that are designed to foster long-term relationships with our clients. Our team of experienced professionals work closely with our clients to understand their specific requirements and goals, and then develop customized solutions that deliver results. With our deep expertise in mobile app development, we help our clients stay ahead of the competition and achieve their business objectives. To learn more about how we can help you achieve your goals, contact us today.</p>
            </div>
            <div className="p-5 mt-5 w-full md:max-w-[1400px] self-center flex flex-col lg:flex-row gap-5 flex-wrap items-center justify-center">
                {
                    data && data.map((item, index) => {
                        return (
                            <Card key={index} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PartnershipModels