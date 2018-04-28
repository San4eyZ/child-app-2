import React from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';
import classNames from 'classnames';

import './FancyPicture.css';
import pc from '../../../assets/images/pc-template.png';
import alien1 from '../../../assets/images/alien-1.png';
import alien2 from '../../../assets/images/alien-2.png';
import alien3 from '../../../assets/images/alien-3.png';

const b = b_.with('fancy-picture');

const FancyPicture = ({ className }) => (
    <div className={classNames(b(), className)}>
        <img src={pc} alt="Комп" className={b('pc')}/>
        <img src={alien1} alt="Пришелец" className={b('alien')}/>
        <img src={alien2} alt="Пришелец" className={b('alien')}/>
        <img src={alien3} alt="Пришелец" className={b('alien')}/>
    </div>
);

FancyPicture.propTypes = {
    className: PropTypes.string
};

FancyPicture.defaultProps = {
    className: ''
};

export default FancyPicture;
