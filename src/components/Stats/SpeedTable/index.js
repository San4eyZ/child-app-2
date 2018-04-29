import React from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';
import classNames from 'classnames';
import { observer } from 'mobx-react';

import LoaderPage from '../../LoaderPage';

import './SpeedTable.css';

import speedStore from '../../../stores/speed-table-store';

const b = b_.with('speed-table');

@observer
class GlobalTable extends React.Component {
    componentWillMount() {
        speedStore.fetchData();
    }

    render() {
        const { className } = this.props;

        return (
            speedStore.isFetching ? (
                <LoaderPage theme="light"/>
            ) : (
                <table className={classNames(b(), className)}>
                    <thead>
                        <tr className={b('row')}>
                            <th className={b('head')}>№</th>
                            <th className={b('head')}>Имя</th>
                            <th className={b('head')}>Скорость</th>
                        </tr>
                    </thead>
                    <tbody>
                        {speedStore.data.map(({ name, speed }, index) => (
                            // eslint-disable-next-line
                            <tr key={index} className={b('row')}>
                                <td className={b('data')}>{index + 1}</td>
                                <td className={b('data')}>{name}</td>
                                <td className={b('data')}>{speed}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
        );
    }
}

GlobalTable.propTypes = {
    className: PropTypes.string
};

GlobalTable.defaultProps = {
    className: ''
};

export default GlobalTable;
