import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import b_ from 'b_';

import './Checkbox.css';

const b = b_.with('checkbox');

const themes = {
    light: 'light',
    dark: 'dark'
};

class Checkbox extends React.Component {
    render() {
        const { className, theme, onChange, title, checked } = this.props;

        return (
            // eslint-disable-next-line
            <label className={classNames(b('label'), 'text')}>
                <input
                    type="checkbox"
                    className={classNames(b('indicator'))}
                    onChange={onChange}
                    checked={checked}
                />
                <span className={classNames(b({ theme: themes[theme] }), className)}/>
                {title && <span className={b('title')}>{title}</span>}
            </label>
        );
    }
}

Checkbox.propTypes = {
    className: PropTypes.string,
    theme: PropTypes.oneOf(Object.keys(themes)),
    onChange: PropTypes.func.isRequired,
    title: PropTypes.string,
    checked: PropTypes.bool
};

Checkbox.defaultProps = {
    className: '',
    theme: 'light',
    title: '',
    checked: true
};

export default Checkbox;
