import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import b_ from 'b_';

import './Logo.css';

const b = b_.with('logo');

class Logo extends React.Component {
    render() {
        return (
            <div className={`${b()} ${this.props.className}`}>
                <Link to="/" className={b('name')}>Numbers!</Link>
            </div>
        );
    }
}

Logo.propTypes = {
    className: PropTypes.string
};

Logo.defaultProps = {
    className: ''
};

export default Logo;
