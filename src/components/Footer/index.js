import React from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';
import classNames from 'classnames';

import './Footer.css';

const b = b_.with('footer');

class Footer extends React.Component {
    render() {
        return (
            <footer className={classNames(b(), this.props.className)}>
                <div className={classNames(b('tagline'), 'container')}>
                    <span className={b('link')}>Развивайтесь<br/>играя</span>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {
    className: PropTypes.string
};

Footer.defaultProps = {
    className: ''
};

export default Footer;
