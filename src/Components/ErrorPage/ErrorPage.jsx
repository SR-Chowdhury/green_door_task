import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center text-center' style={{ height: '500px'}}>
            <div>
                <h1 className='text-red-500 text-5xl mb-3'>Oops!</h1>
                <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
            </div>
        </div>
    );
};

export default ErrorPage;