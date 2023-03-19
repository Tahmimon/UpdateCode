/**
    KeyFeatures Component
    This component displays a section containing the key features of the company.
    It renders the @KeyFeaturesSlider component
    returns JSX.Element
 */

import React from 'react'
import KeyFeatureSlider from './KeyFeatureSlider'

const KeyFeatures = () => {
    return (
        <div className='md:p-5 bg-primary-400 w-full flex flex-col items-center text-white KeyFeartures'>
            <div className="w-full mt-10 md:max-w[1400px] lg:max-w-[1400px] p-10 md:px-5 lg:px-0">
                <h1 className="text-6xl font-extrabold mb-5 block">Our Key Features</h1>
                <p className="text-lg">Services That We Deliver Makes Us Dignified as One of the <br /> Top App Development Companies.</p>
            </div>
            <div className="w-full">
                <KeyFeatureSlider />
            </div>
        </div>
    )
}

export default KeyFeatures