import React from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';
import classNames from 'classnames';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Button from '../Button';
import Input from '../Input';

import './GameBoard.css';

const b = b_.with('game-board');

@observer
class GameBoard extends React.Component {
    constructor() {
        super();

        this.state = {
            state: 'initial',
            givenAnswer: 'no'
        };
    }

    componentDidMount() {
        this.init();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        clearTimeout(this.timeout);
    }

    @observable current = -1;

    next = () => {
        this.current += 1;
        this.interval = setTimeout(() => {
            if (this.current < this.props.list.length - 1) {
                this.next();
            } else {
                clearTimeout(this.interval);
                this.end();
            }
        }, this.props.options.speed * 1000);
    };

    init = () => {
        this.timeout = setTimeout(() => {
            this.setState({
                state: 'playing'
            }, this.next);
        }, 3000);
    };

    end = () => {
        this.setState({
            state: 'end'
        });
    };

    answerCheck = () => {
        const { answer, list, onAnswerSend } = this.props;

        if (!answer) {
            return;
        }

        const sum = list.reduce((p, n) => p + n, 0);

        this.setState({
            givenAnswer: sum === Number(answer)
        }, onAnswerSend);
    };
    // eslint-disable-next-line
    renderAnswerForm() {
        const { onAnswerInput, answer } = this.props;
        const { givenAnswer } = this.state;
        const displayedResult = givenAnswer ? 'Верно!' : 'Ошибка!';

        return (
            <div className={b('form')} key="form">
                <h2 className={b('form-heading')}>Введите ответ</h2>
                <Input
                    type="text"
                    onChange={onAnswerInput}
                    value={givenAnswer === 'no' ? answer : displayedResult}
                    className={b('input', {
                        success: givenAnswer === true,
                        failure: !givenAnswer,
                        disabled: givenAnswer !== 'no'
                    })}
                />
                <Button
                    onClick={this.answerCheck}
                    className={b('button')}
                    theme="dark"
                    disabled={givenAnswer !== 'no'}
                >
                    Проверить
                </Button>
            </div>
        );
    }

    render() {
        const { onClose, list, options } = this.props;
        const { state } = this.state;

        return (
            <section className={b()}>
                <h1 className={classNames(b('heading'), 'header_main')}>Numbers!</h1>
                <ReactCSSTransitionGroup
                    transitionName="form"
                    transitionAppearTimeout={500}
                    transitionLeave={false}
                >
                    {state !== 'end' ? (
                        <div
                            className={b('number', { animated: state === 'playing' })}
                            style={{ animationDuration: `${options.speed}s` }}
                            key="counter"
                        >
                            {state === 'initial' && 'Вперед!'}
                            {state === 'playing' && list[this.current]}
                        </div>
                    ) : (
                        this.renderAnswerForm()
                    )}
                </ReactCSSTransitionGroup>
                <div className={b('buttons')}>
                    <Button
                        className={b('button')}
                        theme="dark"
                        onClick={onClose}
                    >
                        Закрыть
                    </Button>
                </div>
            </section>
        );
    }
}

GameBoard.propTypes = {
    list: PropTypes.arrayOf(PropTypes.number).isRequired,
    options: PropTypes.shape({
        options: PropTypes.object,
        speed: PropTypes.number,
        capacity: PropTypes.number,
        quantity: PropTypes.number
    }).isRequired,
    onClose: PropTypes.func.isRequired,
    onAnswerInput: PropTypes.func.isRequired,
    onAnswerSend: PropTypes.func.isRequired,
    answer: PropTypes.string.isRequired
};

export default GameBoard;
