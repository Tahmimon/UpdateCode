/**
This component is called SocialMedia and it renders a section with social media icons that link to their respective accounts. 
It imports Link from react-router-dom and socialNetworkData from ../../data.


The socialNetworkData array is mapped over and for each item in the array, a Link component is created with a div child. 
The div contains an image element.
 */

import axios from '../../utils/axiosInstance';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { socialNetworkData } from '../../data'

const SocialMedia = () => {
    const [data, setData] = useState(null);

    // Data Fetching
    useEffect(() => {
        axios.get('/socialmedia')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='w-full overflow-hidden py-10 md:flex md:flex-col md:justify-center bg-white'>
            <div className="p-5 mt-5 w-full md:max-w-[1400px] self-center flex gap-10 justify-between items-center flex-col md:flex-row lg:flex-row">
                <div className="flex-1">
                    <h1 className="text-6xl font-bold mb-5 text-primary-500">Social Media</h1>
                    <p>Don’t Miss To Follow Us On Our Social Networks Accounts.</p>
                </div>
                <div className="flex-1 gap-5 flex flex-wrap justify-center">
                    {
                        data && data.map((item, index) => {
                            return (
                                <Link to={item.url} key={index} target="_blank">
                                    <div key={index} className="md:w-[100px] md:h-[100px] p-2 rounded-full md:rounded-lg shadow flex items-center justify-center hover:border hover: border-purple-500 hover:scale-110 hover:shadow-xl transition-all">
                                        <img src={item.icon} alt="" className="h-[50px] w-[50px]" />
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SocialMedia