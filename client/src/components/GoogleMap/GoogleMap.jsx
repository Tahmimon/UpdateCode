/**
The GoogleMap component is a functional component that renders a Google Map embedded in an iFrame. 
It takes no props and displays a heading above the map. 
The map is centered on the location of the company Dotpot iT, with a marker and information about the company's address. 
The component uses tailwind CSS for styling.
 */

import React from 'react'

const GoogleMap = () => {
    return (
        <div className='w-full py-10 -mb-20 bg-white'>
            <h1 className="text-6xl font-bold text-center text-primary-500 mb-10 mt-10">
                Visit Our Office
            </h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.247472043089!2d90.3658077145906!3d23.80979748456011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c154f4caa0ad%3A0x31fecdb3c5351d8d!2sDotpot%20iT!5e0!3m2!1sen!2sbd!4v1675153448200!5m2!1sen!2sbd"
                frameBorder="0"
                style={{ border: "0", width: "100%", height: "400px" }} >

            </iframe>
        </div>
    )
}

export default GoogleMap