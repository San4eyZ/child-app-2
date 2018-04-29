import React from 'react';
import b_ from 'b_';
// import classNames from 'classnames';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import Container from '../Container';
// import GameSettings from '../GameSettings';
// import GameBoard from '../GameBoard';
// import Button from '../Button';

import './Game.css';

const b = b_.with('game');

const state = observable.object({
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
    // constructor() {
    //     super();
    //
    //     this.state = {
    //         options: {
    //             '0_1': false,
    //             '0_2': false,
    //             '0_3': false,
    //             '0_4': false,
    //             '0_5': false,
    //             '0_6': false,
    //             '0_7': false,
    //             '0_8': false,
    //             '1_0': false,
    //             '1_1': false,
    //             '1_2': false,
    //             '1_3': false,
    //             '2_0': false,
    //             '2_1': false,
    //             '2_2': false,
    //             '2_3': false,
    //             '2_4': false,
    //             '2_5': false,
    //             '2_6': false,
    //             '2_7': false,
    //             '2_8': false,
    //             '3_5': false,
    //             '3_6': false,
    //             '3_7': false,
    //             '3_8': false
    //         },
    //         speed: 1,
    //         capacity: 2,
    //         quantity: 3
    //     };
    // }

    @action onRangeChange = prop => (prev) => {
        const value = Number(prev.value);

        state[prop] = prop === 'speed' ? Number((value / 10).toFixed(1)) : value;
        // this.setState({
        //     [prop]: prop === 'speed' ? Number((value / 10).toFixed(1)) : value
        // });
    };

    @action onOptionChange = (event) => {
        const { id } = event.target;

        state.options[id] = !state.options[id];
        // this.setState((prev) => {
        //     const { options, capacity, quantity, speed } = prev;
        //     options[id] = !options[id];
        //
        //     return { options, speed, capacity, quantity };
        // });
    };

    render() {
        return (
            <Container className={b()} main>
                {/* <h1 className={classNames(b('heading'), 'header_main')}>Игровое поле</h1> */}
                {/* <GameSettings */}
                {/* state={state} */}
                {/* onOptionChange={this.onOptionChange} */}
                {/* onRangeChange={this.onRangeChange} */}
                {/* /> */}
                {/* <GameBoard/> */}
                {/* <Button className={b('button')} theme="dark">Начать игру</Button> */}
            </Container>
        );
    }
}

export default Game;
