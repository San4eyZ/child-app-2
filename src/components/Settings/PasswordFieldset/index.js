import React from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';
import classNames from 'classnames';

import Input from '../../Input';
import Button from '../../Button';

import './PasswordFieldset.css';

const b = b_.with('password-fieldset');

class PasswordFieldset extends React.Component {
    constructor() {
        super();

        this.state = {
            newPassword: '',
            oldPassword: ''
        };
    }

    componentDidMount() {
        this.startInput.focus();
    }

    handleInput = prop => (event) => {
        this.setState({
            [prop]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        const { newPassword, oldPassword } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={classNames(b(), this.props.className)}>
                <p className={b('label')}>Введите новый пароль</p>
                <Input
                    type="password"
                    onChange={this.handleInput('newPassword')}
                    value={newPassword}
                    placeholder="Новый пароль..."
                    className={b('input')}
                    ref={(inp) => { this.startInput = inp; }}
                />
                <p className={b('label')}>Введите старый пароль</p>
                <Input
                    type="password"
                    onChange={this.handleInput('oldPassword')}
                    value={oldPassword}
                    placeholder="Старый пароль..."
                    className={b('input')}
                />
                <div className={b('buttons')}>
                    <Button onClick={this.enableEditing} className={b('button')} theme="dark">
                        Изменить
                    </Button>
                </div>
            </form>
        );
    }
}

PasswordFieldset.propTypes = {
    className: PropTypes.string
};

PasswordFieldset.defaultProps = {
    className: ''
};

export default PasswordFieldset;
