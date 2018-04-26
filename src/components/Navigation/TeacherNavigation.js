import React from 'react';

import { NavigationLink } from '../../components';

class TeacherNavigation extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavigationLink to="/groups">Группы</NavigationLink>
                <NavigationLink to="/settings">Настройки</NavigationLink>
            </React.Fragment>
        );
    }
}

export default TeacherNavigation;
