import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Launch from '../adminWebsite/components/Launch';
import { Main } from '../adminWebsite/components/Main';
import { Users } from '../adminWebsite/components/Users';
import { Professionals } from '../adminWebsite/components/Professionals';
import { CareerInfo } from '../adminWebsite/CareerInfo';
import { AddProfessional } from '../adminWebsite/components/AddProfessional';


export default (
    <Router>
        <Switch>
            <Route path='/admin' exact component={Launch} />
            <Route path='/admin/dashboard' component={Main} />
            <Route path='/admin/users' component={Users} />
            <Route path='/admin/professionals' component={Professionals} />
            <Route path='/careerinfo' component={CareerInfo} />
            <Route path='/admin/add' component={AddProfessional} />
        </Switch>
    </Router>
);