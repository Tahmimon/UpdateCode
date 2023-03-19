/**
 * This is a React functional component called SingleBlog that renders a single blog post. 
 * It imports React, Link, useParams, Footer, Navbar, RecentBlogs, blogData, and parse.

It uses useParams to get the id of the blog post to be displayed. 
It then gets the data of the blog post using blogData[id] and renders it with img, title, date, categories, and desc.

The desc property of the blog object is parsed using parse to render any HTML tags that might be included in the blog post content.

This component also renders Navbar, RecentBlogs, and Footer.
 */

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import RecentBlogs from '../../components/RecentBlogs/RecentBlogs'
import { blogData } from '../../data'
import parse from 'react-html-parser';
import ChatPopup from '../../components/ChatPopup/ChatPopup'
import axios from '../../utils/axiosInstance'

const SingleBlog = () => {

    const { id } = useParams();
    const [data, setData] = useState(null);

    // Data Fetching
    useEffect(() => {
        axios.get(`/blog/${id}`)
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []); 


    return (
        <>
            <Navbar />
            <div className="w-full md:p-[15vh] pt-[15vh]">
                {
                    data && (
                        <div className='full flex items-center justify-center'>
                            <div className="container flex flex-col items-center p-10 text-justify">
                                <img src={data.image} alt="" />
                                <div className="md:w-3/5">
                                    <h1 className="my-5 text-3xl font-bold text-left">{data.title}</h1>
                                    <p className="text-gray-400">{data.date}</p>
                                    {
                                        data.categories.map((item, index) => (
                                            <Link key={index} to={`/blog?catergory=${item}`} >
                                                <p className="inline text-gray-400 hover:text-secondary-500 transition-all">{item}, </p>
                                            </Link>
                                        ))
                                    }
                                    {
                                        parse(data.desc)
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }

                <RecentBlogs />
                <ChatPopup />
            </div>
            <Footer />
        </>
    )
}

export default SingleBlog