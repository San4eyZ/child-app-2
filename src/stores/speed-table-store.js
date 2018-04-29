import { observable, computed, action, runInAction } from 'mobx';

import speedData from '../fixtures/speedTable.json';

class SpeedStore {
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

        const request = await fetch(`${window.location.origin}/rating/speed`);

        if (request.status === 200) {
            // let data = await request.json();

            setTimeout(action(() => {
                this.data = speedData;
                this.state = 'loaded';
            }), 200);

            return;
        }

        runInAction(() => {
            this.state = 'error';
        });
    };
}

export default new SpeedStore();
