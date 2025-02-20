import React from 'react'
import ButtonNormal from '../Items/ButtonNormal';
import Selector from '../Layout/Selector';
<<<<<<< HEAD
import { SortHandler } from '../Helper/helperFuntion';

const SearchFilter = ({ search, setSearch, filter, setFilter ,Data ,setData}) => {
    const handleInput = (event) => {
=======
const SearchFilter = ({search,setSearch,filter,setFilter}) => {
    const handleInput=(event)=>{
>>>>>>> 2c48cbecb3025abf171f4a2abd2c4a016be6b3e4
        event.preventDefault();
        setSearch(event.target.value);
    }

<<<<<<< HEAD
    const handleSelectChange = (event) => {
=======
    const handleSelectChange=(event)=>{
>>>>>>> 2c48cbecb3025abf171f4a2abd2c4a016be6b3e4
        event.preventDefault();
        setFilter(event.target.value)
    }


<<<<<<< HEAD
    console.log(search, filter);
=======
    console.log(search,filter);


 
>>>>>>> 2c48cbecb3025abf171f4a2abd2c4a016be6b3e4
    return (
        <div className='h-16 flex justify-evenly items-center'>
            <div>
                <input type="text" value={search} onChange={handleInput} placeholder='Search Country' className='rounded-xl h-10 min-w-sm border-2 pl-3 ' />
            </div>
            <div className='flex gap-5'>
<<<<<<< HEAD
                <ButtonNormal value="" text="Asc" onClick={() => SortHandler( "Asc" , Data ,setData)} />
                <ButtonNormal value="" text="Desc" onClick={() => SortHandler("Desc" , Data ,setData)} />
            </div>
            <div>
                <Selector onChange={handleSelectChange} />
=======
                <ButtonNormal text="Asc" />
                <ButtonNormal text="Desc" />
            </div>
            <div>
                <Selector onChange={handleSelectChange}/>
>>>>>>> 2c48cbecb3025abf171f4a2abd2c4a016be6b3e4
            </div>
        </div>
    )
}

export default SearchFilter