import React from 'react';
import b_ from 'b_';
import classNames from 'classnames';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import Container from '../Container';
import GameSettings from '../GameSettings';
import GameBoard from '../GameBoard';
import Button from '../Button';
import Preloader from '../Preloader';

import GameStore from '../../stores/game-store';

import './Game.css';

const b = b_.with('game');

const options = observable({
    options: {
        '0_1': false,
        '0_2': false,
        '0_3': false,
        '0_4': false,
        '0_5': false,
        '0_6': false,
        '0_7': false,
        '0_8': false,
        '1_0': false,
        '1_1': false,
        '1_2': false,
        '1_3': false,
        '2_0': false,
        '2_1': false,
        '2_2': false,
        '2_3': false,
        '2_4': false,
        '2_5': false,
        '2_6': false,
        '2_7': false,
        '2_8': false,
        '3_5': false,
        '3_6': false,
        '3_7': false,
        '3_8': false
    },
    speed: 1,
    capacity: 2,
    quantity: 3
});

@observer
class Game extends React.Component {
    // eslint-disable-next-line
    gameStore = new GameStore();
    @observable answer = '';

    onClose = () => {
        this.gameStore.clear();
    };

    onStart = () => {
        this.gameStore.fetchList(options);
    };

    onAnswerInput = (event) => {
        const { value } = event.target;
        if (Number.isNaN(Number(value))) {
            return;
        }

        this.answer = value;
    };

    onAnswerSend = async () => {
        this.answer = '';
        // TODO отправка результата игры
    };

    @action onRangeChange = prop => (prev) => {
        const value = Number(prev.value);

        options[prop] = prop === 'speed' ? Number((value / 10).toFixed(1)) : value;
    };

    @action onOptionChange = (event) => {
        const { id } = event.target;

        options.options[id] = !options.options[id];
    };

    render() {
        return (
            <Container className={b()} main>
                {this.gameStore.state !== 'loaded' ? (
                    <React.Fragment>
                        <h1 className={classNames(b('heading'), 'header_main')}>Игровое поле</h1>
                        <GameSettings
                            state={options}
                            onOptionChange={this.onOptionChange}
                            onRangeChange={this.onRangeChange}
                        />
                        {this.gameStore.isFetching ? (
                            <Preloader theme="dark" size={40} className={b('preloader')}/>
                        ) : (
                            <Button className={b('button')} theme="dark" onClick={this.onStart}>
                                Начать игру
                            </Button>
                        )}
                    </React.Fragment>
                ) : (
                    <GameBoard
                        list={[...this.gameStore.list]}
                        onClose={this.onClose}
                        speed={options.speed}
                        onAnswerInput={this.onAnswerInput}
                        onAnswerSend={this.onAnswerSend}
                        answer={this.answer}
                    />
                )}
            </Container>
        );
    }
}

export default Game;
