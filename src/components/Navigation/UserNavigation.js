import React from 'react';
import { Link } from 'react-router-dom';

import { NavigationLink } from '../../components';

import userStore from '../../stores/user-store';

class UserNavigation extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavigationLink to="/game" className="navigation__link">
                    Играть
                </NavigationLink>
                <NavigationLink to="/homework" className="navigation__link">
                    Домашка
                </NavigationLink>
                <NavigationLink to="/stats" className="navigation__link">
                    Статистика
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

export default UserNavigation;
