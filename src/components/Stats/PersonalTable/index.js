import React from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';
import classNames from 'classnames';
import { observer } from 'mobx-react';

import LoaderPage from '../../LoaderPage';

import './PersonalTable.css';

const b = b_.with('personal-table');

@observer
class PersonalTable extends React.Component {
    render() {
        const { store, className } = this.props;

        return (
            store.isFetching ? (
                <LoaderPage theme="light"/>
            ) : (
                <table className={classNames(b(), className)}>
                    <thead>
                        <tr className={b('row')}>
                            <th className={b('head')}>№</th>
                            <th className={b('head')}>Результат</th>
                            <th className={b('head')}>Тема</th>
                            <th className={b('head')}>Скорость</th>
                            <th className={b('head')}>Разрядность</th>
                            <th className={b('head')}>Количество</th>
                        </tr>
                    </thead>
                    <tbody>
                        {store.data.map(({ success, theme, speed, capacity, quantity }, index) => (
                            // eslint-disable-next-line
                            <tr key={index} className={b('row')}>
                                <td className={b('data')}>{index + 1}</td>
                                <td className={b('data', { success, failure: !success })}>
                                    {success ? 'Успех' : 'Неудача'}
                                </td>
                                <td className={b('data')}>{theme}</td>
                                <td className={b('data')}>{speed}</td>
                                <td className={b('data')}>{capacity}</td>
                                <td className={b('data')}>{quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
        );
    }
}

PersonalTable.propTypes = {
    // eslint-disable-next-line
    store: PropTypes.object.isRequired,
    className: PropTypes.string
};

PersonalTable.defaultProps = {
    className: ''
};

export default PersonalTable;
