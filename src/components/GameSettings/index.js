import React from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';
import classNames from 'classnames';

import Range from 'react-simple-range';
import GameThemes from './GameThemes';

import './GameSettings.css';

const b = b_.with('game-settings');

class GameSettings extends React.Component {
    render() {
        const { state, onRangeChange, onOptionChange, className } = this.props;

        return (
            <section className={classNames(b(), className)}>
                <h1 className={classNames(b('heading'), 'header1')}>Настройки</h1>
                <p className={b('label')}>
                    Выберите тему:
                </p>
                <GameThemes state={state} onChange={onOptionChange}/>
                <p className={b('label')}>
                    Настройте интервал: {state.speed} сек
                </p>
                <div className={b('range-holder')}>
                    <Range
                        step={1}
                        min={5}
                        max={50}
                        onChange={onRangeChange('speed')}
                        value={state.speed * 10}
                        sliderSize={10}
                        sliderColor="#d593c2"
                        trackColor="#803e6d"
                        thumbColor="#803e6d"
                    />
                </div>
                <p className={b('label')}>
                    Настройте разрядность чисел: {state.capacity}
                </p>
                <div className={b('range-holder')}>
                    <Range
                        step={1}
                        min={1}
                        max={5}
                        onChange={onRangeChange('capacity')}
                        value={state.capacity}
                        sliderSize={10}
                        sliderColor="#d593c2"
                        trackColor="#803e6d"
                        thumbColor="#803e6d"
                    />
                </div>
                <p className={b('label')}>
                    Настройте количество чисел: {state.quantity}
                </p>
                <div className={b('range-holder')}>
                    <Range
                        step={1}
                        min={1}
                        max={50}
                        onChange={onRangeChange('quantity')}
                        value={state.quantity}
                        sliderSize={10}
                        sliderColor="#d593c2"
                        trackColor="#803e6d"
                        thumbColor="#803e6d"
                    />
                </div>
            </section>
        );
    }
}

GameSettings.propTypes = {
    state: PropTypes.shape({
        options: PropTypes.object,
        speed: PropTypes.number,
        capacity: PropTypes.number,
        quantity: PropTypes.number
    }).isRequired,
    onOptionChange: PropTypes.func.isRequired,
    onRangeChange: PropTypes.func.isRequired,
    className: PropTypes.string
};

GameSettings.defaultProps = {
    className: ''
};

export default GameSettings;
