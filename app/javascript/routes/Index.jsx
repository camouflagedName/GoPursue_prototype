import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Launch from '../components/Launch';
import MainSearch from '../components/Search/MainSearch';
import CareerCard from '../components/CareerCard/CareerCard';
import Profile from '../components/Profile/Profile';
import NewUser from '../components/Login/NewUser/NewUser';
import ReturnUser from '../components/Login/ReturnUser/ReturnUser';
import GuestUser from '../components/Login/GuestUser';
import AppMain from '../components/AppMain';


export default (
    <Router>
        <Switch>
            <Route path='/' exact component={Launch} />
            {/*<Route path='/search' exact component={MainSearch} />
            <Route path='/careercard' exact component={CareerCard} />
            <Route path='/profile' exact component={Profile} />*/}
            <Route path='/newuser' exact component={NewUser} />
            <Route path='/returnuser' exact component={ReturnUser} />
            <Route path='/guest' exact component={GuestUser} />
            <Route path='/main' exact component={AppMain} />
        </Switch>
    </Router>
);