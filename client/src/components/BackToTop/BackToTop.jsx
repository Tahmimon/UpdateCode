import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineArrowUp} from "react-icons/ai"

const BackToTop = () => {
    return (
        <Link to='/#nav'>
            <div className="fixed bottom-10 right-10 w-[50px] h-[50px] flex items-center justify-center rounded-full border border-primary-500 text-primary-500">
                <AiOutlineArrowUp />
            </div>
        </Link>
    )
}

export default BackToTop