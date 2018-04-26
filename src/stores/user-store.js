import { observable, computed, action, runInAction } from 'mobx';

class UserStore {
    @observable state = 'initial';
    @observable user;

    @computed get isFetching() {
        return this.state === 'loading';
    }

    @action loadUser = async () => {
        if (this.isFetching) {
            return;
        }

        this.state = 'loading';

        let user;

        setTimeout(action(() => {
            this.user = user;
            this.state = 'loaded';
        }), 100);

        // try {
        //     user = await fetch(`${window.location.origin}/user`);
        //
        //     runInAction(() => {
        //         this.user = user;
        //         this.state = 'loaded';
        //     });
        // } catch (e) {
        //     runInAction(() => {
        //         this.state = 'error';
        //     });
        // }
    }
}

export default new UserStore();
