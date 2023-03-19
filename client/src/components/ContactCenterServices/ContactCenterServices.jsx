/**
The ContactCenterServices component is a functional React component that renders a section of a web page with information about contact center services. It imports React and Link from react-router-dom, as well as a ContactCenterServicesSlide component from a local file for the slider.

**/


import React from 'react'
import { Link } from 'react-router-dom'
import ContactCenterServicesSlide from './ContactCenterServicesSlide'



const ContactCenterServices = () => {
    return (
        <div className='w-full overflow-hidden py-10 md:flex md:flex-col md:justify-center bg-primary-100'>
            <div className="p-5 mt-5 w-full md:max-w-[1400px] self-center flex gap-10 flex-wrap items-center justify-center">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-2 md:mb-2 block text-primary-500">Contact Center Services</h1>
                <ContactCenterServicesSlide />
            </div>
        </div>
    )
}

export default ContactCenterServices