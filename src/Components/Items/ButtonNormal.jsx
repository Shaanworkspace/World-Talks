import React from 'react'

const ButtonNormal = ({ text }) => {
    return (
        <button className=' mt-3  border-1 w-30 h-10 rounded-2xl'>
            <div className='flex justify-center items-center  '>
                <h1 className=' ease-in-out'> {text} </h1>
            </div>
        </button>
    )
}

export default ButtonNormal