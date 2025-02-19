import React, { useState, useEffect } from 'react';
import { FiAlignJustify } from "react-icons/fi";

const DropDown = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to close menu when screen size exceeds sm (768px)
    const handleResize = () => {
        if (window.innerWidth > 640) {
            setIsMenuOpen(false);
        }
    };

    // Listen for window resize events
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        // Cleanup event listener when component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className='sm:hidden'>
            <FiAlignJustify 
                className='text-3xl cursor-pointer sm:hidden' 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
            />
            <div 
                className={`absolute sm:hidden top-20 left-0 w-screen bg-green-800 flex flex-col items-center font-semibold text-lg transform transition-transform 
                ${isMenuOpen ? "opacity-100" : "opacity-0"}`} 
                style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
            >
                <div className='w-full text-xl text-center p-4 hover:bg-stone-800 hover:text-white transition-all cursor-pointer text-black'>Home</div>
                <div className='w-full text-xl text-center p-4 hover:bg-stone-800 hover:text-white transition-all cursor-pointer text-black'>About</div>
                <div className='w-full text-xl text-center p-4 hover:bg-stone-800 hover:text-white transition-all cursor-pointer text-black'>Country</div>
                <div className='w-full text-xl text-center p-4 hover:bg-stone-800 hover:text-white transition-all cursor-pointer text-black'>Contact</div>
            </div>
        </div>
    );
};

export default DropDown;
