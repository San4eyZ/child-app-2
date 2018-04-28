import notificationStore from '../stores/notification-store';

let id = 0;

class NotificationModel {
    constructor(message, type, confirmHandler) {
        // eslint-disable-next-line
        this.id = id++;
        this.message = message;
        this.type = type;
        this.closeHandler = this.hide;
        this.confirmHandler = confirmHandler;
    }

    show = () => {
        notificationStore.add(this);
    };

    hide = () => {
        notificationStore.removeById(this.id);
    };
}

export default NotificationModel;
