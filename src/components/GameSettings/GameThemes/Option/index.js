import React from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';
import classNames from 'classnames';
import { observer } from 'mobx-react';

import './Option.css';

const b = b_.with('option');

@observer
class Option extends React.Component {
    render() {
        const { id, className, onChange, val, state } = this.props;

        return (
            <React.Fragment>
                <input
                    type="checkbox"
                    id={id}
                    onChange={onChange}
                    className={classNames(b())}
                    checked={state.options[id]}
                />
                <label
                    htmlFor={id}
                    className={classNames(b('label'), className)}
                >
                    {val}
                </label>
            </React.Fragment>
        );
    }
}

Option.propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    val: PropTypes.number.isRequired,
    state: PropTypes.shape({
        options: PropTypes.object,
        speed: PropTypes.number,
        capacity: PropTypes.number,
        quantity: PropTypes.number
    }).isRequired
};

Option.defaultProps = {
    className: ''
};

export default Option;
