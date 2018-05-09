import { observable, computed, action, runInAction } from 'mobx';
import Notification from '../models/notification';

import homework from '../fixtures/homeworkList.json';

class HomeworkStore {
    @observable list;
    @observable history;
    @observable state = 'loading';

    @computed get isFetching() {
        return this.state === 'loading';
    }

    @action fetchHomework = async () => {
        this.state = 'loading';

        let response;

        try {
            response = await fetch(`${window.location.origin}/homework`, { credentials: 'include' });

            if (response.status === 200) {
                // let data = await request.json();
                // TODO прием результата

                setTimeout(action(() => {
                    // eslint-disable-next-line
                    this.list = homework.list;
                    this.history = homework.history;
                    this.state = 'loaded';
                }), 200);

                return;
            }

            (new Notification(`Произошла ошибка при загрузке домашек. Код ошибки: ${response.status}`, 'failure'))
                .show();

            runInAction(() => {
                this.state = 'error';
            });
        } catch (e) {
            (new Notification(`Произошла ошибка при загрузке домашек. Код ошибки: ${response.status}`, 'failure'))
                .show();

            runInAction(() => {
                this.state = 'error';
            });
        }
    };

    @action moveToHistory = (id) => {
        const index = this.list.findIndex(hw => hw.id === id);
        const targetTask = this.list[index];

        this.history.push({
            id: targetTask.id,
            name: targetTask.name,
            theme: targetTask.theme,
            speed: targetTask.speed,
            capacity: targetTask.capacity
        });

        this.list.splice(index, 1);
    };

    sendResult = ({ id, result }) =>
        fetch(`${window.location.origin}/homework/result`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ id, result }),
            credentials: 'include'
        });
}

export default new HomeworkStore();
