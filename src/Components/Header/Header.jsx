import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import './Header.css';

const Header = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className='headerSection text-white flex flex-col items-center justify-center'>
            <h1 className='text-5xl'>Green Doors</h1>
            <p className='text-2xl'>We don't cost the earth!</p>
        </div>
    );
};

export default Header;