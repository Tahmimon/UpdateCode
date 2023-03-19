/**
This component renders a hero section with a full-height background of particle animation. 
It imports two child components: HeroSlide and Particle. 
The HeroSlide component is responsible for rendering the content slider of the hero section, while the Particle component creates the particle animation effect in the background. 
The Hero component has no props and can be used as a standalone component or as a part of a larger layout.
 */

import axios from '../../utils/axiosInstance';
import React, { useEffect, useState } from 'react'
import HeroSlide from './HeroSlide'
import Particle from './Particle'

const Hero = () => {
    const [heroData, setHeroData] = useState(null);

    useEffect(() => {
        async function fetchHeroData() {
            try {
                const response = await axios.get('/hero');
                setHeroData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchHeroData();
    }, []);

    // console.log("Hero section Data", heroData)

    return (
        <div className='w-full h-[100vh] pt-[10vh] md:h-[calc(100vh-100px)] lg:h-[calc(100vh-100px)] overflow-hidden'>
            <Particle />
            <div className="h-full w-full flex justify-center items-center">
                <HeroSlide heroData={heroData} />
            </div>
        </div>
    )
}

export default Hero