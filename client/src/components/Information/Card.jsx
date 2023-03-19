import { CardActionArea } from '@mui/material'
import React from 'react'
import ic1 from '../../assets/img/icon/ic1.png'
import ic2 from '../../assets/img/icon/ic2.png'
import ic3 from '../../assets/img/icon/ic3.png'
import ic4 from '../../assets/img/icon/ic4.png'
import ic5 from '../../assets/img/icon/ic5.png'
import ic6 from '../../assets/img/icon/ic6.png'

const Card = ({id, icon, number, text}) => {
    return (
        <div className={`flex flex-col items-stretch justify-center p-10 shadow rounded h-[350px] w-[100%] md:w-[30%] md:min-w-[200px] ${id === 2 || id === 5 ? 'md:mt-10 lg:mt-10' : ''}`}>
            <div className="flex flex-col gap-5 items-center justify-center">
                <img src={id==1 && ic1 || id==2&&ic2 || id==3&&ic3 || id==4&&ic4 || id==5&&ic5 || id==6&&ic6} alt="" />
                <p className="text-4xl font-extrabold text-secondary-500">{number}+</p>
                <p className="">{text}</p>
            </div>
        </div>
    )
}

export default Card