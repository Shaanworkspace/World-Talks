import React, { useEffect, useState } from 'react'
import { getCountryData } from '../API/postAPI'
import { useTransition } from 'react';
import Loader from '../Components/UI/Loader';
import CountryCard from '../Components/Layout/countryCard';

import SearchFilter from '../Components/UI/SearchFilter';
import { searchFilter } from '../Components/Helper/helperFuntion';


const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData();
            setCountries(res.data);
        })
    }, [])

    if (isPending) return <Loader />

    const searchedCountries = searchFilter(countries, search);
    const filterRegion = (country) => {
        if (filter === "All") return true; 
        return country.region === filter;
    };
    const filteredCountries = searchedCountries.filter(filterRegion);
    return (
        <div className='mt-20 flex justify-center items-center '>
            <div className='w-[80%]'>
                <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} Data={countries} setData={setCountries}/>
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