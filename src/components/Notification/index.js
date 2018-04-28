import React from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';
import classNames from 'classnames';

import './Notification.css';

const b = b_.with('notification');

const bgColors = {
    success: '#dff2bf',
    failure: '#ffbaba',
    warning: '#bde5f8',
    confirm: '#ffae7e'
};

const colors = {
    success: '#4f8a10',
    failure: '#d6010e',
    warning: '#00529b',
    confirm: '#4a2359'
};

const types = {
    warning: 'warning',
    success: 'success',
    failure: 'failure',
    confirm: 'confirm'
};

class Notification extends React.Component {
    handleConfirm = () => {
        this.props.confirmHandler();
        this.props.closeHandler();
    };

    render() {
        const { message, type, closeHandler, className } = this.props;
        const styles = {
            backgroundColor: bgColors[type],
            color: colors[type]
        };

        return (
            <div className={classNames(b(), className)} style={styles}>
                <div className={b('message')}>
                    {message}
                </div>
                <div className={b('buttons')}>
                    {
                        type === 'confirm' &&
                        <button
                            className={b('button', { theme: type })}
                            onClick={this.handleConfirm}
                        >
                            Да
                        </button>
                    }
                    <button
                        className={b('button', { theme: type })}
                        onClick={closeHandler}
                    >
                        Закрыть
                    </button>
                </div>
            </div>
        );
    }
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.keys(types)).isRequired,
    closeHandler: PropTypes.func.isRequired,
    confirmHandler: PropTypes.func,
    className: PropTypes.string
};

Notification.defaultProps = {
    confirmHandler: () => {},
    className: ''
};

export default Notification;
