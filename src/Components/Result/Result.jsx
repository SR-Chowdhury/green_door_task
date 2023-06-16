import React from 'react';

const Result = ({ formData }) => {
    const { make, colour, code } = formData;
    // console.log(formData)
    return (
        <div className='bg-[#e5e7eb] p-10 mt-5 space-y-3'>
            <h1 className='text-3xl font-semibold mb-3'>Generated Text</h1>
            <h1 className='text-2xl font-semibold'>I have a '{make}' and the colour is '{colour}'</h1>
            {
                colour === 'RED' && <p className='text-2xl text-red-600 font-bold'><code>THE CAR IS RED! NICE!</code></p>
            }
            <h1 className='text-2xl font-semibold'>REF:</h1>
            <p className='bg-white rounded-md py-5 px-2'>
                 {code}
            </p>
        </div>
    );
};

export default Result;