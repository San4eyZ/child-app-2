import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import b from 'b_';

import { Overlay } from '../../components';

import './Modal.css';

class Modal extends React.Component {
    render() {
        const { closeHandler, className, zIndex, children } = this.props;

        return (
            <React.Fragment>
                <section
                    className={classNames('modal', className)}
                    style={{ zIndex: zIndex + 1 }}
                >
                    {children}
                </section>
                <Overlay
                    closeHandler={closeHandler}
                    zIndex={zIndex}
                    className={b(className, 'overlay')}
                />
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
