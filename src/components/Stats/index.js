import React from 'react';
import b_ from 'b_';
import classNames from 'classnames';
import { Route, Switch } from 'react-router-dom';

import PersonalTable from './PersonalTable';
import GlobalTable from './GlobalTable';
import SpeedTable from './SpeedTable';
import Container from '../Container';
import Switcher from '../Switcher';

import DataStore from '../../stores/data-store';

import personalData from '../../fixtures/personalTable.json';
import globalData from '../../fixtures/globalTable.json';
import speedData from '../../fixtures/speedTable.json';

import './Stats.css';

const b = b_.with('stats');
// const personalStore = new DataStore(`${window.location.origin}/rating/personal`);
// const globalStore = new DataStore(`${window.location.origin}/rating/global`);
// const speedStore = new DataStore(`${window.location.origin}/rating/speed`);

const personalStore = new DataStore('../fixtures/personalTable.json', personalData);
const globalStore = new DataStore('../fixtures/globalTable.json', globalData);
const speedStore = new DataStore('../fixtures/speedTable.json', speedData);

class Stats extends React.Component {
    componentWillMount() {
        personalStore.fetchData();
        globalStore.fetchData();
        speedStore.fetchData();
    }

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
                                <PersonalTable store={personalStore} className={b('personal-table')}/>
                            )}
                        />
                        <Route
                            exact
                            path="/stats/global"
                            render={() => (
                                <GlobalTable store={globalStore} className={b('global-table')}/>
                            )}
                        />
                        <Route
                            exact
                            path="/stats/global/speed"
                            render={() => (
                                <SpeedTable store={speedStore} className={b('speed-table')}/>
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
