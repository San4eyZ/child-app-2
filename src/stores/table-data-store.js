import { observable, computed, action, runInAction } from 'mobx';
import Notification from '../models/notification';

class TableDataStore {
    constructor(url, data) {
        this.url = url;
        this.d = data;
    }

    @observable data;
    @observable state = 'initial';

    @computed get isFetching() {
        return this.state === 'loading';
    }

    @action fetchData = async () => {
        if (this.isFetching || this.data) {
            return;
        }

        this.state = 'loading';

        const response = await fetch(this.url, { credentials: 'include' });

        if (response.status === 200) {
            // let data = await request.json();

            setTimeout(action(() => {
                // eslint-disable-next-line
                this.data = this.d;
                this.state = 'loaded';
            }), 200);

            return;
        }

        (new Notification(`Произошла ошибка при загрузке данных: ${response.status}`, 'failure'))
            .show();

        runInAction(() => {
            this.state = 'error';
        });
    };
}

export default TableDataStore;
