import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import b from 'b_';

import './Input.css';

const themes = {
    light: 'light',
    dark: 'dark'
};

class Input extends React.Component {
    render() {
        const { type, theme, className, placeholder, onInput, value } = this.props;

        return (
            <input
                type={type}
                className={classNames(b('input', { theme: themes[theme] }), className)}
                onInput={onInput}
                placeholder={placeholder}
                value={value}
            />
        );
    }
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    theme: PropTypes.oneOf(Object.keys(themes)),
    className: PropTypes.string,
    onInput: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string
};

Input.defaultProps = {
    className: '',
    theme: 'light',
    placeholder: '',
    value: ''
};

export default Input;
