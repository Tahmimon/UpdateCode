/** 
This component exports CustomizeYourService component.

The Technologies component displays the technology details, such as title and icon, and has a checkbox. It takes four props: addTechnology, tech, removeTechnology, and technology.

The Addons component displays the add-on details, such as title and icon, and has a checkbox. It takes four props: item, addAddons, removeAddons, and addons.

The CustomizeYourService component is the main component that renders the above two components. It contains state variables like selectedService, technology, addons, price, isOpen.

The component renders two sub-components: Technologies and Addons. The selected technology is displayed on the page, along with the selected add-ons and the total price. When a technology is selected, the add-ons are cleared, and the price is reset to zero. The add-ons' prices are added to the technology price to compute the total price.
*/

import { Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { customizeYourServiceData } from '../../data'
import { RxCross1 } from "react-icons/rx"
import { TiTick } from 'react-icons/ti'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsArrowRight, BsCircle } from 'react-icons/bs'


const Technologies = ({ addTechnology, tech, removeTechnology, technology }) => {
    const [select, setSelect] = useState(false);

    const addItem = (tech) => {
        setSelect(!select)
        addTechnology(tech)
    }
    const removeItem = (tech) => {
        setSelect(!select)
        removeTechnology();
    }

    useEffect(() => {
        if (technology.id == tech.id) {
            setSelect(true)
        } else {
            setSelect(false)
        }
    }, [technology])

    return (
        <div className="p-1 md:p-5 md:h-[120px] md:w-[130px] border rounded flex flex-col items-center justify-center md:gap-3 hover:border-primary-500 hover:scale-110 transition-all shadow relative">
            <img src={tech.icon} alt={tech.title} className="w-[20px] md:w-[50px] " />
            <div className="text-sm text-center">{tech.title}</div>
            {
                !select ? (
                    <BsCircle className="absolute top-[2px] right-[2px] text-gray-400 hover:border hover:animate-pulse rounded-full hover:border-black cusor-pointer"
                        onClick={() => addItem(tech)} />
                ) : (
                    <TiTick className="absolute top-[2px] right-[2px] hover:border hover:animate-pulse rounded-full border border-blacks text-secondary-500 cusor-pointer"
                        onClick={() => removeItem(tech)} />
                )
            }
            <abbr title={tech.sdes}>
                <AiOutlineInfoCircle className="absolute top-[2px] left-[2px] text-gray-400 cursor-pointer hover:text-secondary-500" />
            </abbr>

        </div>
    )
}


const Addons = ({ item, addAddons, removeAddons, addons }) => {
    const [select, setSelect] = useState(false);
    const addItem = (item) => {
        setSelect(!select)
        addAddons(item)
    }
    const removeItem = (item) => {
        setSelect(!select)
        removeAddons(item)
    }

    useEffect(() => {
        if (addons.some((obj) => obj.id === item.id)) {
            setSelect(true)
        } else {
            setSelect(false)
        }
    }, [addons])

    return (
        <div className="p-1 md:p-5 md:h-[120px] md:w-[130px] border rounded flex flex-col items-center justify-center md:gap-3 hover:border-primary-500 hover:scale-110 transition-all shadow relative">
            <img src={item.icon} alt={item.title} className="w-[20px] md:w-[50px]" />
            <div className="text-sm">{item.title}</div>
            {
                !select ? (
                    <BsCircle className="absolute top-[2px] right-[2px] text-gray-400 hover:border hover:animate-pulse rounded-full hover:border-black cusor-pointer" onClick={() => addItem(item)} />
                ) : (
                    <TiTick className="absolute top-[2px] right-[2px] hover:border hover:animate-pulse rounded-full border border-blacks text-secondary-500 cusor-pointer" onClick={() => removeItem(item)} />
                )
            }
            <abbr title={item.sdes}>
                <AiOutlineInfoCircle className="absolute top-[2px] left-[2px] text-gray-400 cursor-pointer hover:text-secondary-500" />
            </abbr>
        </div>
    )

}


