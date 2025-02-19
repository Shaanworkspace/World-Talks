import React from 'react'
import ButtonArrowRight from '../Components/Items/ButtonArrowRight'


const Home = () => {
    return (
        <main className=' w-full flex items-center justify-center  '>
            <div className='mt-16 md:h-76 w-8/10 flex flex-col md:flex-row gap-4'>
                <div className="order-2 mt-5 md:order-1 md:w-1/2 flex flex-col justify-center h-full ">
                    <h1 className='whitespace-wrap md:h-30 md:max-w-[600px] md:min-w-[600px] xl:w-full  text-5xl font-bold pb-6'>Explore the World, One  Country at a Time.</h1>
                    <p className=' w-full md:w-9/10'>Discover the history. culture. and Of every nation. Sort. search. and filter through countries to find the details you need</p>
                    <ButtonArrowRight text={"Start Exploring"}/>
                </div>
                <div className="order-1 pt-10 sm:pt-6 md:flex md:w-1/2 md:order-2 ">
                    <img src="/world-Talks/images/image.png" alt="World Image" />
                </div>
            </div>
        </main>
    )
}

export default Home