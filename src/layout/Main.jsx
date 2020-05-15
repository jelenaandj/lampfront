import React from 'react';
import About from '../components/About';
import ProductList from '../components/ProductList';
import Contact from '../components/Contact';
import ProductDets from '../components/ProductDets';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';
import Register from '../components/Register';
import {Route, Switch} from 'react-router-dom';
import Home from '../components/Home';
import Cart from '../components/Cart';

export default function Main() {
    return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/products' component={ProductList} />
                    <Route path='/products/:id' component={ProductDets}/>
                    <Route path='/contact' component={Contact} />
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <PrivateRoute path='/cart' component={Cart}/>
                </Switch>

            </div>
        
    );
}
