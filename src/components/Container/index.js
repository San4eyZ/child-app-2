import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className, main }) => (
    <section className={`${className} ${main ? '_theme_main' : ''}`}>
        <div className="container">
            {children}
        </div>
    </section>
);

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    main: PropTypes.bool
};

Container.defaultProps = {
    className: '',
    main: false
};

export default Container;
