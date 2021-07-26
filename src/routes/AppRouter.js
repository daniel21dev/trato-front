import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Login } from '../components/auth/Login';
import { SignUp } from '../components/auth/SignUp';
import { Home } from '../components/Home';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const token = localStorage.getItem('token')
const isAuthenticated = false

export const AppRouter = () => {

    return (
        <Router>
            <Switch>
                <PrivateRoute exact path='/' component={ Home } isAuthenticated={isAuthenticated}/>
                <PublicRoute path='/login' component={ Login } isAuthenticated={ isAuthenticated }/>
                <PublicRoute path='/signup' component={ SignUp } isAuthenticated={ isAuthenticated }/>
                <Redirect to='/'/>
            </Switch>
        </Router>
    )
}
