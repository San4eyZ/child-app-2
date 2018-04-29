import { observable, computed, action, runInAction } from 'mobx';

const allowedRoles = ['student', 'teacher', 'guest', 'admin'];

class UserStore {
    @observable state = 'initial';
    @observable user;

    @computed get isFetching() {
        return this.state === 'loading';
    }

    @computed get role() {
        if (!this.user) {
            return 'guest';
        }

        if (allowedRoles.indexOf(this.user.role) !== -1) {
            return this.user.role;
        }

        return 'guest';
    }

    @action initialAuth = async () => {
        if (this.isFetching || this.user) {
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
                        email: 'example@mail.ru',
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
    };

    @action logOut = () => {
        this.state = 'unauthorized';
        this.user = undefined;
    }
}

export default new UserStore();
