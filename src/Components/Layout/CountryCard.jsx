import React from 'react'
import ButtonArrowRight from "../Items/ButtonArrowRight.jsx"
import { NavLink } from 'react-router-dom'

const CountryCard = ({ country }) => {

    const readMe = () => {
        console.log("clicked");
    }

    return (
        <li key={country.id} className='w-[46%] mb-4 xl:w-[28%] h-90'>
            <div className='rounded-2xl p-4 md:p-5 border-2 bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] h-full'>
                <div className=''>
                    <img src={country.flags.svg} alt={country.flags.alt} className='max-h-34 min-h-30 rounded-2xl w-full object-fill' />
                </div>
                <div className=''>
                    <p className='text-xl sm:text-3xl font-bold pb-2 pt-2'>{country.name.common.length > 10 ? country.name.common.slice(0, 10) + "..." : country.name.common}</p>
                    <p>
                        <span className='text-lg'>Population : </span>
                        {country.population.toLocaleString()}
                    </p>
                    <p className=''>
                        <span className='text-lg'>Region : </span>
                        {country.region}
                    </p>
                    <p className='hidden lg:block'>
                        <span className='text-lg'>Capital : </span>
                        {country.capital[0]}
                    </p>
                    <div className='mb-2 mt-2'>
                        <NavLink to={`/country/${country.name.common}`} onClick={readMe}>
                            <ButtonArrowRight text="Read More" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CountryCard