import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react';

import './App.css';

import { Footer, Header, Home, LoaderPage, Game, Homework, Settings, Stats, Input, Checkbox, Button } from '../../components';

import userStore from '../../stores/user-store';

@observer
class App extends Component {
    static renderMain() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/game" component={Game}/>
                <Route path="/homework" component={Homework}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/stats" component={Stats}/>
            </Switch>
        );
    }

    componentDidMount() {
        userStore.initialAuth();
    }

    render() {
        return (
            userStore.isFetching ? (
                <LoaderPage fixed/>
            ) : (
                <BrowserRouter>
                    <div className="App">
                        <Header/>
                        <Input type="text" theme="dark"/>
                        <Checkbox title="Checkbox" theme="dark"/>
                        <Button theme="dark">Button</Button>
                        {App.renderMain()}
                        <Footer/>
                    </div>
                </BrowserRouter>
            )
        );
    }
}

export default App;
