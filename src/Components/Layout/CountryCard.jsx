import React from 'react'
import ButtonArrowRight from "../Items/ButtonArrowRight.jsx"

const CountryCard = ({ country }) => {

    const readMe = ()=>{
        console.log("clicked")
    }

    return (
        <li key={country.id} className=' w-[28%] h-90'>
            <div className='rounded-4xl p-5 border-2 bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] h-full'>
                <div className=''>
                    <img src={country.flags.svg} alt={country.flags.alt} className='max-h-34 min-h-30 rounded-2xl w-full object-fill' />
                </div>
                <div className=''>
                    <p className='text-3xl font-bold pb-2 pt-2'>{country.name.common.length > 10 ? country.name.common.slice(0, 10) + "..." : country.name.common}</p>
                    <p>
                        <span className='text-lg'>Population : </span>
                        {country.population.toLocaleString()}
                    </p>
                    <p>
                        <span className='text-lg'>Region : </span>
                        {country.region}
                    </p>
                    <p>
                        <span className='text-lg'>Capital : </span>
                        {country.capital[0]}
                    </p>
                </div>
                
                    <ButtonArrowRight text="Read More" onClick={readMe}/>
                
            </div>
        </li>
    )
}

export default CountryCard