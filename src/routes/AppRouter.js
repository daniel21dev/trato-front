import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { getMeAction } from '../actions/authActions';
import { Login } from '../components/auth/Login';
import { SignUp } from '../components/auth/SignUp';
import { Home } from '../components/Home';
import { NuevoTrato } from '../components/NuevoTrato';
import { Tratos } from '../components/Tratos';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

    const dispatch = useDispatch();
    const { loading, user } = useSelector( state => state.auth);
    const token = localStorage.getItem('token')

    useEffect(() => {
        if( token ){
            dispatch( getMeAction( token ) );
        }
    }, [dispatch])

    if ( loading ) {
        return (<h5>Espere...</h5>);
    }


    return (
        <Router>
            <Switch>
                <PrivateRoute exact path='/' component={ Home } isAuthenticated={ !!user }/>
                <PrivateRoute exact path='/nuevotrato' component={ NuevoTrato } isAuthenticated={ !!user }/>
                <PrivateRoute exact path='/tratos' component={ Tratos } isAuthenticated={ !!user } />
                <PublicRoute path='/login' component={ Login } isAuthenticated={ !!user  }/>
                <PublicRoute path='/signup' component={ SignUp } isAuthenticated={ !!user }/>
                <Redirect to='/'/>
            </Switch>
        </Router>
    )
}
