import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Main from './layout/Main';
import {BrowserRouter as Router} from 'react-router-dom';
import Footer from './layout/Footer';




function App() {
  return (
    <Router>
        <div className="App">
          <NavBar/>
          <Main/>
          <Footer/>
        </div>
    </Router>
  );
}

export default App;
