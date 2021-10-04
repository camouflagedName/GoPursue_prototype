import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Launch from '../components/Launch(new)';
import Main from '../components/Search/Main';
import CareerCard from '../components/careerCard/CareerCard';
import Profile from '../components/Profile/Profile';
import NewUser from '../components/NewUser/NewUser';
import ReturnUser from '../components/ReturnUser/ReturnUser';

export default (
    <Router>
        <Switch>
            <Route path='/search' exact component={Main} />
            <Route path='/careercard' exact component={CareerCard} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/' exact component={Launch} />
            <Route path='/newUser' exact component={NewUser} />
            <Route path='/returnUser' exact component={ReturnUser} />
        </Switch>
    </Router>
);