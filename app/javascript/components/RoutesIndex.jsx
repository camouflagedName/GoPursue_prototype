import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InitPage from '../CareerApp/CareerLogin/components/InitPage';
import LaunchContainer from '../CareerApp/CareerLogin/views/Container';
import NewUser from '../CareerApp/CareerLogin/components/NewUser';
import ReturnUser from '../CareerApp/CareerLogin/components/ReturnUser';
import GuestUser from '../CareerApp/CareerLogin/components/GuestUser';
import AppMain from '../CareerApp/CareerMain/AppMain';
import AdminLogin from '../AdminPortal/AdminLogin/views/Login';
import { Main } from '../AdminPortal/AdminMain/views/Main';
import { ErrorPage } from '../AdminPortal/AdminMain/views/ErrorPage';

export default (
    <Router>
        <Switch>
            <Route path='/' exact component={InitPage} />
            <Route path='/login' exact component={LaunchContainer} />
            <Route path='/newuser' exact component={NewUser} />
            <Route path='/returnuser' exact component={ReturnUser} />
            <Route path='/guest' exact component={GuestUser} />
            <Route path='/main' exact component={AppMain} />
            <Route path='/admin' exact component={AdminLogin} />
            <Route path='/admin/portal' component={Main} />
            <Route path='/admin/error' component={ErrorPage} />
        </Switch>
    </Router>
);