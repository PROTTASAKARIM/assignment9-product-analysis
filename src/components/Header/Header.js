import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Read Reviews About Your Favorite Book</h1>
            <nav>
                <Link className='link-style' to="/home">Home</Link>
                <Link className='link-style' to="/review">Review</Link>
                <Link className='link-style' to="/dashboard">DashBoard</Link>
                <Link className='link-style' to="/blogs">Blogs</Link>
                <Link className='link-style' to="/aboutus">About Us</Link>
            </nav>
        </div>
    );
};

export default Header;