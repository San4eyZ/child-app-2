import React from 'react';
import { Link } from 'react-router-dom';
import b_ from 'b_';
import classNames from 'classnames';

import './NoMatch.css';

const b = b_.with('no-match');

class NoMatch extends React.Component {
    render() {
        return (
            <section className={b()}>
                <h1 className={classNames(b('heading'), 'display')}>
                    По данному адресу ничего не найдено.
                </h1><br/>
                <Link to="/" className={b('link')}>На главную</Link>
            </section>
        );
    }
}

export default NoMatch;
