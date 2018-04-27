import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './CrossButton.css';

class CrossButton extends React.Component {
    render() {
        const { className, onClick } = this.props;

        return (
            <button className={classNames('cross-button', className)} onClick={onClick}/>
        );
    }
}

CrossButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
};

CrossButton.defaultProps = {
    className: ''
};

export default CrossButton;
