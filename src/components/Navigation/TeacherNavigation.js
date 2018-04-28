import React from 'react';
import { Link } from 'react-router-dom';

import { NavigationLink } from '../../components';
import NotificationModel from '../../models/notification';

import userStore from '../../stores/user-store';

class TeacherNavigation extends React.Component {
    onLogOut = (event) => {
        event.preventDefault();

        (new NotificationModel('Вы действительно хотите выйти?', 'confirm', userStore.logOut)).show();
    };

    render() {
        return (
            <React.Fragment>
                <NavigationLink to="/groups" className="navigation__link">
                    Группы
                </NavigationLink>
                <NavigationLink to="/settings" className="navigation__link">
                    Настройки
                </NavigationLink>
                <Link to="/" className="navigation__link navigation-link" onClick={this.onLogOut}>
                    Выйти
                </Link>
            </React.Fragment>
        );
    }
}

export default TeacherNavigation;
