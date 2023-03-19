/**
 * This is the Contact component, which renders the contact page of the website. 
 * It imports various components such as Navbar, Footer, SocialMedia, ContactFormLarge, OurPartnersSlider, RecentWorks, WhoWeWorkWith, Service, and GoogleMap to display different sections of the page. 
 * The ContactFormLarge component is used to display a contact form where users can submit their queries.
 * Tailwind css used for styling
 */

import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import SocialMedia from "../../components/SocialMedia/SocialMedia"
import ContactFormLarge from '../../components/ContactForm/ContactFormLarge'
import { Link } from 'react-router-dom'
import OurPartnersSlider from '../../components/OurPartnersSlider/OurPartnersSlider'
import ContactInfo from '../../components/ContactInfo/ContactInfo'
import RecentWorks from '../../components/RecentWorks/RecentWorks'
import WhoWeWorkWith from '../../components/WhoWeWorkWith/WhoWeWorkWith'
import GoogleMap from '../../components/GoogleMap/GoogleMap'
import ChatPopup from '../../components/ChatPopup/ChatPopup'


const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="w-full pt-[15vh] p-2">

                {/* Contact Form Section */}
                <div className="full flex flex-col items-center justify-center mb-10">
                    <h3 className='mt-10 mb-5 text-5xl text-primary-500 font-bold'>Contact Us</h3>
                    <p className="mb-5 text-center">We would be happy to hear from you, please fill in the form below or mail us your requirements on <br />
                        <Link to="mailto: help@dotpotit.com" className='text-secondary-500'>
                            help@dotpotit.com
                        </Link>
                    </p>
                    <div className="container flex flex-col items-center">
                        <ContactFormLarge />
                    </div>
                </div>

                <OurPartnersSlider />
                <ContactInfo />
                <WhoWeWorkWith />
                <RecentWorks />
                <SocialMedia />
                <GoogleMap />
                <ChatPopup />
            </div>
            <Footer />
        </>
    )
}

export default Contact