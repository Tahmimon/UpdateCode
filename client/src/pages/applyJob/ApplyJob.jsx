import { Chip, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { jobPageData } from '../../data'
import { SlOptionsVertical } from "react-icons/sl"
import { AiFillStar } from "react-icons/ai"
import { TfiLocationPin } from "react-icons/tfi"
import { BsArrowRight } from "react-icons/bs"
import { Link } from 'react-router-dom'
import NavbarJob from '../../components/NavbarJob/NavbarJob'
import JobSearchbar from '../../components/JobSearchbar/JobSearchbar'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import axios from '../../utils/axiosInstance'

export const JobCard = (props) => {
    const [love, setLove] = useState(false)
    const handelChick = (_id) =>{
        props.setId(props._id)
        props.setActiveJob(props)
    }
    return (
        <>
            {/* For Large screen */}
            <div className="job-card w-full p-5 border rounded-xl hover:border-primary-500 text-gray-400 gap-1 hidden md:block md:hover:scale-105 md:hover:shadow-xl transition-all" onClick={() => handelChick(props._id)}>
                <div className="flex justify-between items-center">
                    <h3 className="font-bold hover:underline cursor-pointer text-xl">{props.title}</h3>

                    <div className="ritht flex items-center justify-center">
                        {
                            love ?
                                <AiFillHeart className="text-secondary-500 text-2xl" onClick={() => setLove(!love)} />
                                :
                                <AiOutlineHeart className="text-secondary-500 text-2xl" onClick={() => setLove(!love)} />
                        }
                        <div className="cursor-pointer p-5 rounded-full hover:bg-primary-100">
                            <SlOptionsVertical />
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <p className="mr-3">
                        {props.company}
                    </p>
                    {/* <p>{props.rating}</p>
                    <AiFillStar /> */}
                </div>
                <div className="flex items-center gap-2">
                    <TfiLocationPin />
                    <p>{props.location}</p>
                </div>
                {
                    props.isRemote ? (
                        <p>Remote</p>
                    ):
                    (
                        <p>On Site</p>
                    )
                }
                <h3 className='p-1 bg-gray-200 w-max my-1 rounded'>Salary : {props.salary.min}TK - {props.salary.max}TK</h3>
                <div className="flex flex-wrap gap-1">
                    {
                        props.benefits.map((item, index) => (
                            <Chip label={item} key={index} variant="outlined" />
                        ))
                    }
                </div>
            </div>

            {/* For Small Device */}
            <Link to={`/applym/${props._id}`}>
                <div className="job-card w-full p-5 border rounded-xl hover:border-primary-500 text-gray-400 gap-1  md:hidden" onClick={() => props.setId(props.id)}>
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold hover:underline cursor-pointer text-xl">{props.title}</h3>

                        <div className="ritht flex items-center justify-center">
                            {
                                love ?
                                    <AiFillHeart className="text-secondary-500 text-2xl" onClick={() => setLove(!love)} />
                                    :
                                    <AiOutlineHeart className="text-secondary-500 text-2xl" onClick={() => setLove(!love)} />
                            }
                            <div className="cursor-pointer p-5 rounded-full hover:bg-primary-100">
                                <SlOptionsVertical />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <p className="mr-3">
                            {props.company}
                        </p>
                        {/* <p>{props.rating}</p>
                        <AiFillStar /> */}
                    </div>
                    <div className="flex items-center gap-2">
                        <TfiLocationPin />
                        <p>{props.location}</p>
                    </div>
                    {
                        props.isRemote ? (
                            <p>Remote</p>
                        ):
                        (
                            <p>On Site</p>
                        )
                    }
                    <h3 className='p-1 bg-gray-200 w-max my-1 rounded'>Salary : {props.salary.min}TK - {props.salary.max}TK</h3>
                    <div className="flex flex-wrap gap-1">
                        {
                            props.benefits.map((item, index) => (
                                <Chip label={item} key={index} variant="outlined" />
                            ))
                        }
                    </div>
                </div>
            </Link>
        </>
    )
}

const ApplyJob = () => {
    const [id, setId] = useState(null);
    const [data, setData] = useState(null);
    const [activeJob, setActiveJob] = useState(null);

    // Data Fetching
    useEffect(() => {
        axios.get('/job')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []); 


    return (
        <>
            <NavbarJob />
            {/* <JobSearchbar /> */}
            <div className='w-full flex items-center justify-center' >
                <div className="w-full max-w-[1400px] container pt-20 pb-20 px-5">

                    <div className="w-full flex flex-col md:flex-row justify-between gap-5">

                        {/* Left sidebar */}
                        <div className="left md:w-2/5 flex flex-col gap-5">
                            <h3 className="text-xl font-bold text-gray-400">Available Jobs</h3>
                            <Divider className='w-full' />
                            {
                                data && data.map((item, index) => (
                                    <JobCard key={index} {...item} setId={setId} setActiveJob={setActiveJob} />
                                ))
                            }
                        </div>

                        {/* Right sidebar */}
                        <div className="right md:w-3/5 sticky top-20 rounded-xl shadow-xl overflow-hidden border" id='jobDetails'>
                            {
                                activeJob !== null && (
                                    <>
                                        {/* // Top Section */}
                                        <div className="p-5 w-full shadow">
                                            <h3 className="font-bold hover:underline cursor-pointer text-xl">{activeJob.title}</h3>
                                            <div className="flex items-center">
                                                <p className="mr-3">
                                                    {activeJob.company}
                                                </p>
                                                <p>{activeJob.rating}</p>
                                                <AiFillStar />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <TfiLocationPin />
                                                <p>{activeJob.location}</p>
                                            </div>
                                            <p>{activeJob.type}</p>
                                            <h3 className='p-1 bg-gray-200 w-max my-1 rounded'>Salary : {activeJob.salary.min}TK - {activeJob.salary.max}TK</h3>
                                            <div className="flex flex-wrap gap-1">
                                                {
                                                    activeJob.benefits.map((item, index) => (
                                                        <Chip label={item} key={index} variant="outlined" />
                                                    ))
                                                }
                                            </div>
                                            <Link to={`/apply/${id}`}>
                                                <button variant="contained" className='bg-primary-500 px-10 py-3 text-white rounded-sm hover:bg-secondary-500 font-bold mt-2 flex items-center gap-3'>
                                                    Apply Now <BsArrowRight />
                                                </button>
                                            </Link>
                                        </div>

                                        {/* // Bottom Section */}
                                        <div className="p-5 w-full text-gray-500 h-[90vh] overflow-scroll">
                                            <h3 className="text-xl font-bold">Job Details</h3>
                                            <p className="">{activeJob.type}</p>
                                            <Divider className='py-3' />
                                            <h3 className="text-xl font-bold mt-2">Benefits</h3>
                                            {
                                                activeJob.benefits.map((item, index) => (
                                                    <Chip label={item} key={index} variant="outlined" className='mr-1' />
                                                ))
                                            }

                                            <Divider className='py-3' />
                                            <h3 className="text-xl font-bold mt-2">Full Job Description</h3>
                                            <p className='text-justify'>{activeJob.des}</p>

                                            <Divider className='py-3' />
                                            <h3 className="text-xl font-bold mt-2">Position Responsibilities</h3>
                                            <p>As a {activeJob.title}, you will:</p>
                                            <ul className='list-disc pl-10'>
                                                {
                                                    activeJob.responsibilities.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))
                                                }
                                            </ul>

                                            <Divider className='py-3' />
                                            <h3 className="text-xl font-bold mt-2">Qualification</h3>
                                            <ul className='list-disc pl-10'>
                                                {
                                                    activeJob.qualifications.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))
                                                }
                                            </ul>

                                            <Divider className='py-3' />
                                            <h3 className="text-xl font-bold mt-2">Experience</h3>
                                            <ul className='list-disc pl-10'>
                                                {
                                                    activeJob.experience.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))
                                                }
                                            </ul>

                                            <Divider className='py-3' />
                                            <h3 className="text-xl font-bold mt-2">Education</h3>
                                            <ul className='list-disc pl-10'>
                                                {
                                                    activeJob.education.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApplyJob