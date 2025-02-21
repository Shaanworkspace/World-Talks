import React from 'react'

const Selector = ({ onChange }) => {
    return (
        <select name="opt" className=' mt-3 z-20  border-1 w-full md:w-30 h-10 rounded-t-md pl-4' onChange={onChange} >
            <option className='bg-stone-600 text-white ' value="All">All</option>
            <option className='bg-stone-600 text-white' value="Africa">Africa</option>
            <option className='bg-stone-600 text-white' value="America">America</option>
            <option className='bg-stone-600 text-white' value="Europe">Europe</option>
            <option className='bg-stone-600 text-white' value="Asia">Asia</option>
            <option className='bg-stone-600 text-white' value="oceania">oceania</option>
        </select>
    )
}

export default Selector