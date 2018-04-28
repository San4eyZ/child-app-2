import React from 'react';
import PropTypes from 'prop-types';

import TeacherRoutes from './TeacherRoutes';
import StudentRouter from './StudentRouter';
import GuestRouter from './GuestRoutes';

const types = {
    teacher: TeacherRoutes,
    student: StudentRouter,
    guest: GuestRouter
};

class Routes extends React.Component {
    render() {
        const CurrentRoutes = types[this.props.type] || types.guest;

        return (
            <CurrentRoutes/>
        );
    }
}

Routes.propTypes = {
    type: PropTypes.oneOf(Object.keys(types)).isRequired
};

export default Routes;
