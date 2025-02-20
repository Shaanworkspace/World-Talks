import React from 'react'
import footerAPI from "../../API/footerAPI.json"
import { MdPlace } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";

const Footer = () => {


    const footerIcon = {
        MdPlace: <MdPlace />,
        MdLocalPhone: <MdLocalPhone />,
        TbMailPlus: <TbMailPlus />
    }
    return (
        <footer className='h-30 flex justify-center items-center flex-col'>
            <div className='flex justify-evenly items-center w-[80%]'>
                {
                    footerAPI.map((data, idx) => {
                        return <div className='flex justify-center items-center gap-4' key={idx} >
                            <div className="text-4xl sm:text-4xl text-blue-500">
                                {footerIcon[data.icon]}
                            </div>
                            <div>
                                <div className="hidden lg:block  sm:text-2xl font-bold">
                                    {data.title}
                                </div>
                                <div className="hidden sm:block sm:text-lg text-stone-500">
                                    {data.details}
                                </div>
                            </div>

                        </div>
                    })
                }
            </div>
            <div className="pt-6 pb-3 w-[80%] text-stone-200 text-center py-3">
                © {new Date().getFullYear()} Shaan Yadav. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer