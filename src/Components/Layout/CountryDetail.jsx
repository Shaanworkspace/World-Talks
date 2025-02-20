import React, { useEffect, useState, useTransition } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getIndivisualCountryData } from '../../API/postAPI';
import Loader from '../UI/Loader';
import ButtonArrowRight from '../Items/ButtonArrowRight';

const CountryDetail = () => {
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState(null);
    const { id } = useParams();


    useEffect(() => {
        startTransition(async () => {
            try {
                const res = await getIndivisualCountryData(id);
                if (res.status === 200) {
                    setCountry(res.data[0]);
                    console.log(res.data[0]);
                }
            } catch (error) {
                console.error("Error fetching country details:", error);
            }
        });
    }, [id]);

    if (isPending || !country) return <Loader />



    return (

        <section className='h-full mt-25 mb-3 flex  justify-center items-center'>
            <div className='w-[80%] rounded-2xl border-2 flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <div className=''>
                        <img src={country.flags.svg} alt={country.flags.alt} className='h-60 w-120' />
                    </div>
                    <div className='pt-25 pb-30 pl-6'>
                        <h1 className='text-3xl font-bold  pb-5'>{country.name.common}</h1>
                        <p><span className='text-xl text-stone-500  font-semibold'>Population : </span>{country.population.toLocaleString()}</p>
                        <p><span className='text-xl  text-stone-500 font-semibold'>Region : </span>{country.region}</p>
                        <p><span className='text-xl  text-stone-500 font-semibold'>Capital : </span>{country.capital}</p>
                        <p><span className='text-xl  text-stone-500 font-semibold'>Native Name : </span>{Object.keys(country.name.nativeName).map((key) => country.name.nativeName[key].common).join(", ")}</p>
                        {/* <p><span className='text-xl  text-stone-500 font-semibold'>Currencies : </span>{Object.keys(country.name.nativeName).map((key) => country.name.nativeName[key].common).join(", ")}</p> */}
                    </div>
                </div>

                <div className='pb-5'>
                    <NavLink to={"/country"}>
                        <span ><ButtonArrowRight text="Go Back" /></span>
                    </NavLink>
                </div>
            </div>

        </section>
    )
}

export default CountryDetail

{/*  */ }