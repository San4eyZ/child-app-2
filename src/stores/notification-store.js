import { action, computed, observable } from 'mobx';

class NotificationStore {
    @observable notifications = [];

    @computed get isEmpty() {
        return this.notifications.length === 0;
    }

    @action add = (notification) => {
        this.notifications.push(notification);
    };

    @action removeTop = () => {
        this.notifications.pop();
    };

    @action removeById = (id) => {
        const index = this.notifications.findIndex(n => n.id === id);
        this.notifications.splice(index, 1);
    };

    @action clear = () => {
        this.notifications = [];
    }
}

export default new NotificationStore();
