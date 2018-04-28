import React from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';
import classNames from 'classnames';

import Modal from '../../Modal';
import { Input, Button } from '../../../components';

import './RegisterModal.css';

import uiStore from '../../../stores/ui-store';

const b = b_.with('register');

class LoginModal extends React.Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            repeated: ''
        };
    }

    componentDidMount() {
        this.startingInput.focus();
    }

    handleInput = prop => (event) => {
        this.setState({
            [prop]: event.target.value
        });
    };

    handleRegister = (event) => {
        event.preventDefault();
    };

    render() {
        const { closeHandler } = this.props;
        return (
            <Modal closeHandler={closeHandler} zIndex={100} className={b()}>
                <h1 className={classNames(b('heading'), 'display')}>Регистрация</h1>
                <form className={classNames(b('form'), 'modal-form')} onSubmit={this.handleRegister}>
                    <Input
                        className={classNames(b('input'), 'modal-form__input')}
                        theme="dark"
                        type="text"
                        onChange={this.handleInput('firstName')}
                        value={this.state.firstName}
                        placeholder="Имя..."
                        ref={(inp) => { this.startingInput = inp; }}
                    />
                    <Input
                        className={classNames(b('input'), 'modal-form__input')}
                        theme="dark"
                        type="email"
                        onChange={this.handleInput('lastName')}
                        value={this.state.lastName}
                        placeholder="Фамилия..."
                    />
                    <Input
                        className={classNames(b('input'), 'modal-form__input')}
                        theme="dark"
                        type="email"
                        onChange={this.handleInput('email')}
                        value={this.state.email}
                        placeholder="Email..."
                    />
                    <Input
                        className={classNames(b('input'), 'modal-form__input')}
                        theme="dark"
                        type="password"
                        onChange={this.handleInput('password')}
                        value={this.state.password}
                        placeholder="Пароль..."
                    />
                    <Input
                        className={classNames(b('input'), 'modal-form__input')}
                        theme="dark"
                        type="password"
                        onChange={this.handleInput('repeated')}
                        value={this.state.repeated}
                        placeholder="Повторите пароль..."
                    />
                    <Button className="modal-form__button">
                        Ок
                    </Button>
                    <div className={b('first-group')}>
                        Уже есть аккаунт?
                        <button
                            className="modal-form__secondary-btn"
                            onClick={uiStore.changeModal('login', 'register')}
                        >
                            Войти
                        </button>
                    </div>
                </form>
            </Modal>
        );
    }
}

LoginModal.propTypes = {
    closeHandler: PropTypes.func.isRequired
};

export default LoginModal;
