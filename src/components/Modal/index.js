import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import b_ from 'b_';

import { Overlay } from '../../components';
import CrossButton from '../CrossButton';

import './Modal.css';

const b = b_.with('modal');

class Modal extends React.Component {
    componentDidMount() {
        window.addEventListener('keydown', this.onEscPress);
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onEscPress);
        document.body.style.overflow = '';
    }

    onEscPress = (event) => {
        if (event.key === 'Escape') {
            this.props.closeHandler();
        }
    };

    render() {
        const { closeHandler, className, zIndex, children } = this.props;

        return (
            <React.Fragment>
                <section
                    className={classNames(b(), className)}
                    style={{ zIndex: zIndex + 1 }}
                >
                    {children}
                    <CrossButton onClick={closeHandler} className={b('close-btn')}/>
                    <Overlay zIndex={-1} className={b('overlay')}/>
                </section>
            </React.Fragment>
        );
    }
}

Modal.propTypes = {
    closeHandler: PropTypes.func.isRequired,
    className: PropTypes.string,
    zIndex: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired
};

Modal.defaultProps = {
    className: ''
};

export default Modal;
