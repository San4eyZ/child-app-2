import React from 'react';
import b_ from 'b_';
import classNames from 'classnames';
import { Route, Switch } from 'react-router-dom';

import PersonalTable from './PersonalTable';
import GlobalTable from './GlobalTable';
import SpeedTable from './SpeedTable';
import Container from '../Container';
import Switcher from '../Switcher';

import './Stats.css';

const b = b_.with('stats');

class Stats extends React.Component {
    render() {
        const options = [
            {
                path: '/stats',
                title: 'Личная'
            },
            {
                path: '/stats/global',
                title: 'Общая'
            },
            {
                path: '/stats/global/speed',
                title: 'Топ быстрых'
            }
        ];

        return (
            <Container className={b()} main>
                <h1 className={classNames(b('heading'), 'header_main')}>Статистика</h1>
                <Switcher options={options} className={b('switcher')}/>
                <div className={b('table-holder')}>
                    <Switch>
                        <Route
                            exact
                            path="/stats"
                            render={() => (
                                <PersonalTable className={b('personal-table')}/>
                            )}
                        />
                        <Route
                            exact
                            path="/stats/global"
                            render={() => (
                                <GlobalTable className={b('global-table')}/>
                            )}
                        />
                        <Route
                            exact
                            path="/stats/global/speed"
                            render={() => (
                                <SpeedTable className={b('speed-table')}/>
                            )}
                        />
                    </Switch>
                </div>
            </Container>
        );
    }
}

Stats.propTypes = {};

export default Stats;
