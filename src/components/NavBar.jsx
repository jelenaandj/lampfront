import React from 'react';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


////
{/* <div className='logo'>
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
          </ul> */}
///

export default function NavBar() {
    return (
        <div className='navbar'>
          <Navbar sticky="top"  expand="lg" variant="light" bg="light" style={{width:'100%', height:'130px'}}>
            <Nav className="mr-auto">
              <Link to='/about'>
                <li>About</li>
              </Link>
              <Link  to='/products'>
                <li>Products</li>
              </Link>
              <Link  to='/contact'>
                <li>Contact</li>
              </Link>
            </Nav> 
            <div className='logo'>
            <img src='lamplogo.webp' style={{width:'70px',height:'50px'}}/>
            <h3>Lamp <br/> Shop</h3>
            </div>
              <Nav>
                <Link  to='/login'>
                  <li>Log in</li>
                </Link>
                <Link  to='/register'>
                  <li>Register</li>
                </Link>
                <Link  to='/cart'>
                  <li>Cart</li>
                </Link>
              </Nav>
          </Navbar>
        </div>
    );
}

