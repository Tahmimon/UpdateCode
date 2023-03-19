/**
 * This is a Home component that imports and renders various components to create home page. 
 * The component imports and renders the following components:

Navbar
Hero
Information
KeyFeatures
ContactCenterServices
CustomizeYourService
ProcessWeFollow
PartnershipModels
IndustriesWeServe
RecentWorks
WhoWeWorkWith
WhatOurClientSay
SocialMedia
OurPartnersSlider
RecentBlogs
GoogleMap
Footer
 */

import React from 'react'
import ChatPopup from '../../components/ChatPopup/ChatPopup'
import ContactCenterServices from '../../components/ContactCenterServices/ContactCenterServices'
import CustomizeService from '../../components/CustomizeService/CustomizeService'
import CustomizeYourService from '../../components/CustomizeYourService/CustomizeYourService'
import Footer from '../../components/Footer/Footer'
import GoogleMap from '../../components/GoogleMap/GoogleMap'
import Hero from '../../components/Hero/Hero'
import IndustriesWeServe from '../../components/IndustriesWeServe/IndustriesWeServe'
import Information from '../../components/Information/Information'
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures'
import Navbar from '../../components/Navbar/Navbar'
import OurPartnersSlider from '../../components/OurPartnersSlider/OurPartnersSlider'
import OurTeam from '../../components/OurTeam/OurTeam'
import PartnershipModels from '../../components/PartnershipModels/PartnershipModels'
import ProcessWeFollow from '../../components/ProcessWeFollow/ProcessWeFollow'
import RecentBlogs from '../../components/RecentBlogs/RecentBlogs'
import RecentWorks from '../../components/RecentWorks/RecentWorks'
import Service from '../../components/Services/Service'
import SocialMedia from '../../components/SocialMedia/SocialMedia'
import WhatOurClientSay from '../../components/WhatOurClientsSay/WhatOurClientsSay'
import WhoWeWorkWith from '../../components/WhoWeWorkWith/WhoWeWorkWith'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Information />
      <KeyFeatures />
      {/* <Service /> */}
      <ContactCenterServices />
      {/* <CustomizeYourService /> */}
      <CustomizeService />
      <ProcessWeFollow />
      <PartnershipModels />
      <IndustriesWeServe />
      <RecentWorks />
      <WhoWeWorkWith />
      <WhatOurClientSay />
      <RecentBlogs />
      <SocialMedia />
      <OurTeam />
      <OurPartnersSlider />
      <GoogleMap />
      <ChatPopup />
      <Footer />
    </>
  )
}

export default Home