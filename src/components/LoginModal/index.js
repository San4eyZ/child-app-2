import React from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';
import classNames from 'classnames';

import Modal from '../Modal';
import { Input, Checkbox, Button } from '../../components';

import './LoginModal.css';

const b = b_.with('login');

class LoginModal extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            remember: true
        };
    }

    componentDidMount() {
        this.emailInput.focus();
    }

    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    };

    handlePass = (event) => {
        this.setState({
            password: event.target.value
        });
    };

    handleRemember = (event) => {
        this.setState({
            remember: event.target.checked
        });
    };

    render() {
        const { closeHandler } = this.props;
        return (
            <Modal closeHandler={closeHandler} zIndex={100} className={b()}>
                <h1 className={classNames(b('heading'), 'display')}>Вход</h1>
                <form className={classNames(b('form'), 'modal-form')}>
                    <Input
                        className={classNames(b('input'), b_('modal-form', 'input'))}
                        theme="dark"
                        type="email"
                        onInput={this.handleEmail}
                        value={this.state.email}
                        placeholder="Email"
                        ref={(inp) => { this.emailInput = inp; }}
                    />
                    <Input
                        className={classNames(b('input'), b_('modal-form', 'input'))}
                        theme="dark"
                        type="password"
                        onInput={this.handlePass}
                        value={this.state.password}
                        placeholder="Пароль"
                    />
                    <Checkbox
                        theme="dark"
                        onChange={this.handleRemember}
                        checked={this.state.remember}
                        title="Запомнить меня"
                    />
                </form>
            </Modal>
        );
    }
}

LoginModal.propTypes = {
    closeHandler: PropTypes.func.isRequired
};

export default LoginModal;
