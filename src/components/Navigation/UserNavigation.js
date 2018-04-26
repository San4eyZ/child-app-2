import React from 'react';

import { NavigationLink } from '../../components';

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
            </React.Fragment>
        );
    }
}

export default UserNavigation;
