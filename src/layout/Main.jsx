import React from 'react';
import About from '../components/About';
import ProductList from '../components/ProductList';
import Contact from '../components/Contact';
import ProductDets from '../components/ProductDets';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';
import Register from '../components/Register';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



export default function Main() {
    return (
        // <Switch>
            <div>
                <Route exact path='/' component={About} />
                <Route exact path='/products' component={ProductList} />
                <Route path='/products/:id' component={ProductDets}/>
                <Route path='/contact' component={Contact} />
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/cart' component={PrivateRoute}/>
            </div>
        // </Switch>

        // </Router>
        
    );
}
