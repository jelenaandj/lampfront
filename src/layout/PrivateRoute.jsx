import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {isTokenLogin} from '../services/tokens'


export default function PrivateRoute({component: Component, ...rest}) {
    return (
        <div>
            <Route {...rest} render={props => (
            isTokenLogin() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
        </div>
    )
}
