import React from 'react'
import countryData from "../API/countryData.json"


const About = () => {
    return (
        <section className=' w-full flex items-center justify-center pt-20'  >
            <div className='w-[80%]'>
                <h1 className='text-3xl font-semibold text-center py-5'>Here are the Interesting Facts <br /> we're proud of ...</h1>
                <div className="cards-section  py-5 flex flex-wrap  ">
                    {
                        countryData.map((data,idx) => {
                            return <>
                                <div className=" card text-lg gap-4 m-3  whitespace-wrap" key={idx}>
                                    <div className="max-w-100 md:max-w-120 md:min-w-120 bg-[linear-gradient(71deg,#080509,#1a171c,#080509)]  rounded-4xl pl-5 pr-1 min-h-70">
                                        <div className=' py-6 text-4xl font-bold' >{data.countryName}</div>
                                        <div className="">
                                            <div className="flex mb-2 gap-2">
                                                <h1 className='text-stone-400 font-semibold'>Capital : </h1>
                                                <div>{data.capital}</div>
                                            </div>
                                            <div className="flex mb-2 gap-2">
                                                <h1 className='text-stone-400 font-semibold'>Population : </h1>
                                                <div>{data.population}</div>
                                            </div>
                                            <div className="flex gap-2 mb-4">
                                                <h1 className='whitespace-nowrap text-stone-400 font-semibold'>Intresting Fact : </h1>
                                                <div>{data.interestingFact}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default About