import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../Home';

const GuestRouter = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route render={() => (<Redirect to="/"/>)}/>
    </Switch>
);

export default GuestRouter;
