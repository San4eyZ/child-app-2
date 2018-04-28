import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './NavigationLink.css';

class NavigationLink extends React.Component {
    render() {
        return (
            <NavLink
                exact={this.props.exact}
                to={this.props.to}
                className={`navigation-link ${this.props.className}`}
                activeClassName="navigation-link_active"
                onClick={this.props.onClick}
            >
                {this.props.children}
            </NavLink>
        );
    }
}

NavigationLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    exact: PropTypes.bool,
    onClick: PropTypes.func
};

NavigationLink.defaultProps = {
    className: '',
    exact: false,
    onClick: () => {}
};

export default NavigationLink;
