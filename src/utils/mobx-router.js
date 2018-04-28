import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

export default (component) => {
    withRouter(observer(component));
};
