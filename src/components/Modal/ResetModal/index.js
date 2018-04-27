import React from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';
import classNames from 'classnames';

import Modal from '../index';
import { Input, Button } from '../../index';

import './ResetModal.css';

const b = b_.with('reset');

class LoginModal extends React.Component {
    constructor() {
        super();

        this.state = {
            email: ''
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

    handleSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        const { closeHandler } = this.props;
        return (
            <Modal closeHandler={closeHandler} zIndex={100} className={b()}>
                <h1 className={classNames(b('heading'), 'display')}>Смена пароля</h1>
                <form className={classNames(b('form'), 'modal-form')} onSubmit={this.handleSubmit}>
                    <p className={b('text')}>
                        Введите email<br/>На него придут дальнейшие указания
                    </p>
                    <Input
                        className={classNames(b('input'), 'modal-form__input')}
                        theme="dark"
                        type="email"
                        onInput={this.handleEmail}
                        value={this.state.email}
                        placeholder="Email"
                        ref={(inp) => { this.emailInput = inp; }}
                    />
                    <Button className="modal-form__button">
                        Ок
                    </Button>
                </form>
            </Modal>
        );
    }
}

LoginModal.propTypes = {
    closeHandler: PropTypes.func.isRequired
};

export default LoginModal;
