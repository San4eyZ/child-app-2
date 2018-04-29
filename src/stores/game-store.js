import { observable, computed, action, runInAction } from 'mobx';

import process from '../utils/game-data-processor';
import Notification from '../models/notification';

class GameStore {
    @observable list;
    @observable state = 'initial';

    @computed get isFetching() {
        return this.state === 'loading';
    }

    @action fetchList = async (gameData) => {
        if (this.isFetching || this.list) {
            return;
        }

        this.state = 'loading';

        const response = await fetch({
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(process(gameData)),
            credentials: 'include'
        });

        if (response.status === 200) {
            const list = response.json();

            runInAction(() => {
                this.list = list;
                this.state = 'loaded';
            });

            return;
        }

        (new Notification(`Произошла ошибка при загрузке данных: ${response.status}`, 'failure'))
            .show();

        runInAction(() => {
            this.state = 'initial';
        });
    }
}

export default new GameStore();
