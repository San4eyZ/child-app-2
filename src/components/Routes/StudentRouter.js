import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Game, Home, Homework, Settings, Stats } from '../';
import NoMatch from '../NoMatch';

const StudentRouter = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/game" component={Game}/>
        <Route path="/homework" component={Homework}/>
        <Route path="/settings" component={Settings}/>
        <Route path="/stats" component={Stats}/>
        <Route component={NoMatch}/>
    </Switch>
);

export default StudentRouter;
