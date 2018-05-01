import { observable, computed, action, runInAction } from 'mobx';

// import process from '../utils/game-data-processor';
// import Notification from '../models/notification';

class GameStore {
    @observable list;
    @observable state = 'initial';

    @computed get isFetching() {
        return this.state === 'loading';
    }

    @action fetchList = async (/* gameData */) => {
        if (this.isFetching || this.list) {
            return;
        }

        this.state = 'loading';

        // const response = await fetch(`${window.location.origin}/generator`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify(process(gameData)),
        //     credentials: 'include'
        // });

        // if (response.status === 200) {
        if (this.state === 'loading') {
            // const list = response.json();
            // TODO прием результата

            setTimeout(action(() => {
                this.list = [1, 2, 3, 4, 5];
                this.state = 'loaded';
            }), 200);

            return;
        }
        //
        // (new Notification(`Произошла ошибка при загрузке данных: ${response.status}`, 'failure'))
        //     .show();

        runInAction(() => {
            this.state = 'initial';
        });
    };

    @action reload = (gameData) => {
        if (this.isFetching) {
            return;
        }

        this.clear();
        this.fetchList(gameData);
    };

    @action clear = () => {
        this.state = 'initial';
        this.list = undefined;
    };
}

export default GameStore;
