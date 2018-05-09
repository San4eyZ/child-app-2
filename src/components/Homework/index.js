import React from 'react';
import b_ from 'b_';
import classNames from 'classnames';
import { observer } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';

import Switcher from '../Switcher';
import Container from '../Container';
import HomeworkItem from './HomeworkItem';
import LoaderPage from '../LoaderPage';
import GameBoard from '../GameBoard';

import './Homework.css';

import homeworkStore from '../../stores/homework-store';
import Notification from '../../models/notification';

const b = b_.with('homework');

const HomeworkList = observer(({ startGame }) => (
    <React.Fragment>
        <h1 className={classNames(b('heading'), 'header_main')}>Домашка</h1>
        {homeworkStore.isFetching ? (
            <LoaderPage theme="light"/>
        ) : (
            <ul className={b('list')}>
                {homeworkStore.list ? (
                    homeworkStore.list
                        .map(({ id, name, theme, capacity, collection, speed }) => (
                            <HomeworkItem
                                className={b('item')}
                                key={id}
                                name={name}
                                capacity={capacity}
                                speed={speed}
                                theme={theme}
                                onStart={() => {
                                    startGame(collection, speed, id);
                                }}
                            />
                        ))
                ) : (
                    <div className={b('error')}>Произошла ошибка при загрузке данных</div>
                )}
            </ul>
        )}
    </React.Fragment>
));

const HistoryList = observer(() => (
    <React.Fragment>
        <h1 className={classNames(b('heading'), 'header_main')}>История</h1>
        <ul className={b('list')}>
            {homeworkStore.history ? (
                homeworkStore.history
                    .map(({ id, name, theme, capacity, speed }) => (
                        <HomeworkItem
                            className={b('item')}
                            key={id}
                            name={name}
                            capacity={capacity}
                            speed={speed}
                            theme={theme}
                            history
                        />
                    ))
            ) : (
                <div className={b('error')}>Произошла ошибка при загрузке данных</div>
            )}
        </ul>
    </React.Fragment>
));

// eslint-disable-next-line
const History = observer(() => homeworkStore.isFetching ? (
    <LoaderPage theme="light"/>
) : (
    <HistoryList/>
));

@observer
class Homework extends React.Component {
    constructor() {
        super();

        this.state = {
            currentList: undefined,
            currentSpeed: undefined,
            currentId: undefined,
            displayBoard: false,
            answer: ''
        };
    }

    componentDidMount() {
        homeworkStore.fetchHomework();
    }

    onAnswerInput = (event) => {
        const { value } = event.target;
        if (Number.isNaN(Number(value))) {
            return;
        }

        this.setState({
            answer: value
        });
    };

    onAnswerSend = () => {
        const { currentId, answer, currentList } = this.state;
        const result = Number(answer) === currentList.reduce((p, c) => p + c, 0);

        homeworkStore.sendResult({ currentId, result })
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }

                throw new Error(`Произошла ошибка при отправке результата. Код ошибки: ${response.status}`);
            })
            .then(() => {
                homeworkStore.moveToHistory(currentId);
            })
            .catch((err) => {
                new Notification(err.message, 'failure').show();
            });
    };

    clearState = () => {
        this.setState({
            currentList: undefined,
            currentSpeed: undefined,
            currentId: undefined,
            displayBoard: false,
            answer: ''
        });
    };

    startGame = (list, speed, id) => {
        this.setState({
            currentList: list,
            currentSpeed: speed,
            currentId: id,
            displayBoard: true
        });
    };

    renderMain = () => {
        const { displayBoard, currentList, currentSpeed, answer } = this.state;

        return (
            displayBoard ? (
                <GameBoard
                    list={[...currentList]}
                    speed={currentSpeed}
                    onClose={this.clearState}
                    onAnswerInput={this.onAnswerInput}
                    onAnswerSend={this.onAnswerSend}
                    answer={answer}
                />
            ) : (
                <HomeworkList startGame={this.startGame}/>
            )
        );
    };

    render() {
        const options = [
            {
                title: 'Не выполненные',
                path: '/homework'
            },
            {
                title: 'Выполненные',
                path: '/homework/history'
            }
        ];
        const { displayBoard } = this.state;

        return (
            <Container className={classNames(b(), '_theme_main')}>
                {!displayBoard && <Switcher options={options}/>}
                <Switch>
                    <Route exact path="/homework" render={this.renderMain}/>
                    <Route path="/homework/history" component={History}/>
                </Switch>
            </Container>
        );
    }
}

export default Homework;
