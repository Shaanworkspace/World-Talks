import React from 'react'

const Contact = () => {
    const handleFormSubmit = (formData) => {
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    }


    return (
        <div className='mt-20 h-screen flex justify-center'>
            <div className='h-screen w-[80%]  flex flex-col  items-center'>
                <h2 className='text-3xl pt-10 md:pt-6  sm:text-4xl md:text-5xl font-bold'>Contact Us</h2>
                <form action={handleFormSubmit} className='flex flex-col gap-4 pt-10 sm:pt-10'>
                    <input name='username' type="text" required placeholder='Enter Your Name' className='placeholder:pl-2 placeholder:text-lg border-white border-1 w-80 h-12 sm:w-120 md:w-150 rounded-sm' />
                    <input name='Email' type="email" placeholder='Enter Your Email' className='placeholder:pl-2 placeholder:text-lg border-white border-1 w-80 h-12 sm:w-120 md:w-150  rounded-sm' />
                    <textarea name='message' required placeholder='Enter the message' className='placeholder:pl-2 placeholder:text-lg border-white border-1 w-80 h-60 md:h-50 sm:w-120 md:w-150  rounded-sm' />
                    <button type='submit' className='mt-6 h-8 w-40 border rounded-2xl' > Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact