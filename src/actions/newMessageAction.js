import { store } from './../store';
import { get } from './../http';

import userAction from './../constants/userAction';
import serverStatus from './../constants/serverStatus';

export default (content, postBy, userConnectionStatus) => {
    const date = new Date();

    get('api/create', (id) => {
        store.dispatch({
            type: serverStatus.NEW_MESSAGE_SERVER_ACCEPTED,
        })
    });

    return {
        type: userAction.CREATE_NEW_MESSAGE,
        value: content,
        postBy,
        date,
        userConnectionStatus,
    }
}
