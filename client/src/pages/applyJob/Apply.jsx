import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { jobPageData, inputFields } from '../../data';
import { BsArrowRight } from "react-icons/bs"
import NavbarJob from '../../components/NavbarJob/NavbarJob';
import axios from '../../utils/axiosInstance';


export const InputFields = ({ title, placeholder, type, name, required }) => {
    return (
        <div className="mt-1 text-gray-400">
            <label htmlFor={name}>{title}: </label> <br />
            <input className='p-2 rounded border w-full outline-none' type={type} name={name} id={name} placeholder={placeholder} required={required} />
        </div>
    )
}

const Apply = () => {

    const [data,setData] = useState(null)

    let { id } = useParams();

     // Data Fetching
     useEffect(() => {
        axios.get(`/job/${id}`)
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            number: e.target.number.value,
            address: e.target.address.value,
            education: e.target.education.value,
            experience: e.target.experience.value,
            resume: resume,
            coverLetter: e.target.coverLetter.value,
        }
        console.log(data);
    }
    return (
        <>
            <NavbarJob />
            <div className='w-full flex items-center justify-center overflow-x-hidden' >
                <div className="w-full max-w-[1400px] container p-5 flex flex-col items-center">
                    <h1 className="text-3xl text-primary-500 font-bold mb-10">Apply Now for {data && data.title}</h1>
                    <form onSubmit={handleSubmit} className='md:w-3/5 border rounded-xl p-5 shadow-lg mb-5'>
                        <h3 className="text-xl text-center mb-3">{data && data.title}</h3>
                        {
                            inputFields.map((item, index) => (
                                <InputFields key={index} {...item} />
                            ))
                        }
                        <div className="mt-1 text-gray-400">
                            <label htmlFor="cover">Cover Latter: </label> <br />
                            <textarea name="coverLetter" id="cover" rows="5" className='p-2 border w-full outline-none'></textarea>
                        </div>

                        <button variant="contained" className='bg-primary-500 px-10 py-3 text-white rounded-sm hover:bg-secondary-500 font-bold mt-2 flex items-center gap-3'>
                            Submit Now <BsArrowRight />
                        </button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Apply