import { observable, computed, action, runInAction } from 'mobx';

import globalData from '../fixtures/globalTable.json';

class GlobalStore {
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

        const request = await fetch(`${window.location.origin}/rating/global`);

        if (request.status === 200) {
            // let data = await request.json();

            setTimeout(action(() => {
                this.data = globalData;
                this.state = 'loaded';
            }), 200);

            return;
        }

        runInAction(() => {
            this.state = 'error';
        });
    };
}

export default new GlobalStore();
