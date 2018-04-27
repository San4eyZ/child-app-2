import React from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';

import './Button.css';

const b = b_.with('button');

const themes = {
    light: 'light',
    dark: 'dark'
};

class Button extends React.Component {
    render() {
        const { children, theme, onClick, disabled } = this.props;

        return (
            <button
                className={b({ theme: themes[theme] })}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
        );
    }
}

Button.propTypes = {
    children: PropTypes.node,
    theme: PropTypes.oneOf(Object.keys(themes)),
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

Button.defaultProps = {
    children: [],
    theme: 'light',
    disabled: false
};

export default Button;