const CustomizeYourService = () => {

    const [selectedService, setSelectedService] = useState(null)
    const [price, setPrice] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [addons, setAddons] = useState([])
    const [services, setServices] = useState([])
    const [technology, setTechnology] = useState({
        id: null,
        title: null,
        sdes: null,
        icon: null,
        cost: 0
    })



    const addService = (props) => {
        setSelectedService(props)
        setTechnology({ id: null, cost: 0 })
        setAddons([])
        setIsOpen(false)
        setPrice(0)

        const isExist = services.find((obj) => obj.id === props.id);

        if (isExist == null) {
            setServices([...services, props])  //This sets the selected services array if already dosent exist
        }

    }

    const addTechnology = (props) => {
        setTechnology(props)
        setIsOpen(true)
        setAddons([])
    }

    const removeTechnology = (props) => {
        setTechnology({ id: null, cost: 0 })
        setPrice(0)
        setAddons([])
    }

    const addAddons = (props) => {
        setAddons([...addons, props])
    }

    const removeAddons = (props) => {
        const filteredArray = addons.filter(obj => obj.id !== props.id);
        setAddons(filteredArray)
    }

    useEffect(() => {
        const techCost = technology.cost
        const addonsCost = addons.reduce((acc, item) => acc + item.cost, 0);
        const total = techCost + addonsCost
        setPrice(total)

    }, [technology, addAddons])


    return (
        <div className='w-full h-[100vh] md:h-auto bg-white overflow-hidden py-10 md:flex md:flex-col md:items-center'>
            <div className="container p-0 md:p-5">
                <h1 className="mt-10 text-5xl md:text-6xl font-bold text-primary-500 px-5">Cutomize Your Service</h1>


                {/* Main Section */}
                <div className="maincontent flex md:flex-col lg:flex-row justify-between mt-10 gap-2 md:gap-5 h-full">


                    {/* Left Sidebar */}
                    <div className="left flex-[0.2] border rounded p-1 md:p-5 h-[75vh]">
                        <h3 className="text-lg md:text-3xl font-bold mb-2">Services</h3>
                        <Divider />
                        {
                            customizeYourServiceData.map((item, index) => (
                                <div key={index} className="w-full p-1 md:p-3 border rounded mt-2 md:mt-5 hover:border-primary-500 flex flex-col md:flex-row items-center cursor-pointer gap-1 md:gap-3 shadow hover:scale-110 transition-all" onClick={(e) => addService(item)}>
                                    <img src={item.icon} alt={item.title} className="w-5 h-5 md:h-[50px] md:w-[50px]" />
                                    <p className="text-sm text-center md:text-left md:text-lg md:font-bold hover:text-primary-500">{item.title}</p>
                                </div>
                            ))
                        }
                    </div>


                    {/* Right Side */}
                    <div className="right flex-[0.8] border rounded p-1 md:p-5 overflow-scrool h-[75vh] relative">
                        <button className='absolute bottom-2 right-2 px-3 py-2 bg-secondary-400 hover:bg-secondary-300  text-white cursor-pointer font-bold rounded flex items-center gap-2'>Order Now <BsArrowRight /></button>
                        <div className="flex justify-between">
                            <div>
                                {
                                    technology.id !== null && (
                                        <div className='flex'>
                                            <h1 className="text-sm">Selected services</h1>
                                            <div className="w-full flex items-center gap-3">
                                                {
                                                    <div key={technology} className="flex items-center gap-2 py-1 px-2 border  cursor-pointer hover:border-secondary-500 hover:text-secondary-500 hover:scale-110 transition-all"
                                                        onClick={() => removeTechnology()}>
                                                        <img src={technology.icon} alt={technology.title} className="w-4 h-4 md:w-8 md:h-8" />
                                                        <RxCross1 />
                                                    </div>
                                                }
                                                {
                                                    addons.map((item, index) => (
                                                        <div key={index} className="flex items-center gap-2 py-1 px-2 border rounded-full cursor-pointer hover:border-secondary-500 hover:text-secondary-500 hover:scale-110 transition-all"
                                                            onClick={() => removeAddons(item)}>
                                                            <img src={item.icon} alt={item.title} className="w-4 h-4 md:w-6 md:h-6" />
                                                            <RxCross1 className='text-sm' />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <p className="md:text-xl">Starting From <span className="font-bold text-secondary-500">{price}</span> $</p>
                        </div>
                        {
                            selectedService !== null ? (
                                <>
                                    <h3 className="md:mt-5 mt-2 font-bold text-xl">{selectedService.title}</h3>
                                    <div className="w-full mt-5 flex flex-wrap items-center justify-center gap-1 md:gap-5 mb-5 ">
                                        {
                                            selectedService.technologies.map((tech, index) => (
                                                <Technologies key={index} tech={tech} addTechnology={addTechnology} removeTechnology={removeTechnology} technology={technology} />
                                            ))
                                        }
                                    </div>
                                    <Divider />

                                    {
                                        isOpen && (
                                            <>
                                                <h3 className="text-xl">Addons </h3>
                                                <div className="mt-5 flex flex-wrap items-center justify-center gap-5 mb-5">
                                                    {
                                                        selectedService.addons.map((item, index) => (
                                                            <Addons key={index} addAddons={addAddons} removeAddons={removeAddons} item={item} addons={addons} />
                                                        ))
                                                    }
                                                </div>
                                            </>
                                        )
                                    }
                                </>
                            ) :
                                (
                                    <p className='text-secondary-500'>Please Select a service to proceed farther</p>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomizeYourService
