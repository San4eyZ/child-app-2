import { observable, computed, action, runInAction } from 'mobx';

class UserStore {
    @observable state = 'initial';
    @observable user;

    @computed get isFetching() {
        return this.state === 'loading';
    }

    @computed get isAuthorized() {
        return this.state === 'authorized';
    }

    @computed get role() {
        return this.user && this.user.role;
    }

    @action initialAuth = async () => {
        if (this.isFetching) {
            return;
        }

        this.state = 'loading';

        // let user;

        try {
            const request = await fetch(`${window.location.origin}`);

            if (request.status === 200) {
                // user = await request.json();

                runInAction(() => {
                    this.user = {
                        id: 1,
                        firstName: 'Вася',
                        lastName: 'Пупкин',
                        role: 'student'
                    };
                    this.state = 'authorized';
                });

                return;
            }

            runInAction(() => {
                this.state = 'unauthorized';
            });
        } catch (e) {
            runInAction(() => {
                this.state = 'unauthorized';
            });
        }
    }
}

export default new UserStore();
