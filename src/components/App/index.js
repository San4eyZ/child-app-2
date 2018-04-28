import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react';

import './App.css';

import { Footer, Header, Home, LoaderPage, Game, Homework, Settings, Stats, LoginModal, RegisterModal, ResetModal } from '../../components';
import Notifier from '../Notifier';

import userStore from '../../stores/user-store';
import uiStore from '../../stores/ui-store';
import notificationStore from '../../stores/notification-store';

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

    static renderModals() {
        return (
            <React.Fragment>
                {uiStore.displays.login && <LoginModal closeHandler={uiStore.toggleModal('login')}/>}
                {uiStore.displays.register && <RegisterModal closeHandler={uiStore.toggleModal('register')}/>}
                {uiStore.displays.reset && <ResetModal closeHandler={uiStore.toggleModal('reset')}/>}
            </React.Fragment>
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
                        {App.renderMain()}
                        <Footer/>
                        {App.renderModals()}
                        {
                            !notificationStore.isEmpty &&
                            <Notifier/>
                        }
                    </div>
                </BrowserRouter>
            )
        );
    }
}

export default App;
