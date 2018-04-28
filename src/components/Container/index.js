import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className }) => (
    <section className={className}>
        <div className="container">
            {children}
        </div>
    </section>
);

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

Container.defaultProps = {
    className: ''
};

export default Container;
