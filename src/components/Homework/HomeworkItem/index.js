import React from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';
import classNames from 'classnames';

import Button from '../../Button';

import './HomeworkItem.css';

const b = b_.with('homework-item');

class HomeworkItem extends React.Component {
    constructor() {
        super();

        this.state = {
            isInfoShown: false
        };
    }

    toggleInfo = () => {
        this.setState(prev => ({
            isInfoShown: !prev.isInfoShown
        }));
    };

    render() {
        const { className, name, capacity, speed, onStart, theme, history } = this.props;
        const { isInfoShown } = this.state;

        return (
            <li className={classNames(b(), className)}>
                <h2 className={b('heading')} onClick={this.toggleInfo}>{name}</h2>
                {
                    isInfoShown &&
                    <div className={b('info')}>
                        <div className={b('field')}>
                            <span className={b('name')}>Тема: </span>
                            <span className={b('amount')}>{theme}</span>
                        </div>
                        <div className={b('field')}>
                            <span className={b('name')}>Разрядность: </span>
                            <span className={b('amount')}>{capacity}</span>
                        </div>
                        <div className={b('field')}>
                            <span className={b('name')}>Скорость: </span>
                            <span className={b('amount')}>{speed} сек</span>
                        </div>
                        <React.Fragment>
                            {!history &&
                            <Button className={b('button')} onClick={onStart} theme="dark">
                                Выполнить
                            </Button>}
                        </React.Fragment>
                    </div>
                }
            </li>
        );
    }
}

HomeworkItem.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
    onStart: PropTypes.func,
    theme: PropTypes.string.isRequired,
    history: PropTypes.bool
};

HomeworkItem.defaultProps = {
    className: '',
    history: false,
    onStart: () => {}
};

export default HomeworkItem;
