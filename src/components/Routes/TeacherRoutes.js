import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NoMatch from '../NoMatch';
import { Home, Settings, Groups } from '../';

const TeacherRoutes = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/settings" component={Settings}/>
        <Route path="/groups" component={Groups}/>
        <Route component={NoMatch}/>
    </Switch>
);

export default TeacherRoutes;
