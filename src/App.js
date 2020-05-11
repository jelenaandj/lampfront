import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Main from './layout/Main';
import {BrowserRouter as Router, Route} from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Main/>
      </div>
    </Router>
  );
}

export default App;
