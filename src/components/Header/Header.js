import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-slate-200 p-6'>
            <h1 className='font-semibold text-3xl mb-2'>Read Reviews About Your Favorite Book</h1>
            <nav>
                <Link className='link-style font-semibold' to="/">Home</Link>
                <Link className='link-style font-semibold' to="/review">Review</Link>
                <Link className='link-style font-semibold' to="/dashboard">DashBoard</Link>
                <Link className='link-style font-semibold' to="/blogs">Blogs</Link>
                <Link className='link-style font-semibold' to="/aboutus">About Us</Link>
            </nav>
        </div>
    );
};

export default Header;