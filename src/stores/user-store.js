import { observable, computed, action, runInAction } from 'mobx';

const allowedRoles = ['student', 'teacher', 'guest', 'admin'];

class UserStore {
    @observable state = 'loading';
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
        if (this.user) {
            return;
        }

        // let user;

        try {
            const response = await fetch(`${window.location.origin}`, { credentials: 'include' });

            if (response.status === 200) {
                // TODO прием результата
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
