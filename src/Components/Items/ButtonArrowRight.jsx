import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const ButtonArrowRight = ({ text }) => {
    return (
        <button className='p-1.5 border-1 md:w-42 md:h-10 rounded-xl'>
            <div className='flex justify-center items-center  '>
                <h1 className=' ease-in-out'> {text} </h1>
                <FaArrowRight className='hover:translate-x-2 ml-1  md:ml-3'/>
            </div>
        </button>
    )
}

export default ButtonArrowRight