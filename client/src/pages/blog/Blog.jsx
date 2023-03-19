/**
 * This is a React component that renders a blog page with a list of blog cards and pagination. 
 * The component imports the Navbar, Footer, blogData, Stack, Link, BsArrowRight, Chip, and Pagination components from various packages and files.

The BlogCard component renders a card with a blog post image, categories, date, title, and a "Read More" link.

The Blog component renders a title, a description, a container for the list of BlogCards, and a Pagination component. It also renders the Navbar and Footer components.

Tailwind css is used for styling 
 */

import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { blogData } from '../../data'
import { Stack } from '@mui/system'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { Chip, Pagination } from '@mui/material'
import ChatPopup from '../../components/ChatPopup/ChatPopup'
import { AiOutlineDoubleRight } from "react-icons/ai"
import axios from '../../utils/axiosInstance'

const BlogCard = (props) => {
    const id = props._id
    return (
        <div className="container p-5 mx-auto border rounded-xl shadow-xl">
            <div className=" lg:flex lg:items-center">
                <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={props.image} alt="" />

                <div className="lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <h3 className="text-3xl uppercase">{props.title}</h3>


                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        {props.date}
                    </p>

                    <div className="flex flex-wrap gap-1 my-5">
                        {
                            props.categories.map((cat, index) => (
                                <Link to={`/blog?category=${cat}`} key={index} >
                                    <div className="px-3 py-2 border rounded-full">
                                        <p className="text-gray-400">{cat}</p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>

                    <Link to={`./${id}`} className="mt-2 text-secondary-300 hover:text-secondary-500 transition-all flex items-center">
                        Read more
                        <AiOutlineDoubleRight />
                    </Link>

                </div>
            </div>
        </div>
    )
}

const Blog = () => {
    const [data, setData] = useState(null);

    // Data Fetching
    useEffect(() => {
        axios.get('/blog')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []); 


    return (
        <>
            <Navbar />
            <div className="w-full pt-[15vh]">
                <div className="w-full flex flex-col items-center justify-center">
                    <h1 className="text-6xl mt-10 mb-2 font-bold italic text-primary-500">Blogs</h1>
                    <p className="text-lg mb-10">Follow our blog to get all the latest tech news</p>
                    <div className="container flex gap-5 md:gap-10 justify-center p-5 flex-wrap">
                        {
                            data && data.map((item, index) => (
                                <BlogCard key={index} {...item} />
                            ))
                        }
                    </div>
                    <Pagination count={10} variant="outlined" shape="rounded" className='my-10' />
                </div>

                <ChatPopup />
            </div>
            <Footer />
        </>
    )
}

export default Blog