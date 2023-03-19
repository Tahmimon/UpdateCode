/**
 * This is the services page
 * Components are imported to construct the whole page
 */

import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Service from '../../components/Services/Service'
import RecentWorks from '../../components/RecentWorks/RecentWorks'
import WhoWeWorkWith from '../../components/WhoWeWorkWith/WhoWeWorkWith'
import ContactCenterServices from '../../components/ContactCenterServices/ContactCenterServices'
import PartnershipModels from '../../components/PartnershipModels/PartnershipModels'
import RecentBlogs from '../../components/RecentBlogs/RecentBlogs'
import SocialMedia from '../../components/SocialMedia/SocialMedia'
import ChatPopup from '../../components/ChatPopup/ChatPopup'
import CustomizeService from '../../components/CustomizeService/CustomizeService'


const Services = () => {
    return (
        <div className="full">
            <Navbar />
            <div className="w-full pt-[15vh]">
                <CustomizeService />
                {/* <Service /> */}
                <ContactCenterServices />
                <PartnershipModels />
                <RecentWorks />
                <WhoWeWorkWith />
                <RecentBlogs />
                <SocialMedia />
                <ChatPopup />
            </div>
            <Footer />
        </div>
    )
}

export default Services