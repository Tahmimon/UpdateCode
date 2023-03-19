/**
This is a React component that displays a list of services offered by the company. 
It imports Link component from react-router-dom, and BsArrowRight icon from the react-icons/bs package. 
The data of services is imported from a file named servicesData. 
The Card component displays a single service item, which includes an image, title, list of items, and a "Read More" button. 
The Service component uses the Card component to display a list of services, with each service being rendered as a Card.
Tailwind css is used for styling
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs"
import { servicesData } from "../../data"

export const Card = (props) => {
  return (
    <div className="h-[500px] w-[80%] md:w-[30%] shadow p-5 flex flex-col rounded-xl relative">
      <div className="top flex gap-4 mb-5">
        <div className="left">
          <img className="align-self-center mr-3" src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/web-development.svg" alt="web development" />
        </div>
        <div className="right text-xl font-bold ">
          {props.title}
        </div>
      </div>
      <div className="mid">
        <ul>
          {
            props.list.map((item, index) => (
              <Link to="#" key={index}>
                <li className='flex items-center mt-2'>
                  <img className="mr-3" width="23px" height="23px" src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/services-we-offer/wordpress.svg" alt="wordpress" />
                  {item.text}
                </li>
              </Link>
            ))
          }
        </ul>
      </div>
      <div className="bottom absolute bottom-5">
        <Link to="#">
          <button variant="contained" className='bg-primary-500 px-10 py-3 text-white rounded-sm hover:bg-secondary-500 font-bold mt-2 flex items-center gap-3'>
            Read More <BsArrowRight />
          </button>
        </Link>
      </div>
    </div>
  )
}


const Service = () => {
  return (
    <div className='w-full bg-white overflow-hidden py-10 md:flex md:flex-col md:justify-center'>
      <h1 className="mt-10 text-center text-6xl font-bold text-primary-500">Services We Offer</h1>
      <div className="p-5 mt-5 w-full md:max-w-[1400px] self-center flex gap-5 md:gap-5 lg:gap-10 flex-wrap items-center justify-center">
        {
          servicesData.map((service, index) => (
            <Card key={index} {...service} />
          ))
        }
      </div>
    </div>
  )
}

export default Service