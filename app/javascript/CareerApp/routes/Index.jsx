import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LaunchContainer from '../CareerLogin/views/Container';
import NewUser from '../CareerLogin/components/NewUser';
import ReturnUser from '../CareerLogin/components/ReturnUser';
import GuestUser from '../CareerLogin/components/GuestUser';
import AppMain from '../CareerMain/AppMain';


export default (
    <Router>
        <Switch>
            <Route path='/' exact component={LaunchContainer} />
            <Route path='/newuser' exact component={NewUser} />
            <Route path='/returnuser' exact component={ReturnUser} />
            <Route path='/guest' exact component={GuestUser} />
            <Route path='/main' exact component={AppMain} />
        </Switch>
    </Router>
);