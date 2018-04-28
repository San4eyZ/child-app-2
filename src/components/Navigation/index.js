import React from 'react';
import PropTypes from 'prop-types';

import StudentNavigation from './StudentNavigation';
import TeacherNavigation from './TeacherNavigation';

import './Navigation.css';

const types = {
    student: StudentNavigation,
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
    type: PropTypes.oneOf(Object.keys(types)).isRequired,
    className: PropTypes.string
};

Navigation.defaultProps = {
    className: ''
};

export default Navigation;
