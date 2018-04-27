import React from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';
import classNames from 'classnames';

import './Button.css';

const b = b_.with('button');

const themes = {
    light: 'light',
    dark: 'dark'
};

class Button extends React.Component {
    render() {
        const { children, theme, onClick, disabled, className } = this.props;

        return (
            <button
                className={classNames(b({ theme: themes[theme] }), className)}
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
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string
};

Button.defaultProps = {
    children: [],
    theme: 'light',
    disabled: false,
    className: '',
    onClick: () => {}
};

export default Button;
