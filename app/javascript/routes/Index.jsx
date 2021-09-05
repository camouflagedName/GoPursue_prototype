import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import careerCard from '../components/careerCard';

export default (
    <Router>
        <Switch>
            <Route path='/home' exact component={Home} />
            <Route path='/careerCard' exact component={careerCard} />
        </Switch>
    </Router>
);