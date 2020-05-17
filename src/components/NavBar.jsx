import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {isTokenLogin,tokenLogout} from '../services/tokens';
import Button from 'react-bootstrap/Button';
import {CartContext} from '../App';
import { useContext } from 'react';



export default function NavBar() {
//  const[changeDisplay, setChangeDisplay]=useState(false);
let history = useHistory();
const{cart}=useContext(CartContext);


  const handleLogOut=(e)=>{
    tokenLogout(e);
    history.push('/');

  }

    return (
        <div className='navbar' >
          <Navbar  sticky="top"  expand="lg" variant="light" bg="light" style={{width:'100%', height:'130px'}}>
            <Nav  className="mr-auto">
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
            <img src='lamplogo.webp' alt='img' style={{width:'70px',height:'50px'}}/>
            <h3>Lamp <br/> Shop</h3>
            </div>
              <Nav   className='nav'>
              {!isTokenLogin() ?
                <>
                <Link  to='/login'>
                  <li>Log in</li>
                </Link>
                <Link  to='/register'>
                  <li>Register</li>
                </Link>
                </>
                :
                <>
               <Link style={{marginRight:'10px'}} to='/cart'>
                  <li ><img src='cart.png' alt='img' style={{width:'40px'}}></img>
                  <label style={{color:'red', fontWeight:'bold',fontSize:'smaller'}}>
                { cart!==null? cart.length : ''}</label>
                  </li>
                
                </Link>
                <Button  variant="outline-danger" onClick={handleLogOut} style={{height:'50px'}} >Log out</Button>
                </>}
              </Nav>
          </Navbar>
        </div>
    );
}

