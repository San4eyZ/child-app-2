import { observable, action } from 'mobx';

class UiStore {
    @observable displays = {
        login: false,
        register: false,
        reset: false
    };

    @action toggleModal = name => () => {
        this.displays[name] = !this.displays[name];
    };

    @action changeModal = (from, to) => () => {
        this.toggleModal(from)();
        this.toggleModal(to)();
    };
}

export default new UiStore();
