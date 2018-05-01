import React from 'react';
import b_ from 'b_';
import classNames from 'classnames';

import Container from '../Container';
import HomeworkItem from './HomeworkItem';

import './Homework.css';

const b = b_.with('homework');

class Homework extends React.Component {
    render() {
        return (
            <Container className={classNames(b(), '_theme_main')}>
                <h1 className={classNames(b('heading'), 'header_main')}>Домашка</h1>
                <ul className={b('list')}>
                    <HomeworkItem name="Первая работа" capacity={1} speed={1} onStart={() => {}} theme="Друг"/>
                </ul>
            </Container>
        );
    }
}

export default Homework;
