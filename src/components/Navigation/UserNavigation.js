import React from 'react';

import { NavigationLink } from '../../components';

class UserNavigation extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavigationLink to="/game">Играть</NavigationLink>
                <NavigationLink to="/homework">Домашка</NavigationLink>
                <NavigationLink to="/stats">Статистика</NavigationLink>
                <NavigationLink to="/settings">Настройки</NavigationLink>
            </React.Fragment>
        );
    }
}

export default UserNavigation;
