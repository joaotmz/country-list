import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './views/Login/index';
import Home from './views/Home/index';
import CountryDetails from './views/CountryDetails/index'

import { isAuthenticated } from './util/auth';


function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthenticated() ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

const MainRoutes = () => (
    <Router>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/details/:id" component={CountryDetails}></Route>
            <PrivateRoute path="/">
                <Home/>
            </PrivateRoute>
            <PrivateRoute exact path="/">
                <Home/>
            </PrivateRoute>
            <Route path="*" component={Home}></Route>

        </Switch>
    </Router>
);

export default MainRoutes;