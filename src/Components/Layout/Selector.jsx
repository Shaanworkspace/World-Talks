import React from 'react'

const Selector = ({onChange}) => {
    return (
       <select name="opt" id="" className='mt-3  border-1 w-30 h-10 rounded-2xl pl-4' onChange={onChange} >
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="oceania">oceania</option>
        </select>
    )
}

export default Selector