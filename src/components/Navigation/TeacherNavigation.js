import React from 'react';

import { NavigationLink } from '../../components';

class TeacherNavigation extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavigationLink to="/groups" className="navigation__link">
                    Группы
                </NavigationLink>
                <NavigationLink to="/settings" className="navigation__link">
                    Настройки
                </NavigationLink>
            </React.Fragment>
        );
    }
}

export default TeacherNavigation;
