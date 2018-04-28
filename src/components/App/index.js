import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react';

import './App.css';

import { Footer, Header, LoaderPage, LoginModal, RegisterModal, ResetModal, Routes, AdminPage } from '../../components';
import Notifier from '../Notifier';

import userStore from '../../stores/user-store';
import uiStore from '../../stores/ui-store';
import notificationStore from '../../stores/notification-store';

@observer
class App extends Component {
    static renderModals() {
        return (
            <React.Fragment>
                {uiStore.displays.login && <LoginModal closeHandler={uiStore.toggleModal('login')}/>}
                {uiStore.displays.register && <RegisterModal closeHandler={uiStore.toggleModal('register')}/>}
                {uiStore.displays.reset && <ResetModal closeHandler={uiStore.toggleModal('reset')}/>}
            </React.Fragment>
        );
    }

    componentWillMount() {
        userStore.initialAuth();
    }

    render() {
        return (
            <BrowserRouter>
                {
                    userStore.isFetching ? (
                        <LoaderPage fixed/>
                    ) : (
                        <div className="App">
                            {
                                userStore.role === 'admin' ? (
                                    <AdminPage/>
                                ) : (
                                    <React.Fragment>
                                        <Header/>
                                        <Routes type={userStore.role}/>
                                        <Footer/>
                                    </React.Fragment>
                                )
                            }
                            {App.renderModals()}
                            {
                                !notificationStore.isEmpty &&
                                <Notifier/>
                            }
                        </div>
                    )
                }
            </BrowserRouter>
        );
    }
}

export default App;
