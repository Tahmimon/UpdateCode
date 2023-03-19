/**
 * This is a React component named WhoWeWorkWith that displays a section about the clients that the company works with. 
 * It imports Card component from a local file and whoDoWeWorkData object from ../../data which contains the data to be displayed.

The WhoWeWorkWith component returns a section that contains two div elements, one on the left and one on the right. 
The left div displays the title and description of the section. 
The right div contains multiple instances of the Card component, each of which displays an icon and a name of the client.

To use this component, you can import it in another file and include it in your JSX code. 
You can also customize the data to be displayed by modifying the whoDoWeWorkData object in ../../data file or pass in different props to the Card component.

Tailwind css is used for styling
 */

import React, { useEffect, useState } from 'react'
import { whoDoWeWorkData } from '../../data'
import axios from "../../utils/axiosInstance"



export const Card = (props) => {
    return (
        <div className="bg-white w-1/3 flex flex-col items-center justify-center p-5 rounded-xl hover:scale-110 transition-all">
            <img src={props.icon} alt="" className='w-[50px] h-[50px] mb-3' />
            <h3 className='text-gray-400 text-l font-bold'>{props.title}</h3>
        </div>
    )
}



const WhoWeWorkWith = () => {
    const [data, setData] = useState(null);

    // Data Fetching
    useEffect(() => {
        axios.get('/who_we_work_with')
            .then(response => setData(response.data.data))
            .catch(error => console.error(error));
    }, []);


    return (
        <div className='whoWeWorWith w-full min-h-[60vh] overflow-hidden py-10 md:flex md:flex-col md:justify-center md:items-center bg-primary-500 text-white'>
            <div className="mt-5 w-full md:max-w-[1400px]  flex flex-col lg:flex-row md:flex-row gap-5 items-center">
                <div className="left w-1/1 md:w-1/3 lg:2/3 h-max p-5 text-left">
                    <h3 className="text-4xl font-bold mb-5">{whoDoWeWorkData.title}</h3>
                    <p className="text-justify">
                        {whoDoWeWorkData.desc}
                    </p>
                </div>
                <div className="right w-1/1 md:w-2/3 lg:2/3 h-max md:p-5 lg:p-5 flex gap-5 md:gap-10 lg:gap-10 flex-wrap items-center justify-center">
                    {
                        data && data.map((item, index) => (
                            <Card key={index} {...item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default WhoWeWorkWith