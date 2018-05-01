import React from 'react';
import b_ from 'b_';
import classNames from 'classnames';
import { observer } from 'mobx-react';

import Container from '../Container';
import HomeworkItem from './HomeworkItem';
import LoaderPage from '../LoaderPage';
import GameBoard from '../GameBoard';

import './Homework.css';

import homeworkStore from '../../stores/homework-store';
import Notification from '../../models/notification';

const b = b_.with('homework');

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

    render() {
        const { displayBoard, currentList, currentSpeed, answer } = this.state;

        return (
            <Container className={classNames(b(), '_theme_main')}>
                {displayBoard ? (
                    <GameBoard
                        list={[...currentList]}
                        speed={currentSpeed}
                        onClose={this.clearState}
                        onAnswerInput={this.onAnswerInput}
                        onAnswerSend={this.onAnswerSend}
                        answer={answer}
                    />
                ) : (
                    <React.Fragment>
                        <h1 className={classNames(b('heading'), 'header_main')}>Домашка</h1>
                        {homeworkStore.isFetching ? (
                            <LoaderPage theme="light"/>
                        ) : (
                            <ul className={b('list')}>
                                {homeworkStore.list
                                    .map(({ id, name, theme, capacity, collection, speed }) => (
                                        <HomeworkItem
                                            className={b('item')}
                                            key={id}
                                            name={name}
                                            capacity={capacity}
                                            speed={speed}
                                            theme={theme}
                                            onStart={() => {
                                                this.startGame(collection, speed, id);
                                            }}
                                        />
                                    ))}
                            </ul>
                        )}
                    </React.Fragment>
                )}
            </Container>
        );
    }
}

export default Homework;
