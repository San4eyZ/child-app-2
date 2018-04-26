import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import b_ from 'b_';

import './Header.css';

import { Logo, Navigation } from '../../components';

const b = b_.with('header');

class Header extends React.Component {
    render() {
        return (
            <header className={classNames(b(), this.props.className, 'container')}>
                <Logo className={b('logo')}/>
                <Navigation type="user" className={b('navigation')}/>
            </header>
        );
    }
}

Header.propTypes = {
    className: PropTypes.string
};

Header.defaultProps = {
    className: ''
};

export default Header;
