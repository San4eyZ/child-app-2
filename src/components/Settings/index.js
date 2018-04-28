import React from 'react';
import b_ from 'b_';
import classNames from 'classnames';
import { Switch, Route } from 'react-router-dom';

import Switcher from '../Switcher';
import Container from '../Container';
import DataFieldset from './DataFieldset';
import PasswordFieldset from './PasswordFieldset';

import './Settings.css';

const b = b_.with('settings');

class Settings extends React.Component {
    render() {
        const options = [
            {
                title: 'Личные данные',
                path: '/settings'
            },
            {
                title: 'Пароль',
                path: '/settings/password'
            }
        ];

        return (
            <Container className={b()}>
                <h1 className={classNames(b('heading'), 'header_main')}>Настройки</h1>
                <Switcher options={options} className={b('switcher')}/>
                <Switch>
                    <Route exact path="/settings" component={DataFieldset}/>
                    <Route path="/settings/password" component={PasswordFieldset}/>
                </Switch>
            </Container>
        );
    }
}

export default Settings;
