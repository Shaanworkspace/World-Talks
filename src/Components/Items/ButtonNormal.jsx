import React from 'react';

const ButtonNormal = ({ text, onClick }) => {
    return (
        <button
            className='mt-3 border-1 w-22 sm:w-30 md:h-10 rounded-lg'
            onClick={onClick}
        >
            <div className='flex justify-center items-center'>
                <h1 className='ease-in-out'>{text}</h1>
            </div>
        </button>
    );
}

export default ButtonNormal;
