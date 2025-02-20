import React, { useEffect, useState } from 'react'
import { getCountryData } from '../API/postAPI'
import { useTransition } from 'react';
import Loader from '../Components/UI/Loader';
import CountryCard from '../Components/Layout/countryCard';

const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries,setCountries] = useState([]);
    
    useEffect(() => {
        startTransition(async ()=>{
            const res = await getCountryData();
            setCountries(res.data);
        })
    }, [])

    if(isPending) return <Loader/>

    return (
        <div className='mt-20 flex justify-center items-center'>
            <div id='Tasklist' className='w-[80%]  h-screen  flex  flex-nowrap overflow-y-auto  justify-star'>
                <ul className=' mt-5 flex flex-wrap gap-2 justify-evenly items-center'>
                    {
                        countries.map((currCountry,idx)=>{
                            return<>
                                <CountryCard country ={currCountry} key={idx}/>
                            </>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Country