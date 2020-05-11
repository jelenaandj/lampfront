import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Main from './layout/Main';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';




function App() {
  return (
    <Router>
        <div className="App">
          <NavBar/>
          <Main/>
        </div>
    </Router>
  );
}

export default App;
