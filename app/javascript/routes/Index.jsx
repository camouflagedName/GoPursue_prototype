import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Launch from '../components/Launch(new)';
import Home from '../components/Home/Home';
import careerCard from '../components/careerCard/careerCard';
import Profile from '../components/Profile/Profile';
import NewUser from '../components/NewUser/NewUser';

export default (
    <Router>
        <Switch>
            <Route path='/home' exact component={Home} />
            <Route path='/careerCard' exact component={careerCard} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/' exact component={Launch} />
            <Route path='/newUser' exact component={NewUser} />
        </Switch>
    </Router>
);