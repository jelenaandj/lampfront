import React from 'react';
import {Link} from 'react-router-dom';



export default function Navbar() {
    return (
        <div className='navbar'>
          <div className='logo'>
            <img src='lamplogo.webp' style={{width:'70px',height:'50px'}}/>
            <h3>Lamp Shop</h3>
          </div>
          
          <ul className='navlinks'>
            <Link to='/'>
              <li>About</li>
            </Link>
            <Link  to='/products'>
              <li>Products</li>
            </Link>
            <Link  to='/contact'>
              <li>Contact</li>
            </Link>
            <Link  to='/login'>
              <li>Log in</li>
            </Link>
            <Link  to='/register'>
              <li>Register</li>
            </Link>
          </ul>
        </div>
    );
}
