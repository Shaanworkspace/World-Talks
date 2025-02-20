import React from 'react'

<<<<<<< HEAD
const ButtonNormal = ({ text,onClick }) => {
    return (
        <button className=' mt-3  border-1 w-30 h-10 rounded-2xl' onClick={onClick} value="hi">
=======
const ButtonNormal = ({ text }) => {
    return (
        <button className=' mt-3  border-1 w-30 h-10 rounded-2xl'>
>>>>>>> 2c48cbecb3025abf171f4a2abd2c4a016be6b3e4
            <div className='flex justify-center items-center  '>
                <h1 className=' ease-in-out'> {text} </h1>
            </div>
        </button>
    )
}

export default ButtonNormal