import React, { useEffect, useState } from 'react';
import { getCountryData } from '../API/postAPI';
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
        });
    }, []);

    // Until data is loading, show the Loader component
    if (isPending) return <Loader />;

    // Step 1: Search Function
    const searchedCountries = searchFilter(countries, search);

    // Step 2: Region Filtering Function
    const filterRegion = (country) => {
        if (filter === "All") return true;
        return country.region === filter;
    };

    // Step 3: Apply Region Filtering
    const filteredCountries = searchedCountries.filter(filterRegion);

    return (
        <div className='mt-20 flex justify-center items-center'>
            <div className='w-[100%] md:w-[80%] flex flex-col justify-between'>
                <div >
                    <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
                </div>
                <div className= 'mt-6 md:mt-0 rounded-lg border-2 border-stone-500 '>
                    <div id='Tasklist' className=' mb-3 mt-5 lg:mt-5 h-screen flex flex-nowrap overflow-y-auto justify-start'>
                        <ul className='mt-4 flex flex-wrap gap-0.5 md:justify-between md:px-6 justify-evenly items-center'>
                            {
                                filteredCountries.map((currCountry, idx) => (
                                    <CountryCard country={currCountry} key={idx} />
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;
