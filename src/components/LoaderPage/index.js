import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import b_ from 'b_';

import { Preloader } from '../../components';

import './LoaderPage.css';

const b = b_.with('loader-page');
const themes = {
    light: 'light',
    dark: 'dark'
};

class LoaderPage extends React.Component {
    render() {
        const { fixed, theme } = this.props;

        return (
            <div className={b({ fixed, theme })}>
                <Preloader size={100} theme={theme === 'light' ? 'dark' : 'light'}/>
                <h1 className={classNames(b('title', { theme }), 'display')}>Загрузка</h1>
            </div>
        );
    }
}

LoaderPage.propTypes = {
    fixed: PropTypes.bool,
    theme: PropTypes.oneOf(Object.keys(themes))
};

LoaderPage.defaultProps = {
    fixed: false,
    theme: 'dark'
};

export default LoaderPage;
