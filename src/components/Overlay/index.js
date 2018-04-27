import React from 'react';
import PropTypes from 'prop-types';
import './Overlay.css';

class Overlay extends React.Component {
    componentDidMount() {
        window.addEventListener('keydown', this.onEscPress);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onEscPress);
    }

    onEscPress = (event) => {
        if (event.key === 'Escape') {
            this.props.closeHandler();
        }
    };

    render() {
        return (
            <div
                className={`overlay ${this.props.className}`}
                style={{ zIndex: this.props.zIndex, background: `rgba(74,35,89,${this.props.opacity})` }}
            >
                <button className="overlay__close" onClick={this.props.closeHandler}/>
            </div>
        );
    }
}

Overlay.propTypes = {
    closeHandler: PropTypes.func.isRequired,
    className: PropTypes.string,
    zIndex: PropTypes.number.isRequired,
    opacity: PropTypes.number
};

Overlay.defaultProps = {
    className: '',
    opacity: 1
};

export default Overlay;
