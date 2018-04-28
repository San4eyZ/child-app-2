import React from 'react';
import b_ from 'b_';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import FancyPicture from './FancyPicture';
import AuthButtons from './AuthButtons';

import './Home.css';

import userStore from '../../stores/user-store';

const b = b_.with('home');

class Home extends React.Component {
    static renderHomeButton() {
        return (
            userStore.role === 'teacher' ? (
                <Link to="/groups" className={b('link')}>Группы</Link>
            ) : (
                <Link to="/game" className={b('link')}>Играть!</Link>
            )
        );
    }

    render() {
        return (
            <main className={classNames(b(), 'container')}>
                <div className={b('info')}>
                    <h1 className={classNames(b('heading'))}>Numbers!</h1>
                    <h4 className={classNames(b('side-heading'))}>Новая игра-тренажер</h4>
                    <p className={b('description')}>
                        Разнообразный и богатый опыт дальнейшее развитие различных
                        форм деятельности в значительной степени обуславливает создание
                        существенных финансовых и административных условий.
                    </p>
                    {
                        userStore.role === 'guest' ? (
                            <AuthButtons/>
                        ) : (
                            Home.renderHomeButton()
                        )
                    }
                </div>
                <FancyPicture className={b('fancy-picture')}/>
            </main>
        );
    }
}

export default Home;
