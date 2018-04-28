import React from 'react';
import { Link } from 'react-router-dom';

import { NavigationLink } from '../../components';
import userStore from '../../stores/user-store';

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
                <Link to="/" className="navigation__link navigation-link" onClick={userStore.logOut}>
                    Выйти
                </Link>
            </React.Fragment>
        );
    }
}

export default TeacherNavigation;
