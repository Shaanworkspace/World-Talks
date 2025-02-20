import React from 'react'
import ButtonNormal from '../Items/ButtonNormal';
import Selector from '../Layout/Selector';
const SearchFilter = ({search,setSearch,filter,setFilter}) => {
    const handleInput=(event)=>{
        event.preventDefault();
        setSearch(event.target.value);
    }

    const handleSelectChange=(event)=>{
        event.preventDefault();
        setFilter(event.target.value)
    }


    console.log(search,filter);


 
    return (
        <div className='h-16 flex justify-evenly items-center'>
            <div>
                <input type="text" value={search} onChange={handleInput} placeholder='Search Country' className='rounded-xl h-10 min-w-sm border-2 pl-3 ' />
            </div>
            <div className='flex gap-5'>
                <ButtonNormal text="Asc" />
                <ButtonNormal text="Desc" />
            </div>
            <div>
                <Selector onChange={handleSelectChange}/>
            </div>
        </div>
    )
}

export default SearchFilter