import React from 'react';
import b_ from 'b_';

import Button from '../../Button';

import './AuthButtons.css';

import uiStore from '../../../stores/ui-store';

const b = b_.with('auth-buttons');

class AuthButtons extends React.Component {
    render() {
        return (
            <div className={b()}>
                <Button onClick={uiStore.toggleModal('register')} className={b('reg-button')}>
                    Регистрация
                </Button>
                <Button onClick={uiStore.toggleModal('login')} className={b('login-button')}>
                    Вход
                </Button>
            </div>
        );
    }
}

export default AuthButtons;
