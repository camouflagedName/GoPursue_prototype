import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Launch from '../components/Launch';
import Home from '../components/Home/Home';
import careerCard from '../components/careerCard/careerCard';
import Profile from '../components/Profile/Profile';

export default (
    <Router>
        <Switch>
            <Route path='/home' exact component={Home} />
            <Route path='/careerCard' exact component={careerCard} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/' exact component={Launch} />
        </Switch>
    </Router>
);