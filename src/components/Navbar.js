import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <ul className='navbar'>
            <li className='nav-buttons'><Link to='/'>Home</Link></li>
            <li className='nav-buttons'><Link to='/avengers'>Avengers</Link></li>
        </ul>
    )
}

export default Navbar;