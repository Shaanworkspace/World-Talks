import React, { useEffect, useState } from 'react'
import { getCountryData } from '../API/postAPI'
import { useTransition } from 'react';
import Loader from '../Components/UI/Loader';
import CountryCard from '../Components/Layout/countryCard';

import SearchFilter from '../Components/UI/SearchFilter';
<<<<<<< HEAD
import { searchFilter } from '../Components/Helper/helperFuntion';

=======
>>>>>>> 2c48cbecb3025abf171f4a2abd2c4a016be6b3e4

const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);
<<<<<<< HEAD
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
=======
    const [search , setSearch] = useState("");
    const [filter , setFilter] = useState("All");

>>>>>>> 2c48cbecb3025abf171f4a2abd2c4a016be6b3e4

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData();
            setCountries(res.data);
        })
    }, [])

<<<<<<< HEAD
    if (isPending) return <Loader />
=======
    //Until Function is loading , this will keep displaying the loader class
    if (isPending) return <Loader />
    
    
    // Search function
    const searchCountry= (country)=>{
        if(search){
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return country
    }
    const filteredCountries = countries.filter((country)=>searchCountry(country))
    
>>>>>>> 2c48cbecb3025abf171f4a2abd2c4a016be6b3e4

    const searchedCountries = searchFilter(countries, search);
    const filterRegion = (country) => {
        if (filter === "All") return true; 
        return country.region === filter;
    };
    const filteredCountries = searchedCountries.filter(filterRegion);
    return (
        <div className='mt-20 flex justify-center items-center '>
            <div className='w-[80%]'>
<<<<<<< HEAD
                <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} Data={countries} setData={setCountries}/>
=======
                <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter}/>
>>>>>>> 2c48cbecb3025abf171f4a2abd2c4a016be6b3e4
                <div id='Tasklist' className=' mt-3 h-screen  flex  flex-nowrap overflow-y-auto  justify-star'>
                    <ul className=' mt-5 flex flex-wrap gap-2 justify-evenly items-center'>
                        {
                            filteredCountries.map((currCountry, idx) => {
                                return <>
                                    <CountryCard country={currCountry} key={idx} />
                                </>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Country