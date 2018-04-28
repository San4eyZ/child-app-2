import React from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';
import classNames from 'classnames';

import Input from '../../Input';
import Button from '../../Button';

import './DataFieldset.css';

import userStore from '../../../stores/user-store';

const b = b_.with('data-fieldset');

class DataFieldset extends React.Component {
    constructor() {
        super();

        this.state = {
            firstName: userStore.user.firstName,
            lastName: userStore.user.lastName,
            email: userStore.user.email,
            isEditing: false
        };
    }

    enableEditing = (event) => {
        event.preventDefault();

        this.startInput.focus();

        this.setState(prev => ({
            isEditing: !prev.isEditing
        }));
    };

    cancelEditing = (event) => {
        event.preventDefault();

        this.setState({
            firstName: userStore.user.firstName,
            lastName: userStore.user.lastName,
            email: userStore.user.email,
            isEditing: false
        });
    };

    handleInput = prop => (event) => {
        this.setState({
            [prop]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        const { firstName, lastName, email, isEditing } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={classNames(b(), this.props.className)}>
                <p className={b('label')}>Имя</p>
                <Input
                    type="text"
                    onChange={this.handleInput('firstName')}
                    value={firstName}
                    placeholder="Имя..."
                    className={b('input', { disabled: !isEditing })}
                    ref={(inp) => { this.startInput = inp; }}
                />
                <p className={b('label')}>Фамилия</p>
                <Input
                    type="text"
                    onChange={this.handleInput('lastName')}
                    value={lastName}
                    placeholder="Фамилия..."
                    className={b('input', { disabled: !isEditing })}
                />
                <p className={b('label')}>Email</p>
                <Input
                    type="email"
                    onChange={this.handleInput('email')}
                    value={email}
                    placeholder="email..."
                    className={b('input', { disabled: !isEditing })}
                />
                <div className={b('buttons')}>
                    {
                        !isEditing ? (
                            <Button onClick={this.enableEditing} className={b('button')} theme="dark">
                                Редактировать
                            </Button>
                        ) : (
                            <React.Fragment>
                                <Button className={b('button')} theme="dark">
                                    Ок
                                </Button>
                                <Button onClick={this.cancelEditing} className={b('button')} theme="dark">
                                    Отмена
                                </Button>
                            </React.Fragment>
                        )
                    }
                </div>
            </form>
        );
    }
}

DataFieldset.propTypes = {
    className: PropTypes.string
};

DataFieldset.defaultProps = {
    className: ''
};

export default DataFieldset;
