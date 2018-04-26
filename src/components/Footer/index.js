import React from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';

import './Footer.css';

const b = b_.with('footer');

class Footer extends React.Component {
    render() {
        return (
            <footer className={b()}>
                <div className={`${b('tagline')} container`}>
                    <span className={b('link')}>Развивайтесь<br/>играя</span>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {};

export default Footer;
