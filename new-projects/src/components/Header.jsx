import React from 'react';
//import link
import { Link } from 'react-router-dom';
//import logo
import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className='mb-12 py-6 border-b'>
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link to='/'><img src={Logo} alt="logo" /></Link>
        {/* buttons */}
        <div className='flex items-center gap-6'>
          <Link to='/login' className='hover:text-violet-900 transition'>Log in</Link>
          <Link to='/signup' className='btn btn-blue transition'>Sign up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
