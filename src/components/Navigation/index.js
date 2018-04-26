import React from 'react';
import PropTypes from 'prop-types';

import UserNavigation from './UserNavigation';
import TeacherNavigation from './TeacherNavigation';

import './Navigation.css';

const types = {
    user: UserNavigation,
    teacher: TeacherNavigation
};

class Navigation extends React.Component {
    render() {
        const CurrentNav = types[this.props.type];

        return (
            <nav className={`navigation ${this.props.className}`}>
                <CurrentNav/>
            </nav>
        );
    }
}

Navigation.propTypes = {
    type: PropTypes.oneOf(['user', 'teacher']).isRequired,
    className: PropTypes.string
};

Navigation.defaultProps = {
    className: ''
};

export default Navigation;
