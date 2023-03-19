/**
This component is called ContactFormLarge and it's a larger version of a contact form. 
Input fields for the user to fill out including full name, email, contact number, Whatsapp number, Skype, and file upload. 
RangeSlider component and a message input field. 
Bottom of the form, there's a button to submit the form that includes an arrow icon. 
The component also includes a message stating that NDA is signed for all projects.
 */
import React, { useState } from 'react'
import { BsArrowRight, BsCheckLg, BsSkype } from 'react-icons/bs'
import { MdPerson, MdMail, MdPhone, MdMessage } from "react-icons/md"
import { RiWhatsappFill } from "react-icons/ri"
import { AiFillDollarCircle } from "react-icons/ai"
import RangeSlider from '../Range/RangeSlider'
import { FaSpinner } from "react-icons/fa";
import axios from 'axios'
import ResponseSuccessModal from './ResponseSuccessModal'

const ContactFormLarge = () => {
    const [selectedBudget, setSelectedBudget] = useState("")
    const [files, setFiles] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [openModal, setOpenModal] = useState(false)


    const handleChangeBudget = (budget) => {
        if (budget === selectedBudget) return setSelectedBudget("")
        setSelectedBudget(budget)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        let attachment = undefined;
        try {
            setIsSubmitting(true);
            if (files) {
                // if files selected then upload file to server and get file name
                const filesArray = Array.from(files);
                const formData = new FormData();
                filesArray.forEach(file => {
                    formData.append('files[]', file);
                });
                const { data: resFiles } = await axios.post("http://localhost:8800/api/upload/response", formData)
                attachment = resFiles[0].filename;
                setFiles(null)
            }
            // after file uploaded then submit response inputs to server
            const response = {
                name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                whatsapp: e.target.whatsapp.value,
                skype: e.target.skype.value,
                budget: selectedBudget,
                message: e.target.message.value,
                attachment
            }
            const { data } = await axios.post("http://localhost:8800/api/client_responce", response)
            if (data._id) {
                setOpenModal(true)
            }
            setIsSubmitting(false);
            setError("");
            e.target.reset();
        } catch (error) {
            if (error.response?.data?.errors?.msg) {
                setError(error.response.data.errors.msg)
            } else {
                setError(error.message)
            }
            setIsSubmitting(false);
            console.log(error);
        }
    }

    return (
        <div className="shadow w-full p-5 rounded-xl max-w-[1200px]">
            {openModal && <ResponseSuccessModal openModal={openModal} setOpenModal={setOpenModal} />}
            <form onSubmit={handleSubmit}>
                <div className="w-full flex flex-col md:flex-row items-center md:gap-5">
                    <div className="border-b w-full flex items-center mt-5">
                        <MdPerson className='text-primary-500 text-2xl' />
                        <input type="text" placeholder="Your Full Name*" name="name" className="w-full p-2 text-gray-400 outline-none" required />
                    </div>
                    <div className="border-b w-full flex items-center mt-5">
                        <MdMail className='text-primary-500 text-2xl' />
                        <input type="email" name='email' placeholder="Your Email*" className="w-full p-2 text-gray-400 outline-none" required />
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row items-center md:gap-5">
                    <div className="border-b w-full flex items-center mt-5">
                        <MdPhone className='text-primary-500 text-2xl' />
                        <input name='phone' type="text" placeholder="Contact Number*" className="w-full p-2 text-gray-400 outline-none" required />
                    </div>
                    <div className="border-b w-full flex items-center mt-5">
                        <RiWhatsappFill className='text-primary-500 text-2xl' />
                        <input name="whatsapp" type="text" placeholder="Whatsapp Number" className="w-full p-2 text-gray-400 outline-none" required />
                    </div>
                    <div className="border-b w-full flex items-center mt-5">
                        <BsSkype className='text-primary-500 text-2xl' />
                        <input name='skype' type="text" placeholder="Skype" className="w-full p-2 text-gray-400 outline-none" required />
                    </div>
                </div>
                <div className="border-b w-full flex items-center mt-5">
                    <input onChange={(e) => setFiles(e.target.files)} type="file" placeholder="Choose a file" name="files" className="w-full p-2 text-gray-400 outline-none" />
                </div>
                <div className="border-b w-full flex items-center mt-5 ">
                    <div className='w-full lg:flex gap-3 items-center mb-2'>
                        <AiFillDollarCircle className='text-primary-500 lg:text-2xl text-2xl inline-block lg:mr-0 mr-2' />
                        <span className='inline-block'>Project Budget:</span>
                        <div className='flex flex-wrap lg:text-base text-xs gap-3 mt-2'>
                            {["<1000", "2000", "3000", "5000", "7500", "10000", ">10000"].map((budget, i) => <div onClick={() => handleChangeBudget(budget)} key={i} className={`border rounded-full px-2 py-1 cursor-pointer hover:bg-primary-400 hover:border-primary-400 hover:text-white hover:scale-105 transition-all hover:shadow-md ${budget === selectedBudget && "bg-primary-400 border-primary-400 text-white hover:shadow-md"}`}>
                                {budget}$
                            </div>)}
                        </div>
                    </div>
                </div>
                <div className="border-b w-full flex items-start mt-5 mb-10">
                    <MdMessage className='text-primary-500 text-2xl mt-3' />
                    <textarea name="message" type="text" placeholder="Your Message*" rows="5" className="w-full p-2 text-gray-400 outline-none">
                    </textarea>
                </div>
                <p className='text-gray-400 mb-10'>We sign NDA for all our projects.</p>
                {error && <p>{error}</p>}
                <button disabled={isSubmitting} variant="contained" className={`bg-primary-500 px-10 py-3 text-white rounded-sm hover:bg-secondary-500 font-bold mt-2 flex items-center gap-3 ${isSubmitting && "cursor-not-allowed"}`}>
                    Send {isSubmitting ? <FaSpinner className="animate-spin" /> : <BsArrowRight />}
                </button>

            </form>

        </div>
    )
}

export default ContactFormLarge