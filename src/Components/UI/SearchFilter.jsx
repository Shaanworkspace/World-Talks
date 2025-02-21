import React from 'react'
import ButtonNormal from '../Items/ButtonNormal';
import Selector from '../Layout/Selector';
import { SortHandler } from '../Helper/helperFuntion';

const SearchFilter = ({ search, setSearch, filter, setFilter, Data, setData }) => {
    const handleInput = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    }

    const handleSelectChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value)
    }


    console.log(search, filter);
    return (
        <div className='h-16 flex flex-wrap sm:flex-row  justify-center sm:justify-between mt-6 mb-6 items-center ' >
            <div>
                <input type="text" value={search} onChange={handleInput} placeholder='Search Country' className='rounded-lg h-10 min-w-md border-2 pl-3 ' />
            </div>
            <div className='sm:ml-3 lg:ml-0 flex min-w-md md:min-w-sm justify-between '>
                <div className='flex gap-1'>
                    <ButtonNormal value="" text="Asc" onClick={() => SortHandler("Asc", Data, setData)} />
                    <ButtonNormal value="" text="Desc" onClick={() => SortHandler("Desc", Data, setData)} />
                </div>
                <div className='max-w-30 z-5'>
                    <Selector onChange={handleSelectChange} />
                </div>
            </div>
        </div>
    )
}

export default SearchFilter