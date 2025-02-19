import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const ButtonArrowRight = ({ text }) => {
    return (
        <button className=' mt-3  border-1 w-42 h-10 rounded-2xl '>
            <div className='flex justify-center items-center  '>
                <h1 className=' ease-in-out'> {text} </h1>
                <FaArrowRight className='hover:translate-x-2  ml-3'/>
            </div>
        </button>
    )
}

export default ButtonArrowRight