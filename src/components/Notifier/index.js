import React from 'react';
import { observer } from 'mobx-react';
import b_ from 'b_';

import Notification from '../Notification';
import Overlay from '../Overlay';

import './Notifier.css';

import notificationStore from '../../stores/notification-store';

const b = b_.with('notifier');

@observer
class Notifier extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className={b()}>
                    <div className={b('list')}>
                        {notificationStore.notifications.map(n => (
                            <Notification
                                className={b('notification')}
                                key={n.id}
                                message={n.message}
                                type={n.type}
                                closeHandler={n.closeHandler}
                                confirmHandler={n.confirmHandler || (() => {})}
                            />
                        ))}
                    </div>
                </section>
                <Overlay zIndex={200} opacity={0.3} className={b('overlay')}/>
            </React.Fragment>
        );
    }
}

export default Notifier;
