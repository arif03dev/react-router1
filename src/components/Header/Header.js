import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='nav'>
            <Link to="/">Home</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/about">About</Link>
        </nav>
    );
};

export default Header;