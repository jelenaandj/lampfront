import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Main from './layout/Main';
import {BrowserRouter as Router} from 'react-router-dom';
import Footer from './layout/Footer';
import { useState } from 'react';
export const CartContext=React.createContext();




function App() {

const[cart,setCart]=useState([]);

const cartContextValue={
  cart,
  setCart
}

  return (
    <Router>
        <div className="App">
          <CartContext.Provider value={cartContextValue}>
            <NavBar/>
            <Main/>
            <Footer/>
          </CartContext.Provider>
        </div>
    </Router>
  );
}

export default App;
