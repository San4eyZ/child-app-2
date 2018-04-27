import React from 'react';
import PropTypes from 'prop-types';
import './Overlay.css';

class Overlay extends React.Component {
    render() {
        const { className, zIndex, opacity } = this.props;

        return (
            <div
                className={`overlay ${className}`}
                style={{ zIndex, background: `rgba(74,35,89,${opacity})` }}
            />
        );
    }
}

Overlay.propTypes = {
    className: PropTypes.string,
    zIndex: PropTypes.number.isRequired,
    opacity: PropTypes.number
};

Overlay.defaultProps = {
    className: '',
    opacity: 1
};

export default Overlay;
