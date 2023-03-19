/**
This file has two React components: ProcessCard and ProcessWeFollow.

ProcessCard is a reusable component that renders a card with an image, title, and description. It takes in props as a parameter and uses them to render the card content.

ProcessWeFollow is a component that displays the process the company follows, using a combination of text and images. 
It uses processLg and processSm images to display the process in diffrent breakpoints, and also has a commented-out block of code that can be used to render the ProcessCard components with data from processWeFollowData.

Tailwind css is used for styling
 */

import React from 'react'
import { processWeFollowData } from "../../data"
import processLg from "../../assets/img/processLg.png"
import processSm from "../../assets/img/processSm.png"

export const ProcessCard = (props) => {
    return (
        <div className="bg-white rounded-lg flex flex-col items-stretch justify-center p-10 shadow h-[350px] w-[100%] md:w-[40%] lg:w-[22%] md:min-w-[200px]">
            <div className="flex flex-col gap-5 items-center justify-center">
                <img src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/about/app-development-ab.png" alt="app downloads" />
                <p className="text-xl font-bold text-center text-primary-500">{props.title}</p>
                <p className="text-center">{props.desc}</p>
            </div>
        </div>
    )
}

const ProcessWeFollow = () => {
    return (
        <div className='processWeFollow w-full overflow-hidden py-10 md:flex md:flex-col md:justify-center bg-primary-100'>
            <div className="p-5 mt-5 w-full md:max-w-[1400px] self-center flex gap-10 flex-wrap items-center justify-center">
                <h1 className="text-6xl text-primary-500 font-bold w-full mb-5 ">Process We Follow</h1>
                {/* {
                    processWeFollowData.map((item, index) => {
                        return (
                            <ProcessCard key={index} {...item} />
                        )
                    })
                } */}
                <img src={processLg} alt="" className='md:w-3/4 lg:2/3 hidden md:block' />
                <img src={processSm} alt="" className='block md:hidden' />
            </div>
        </div>
    )
}

export default ProcessWeFollow