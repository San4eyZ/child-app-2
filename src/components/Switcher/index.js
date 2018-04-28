import React from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import './Switcher.css';

const b = b_.with('switcher');

class Switcher extends React.Component {
    render() {
        const { options, className } = this.props;

        return (
            <div className={classNames(b(), className)}>
                {
                    options.map(({ title, path }) => (
                        <NavLink
                            key={title}
                            to={path}
                            className={b('option')}
                            activeClassName={b('option', { active: true })}
                            exact
                        >
                            {title}
                        </NavLink>
                    ))
                }
            </div>
        );
    }
}

Switcher.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired
    })).isRequired,
    className: PropTypes.string
};

Switcher.defaultProps = {
    className: ''
};

export default Switcher;
