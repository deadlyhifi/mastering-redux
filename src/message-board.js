import { get } from './http';
import { store } from './store';

import newMessageAction from './actions/newMessageAction';
import updateStatusAction from './actions/updateStatusAction';

import userAction from './constants/userAction';
import userStatus from './constants/userStatus';
import serverStatus from './constants/serverStatus';

const render = () => {
    const {
        messages,
        connectionStatus,
        apiCommunicationStatus
    } = store.getState();

    document.getElementById('messages').innerHTML = messages
        .sort((a, b) => b.date - a.date)
        .map(message => (`
            <div>
                ${message.postBy} : ${message.content}
            </div>
        `)).join('');

        document.forms.newMessage.newMessage.value = '';
        document.forms.newMessage.fields.disabled = (
            connectionStatus == userStatus.OFFLINE ||
            apiCommunicationStatus == serverStatus.WAITING
        );
}

document.forms.selectStatus.status.addEventListener('change', (event) => {
    // on change dispatch an action to the store.
    // The value is the form field option value
    store.dispatch(updateStatusAction(event.target.value));
});

document.forms.newMessage.addEventListener('submit', (event) => {
    event.preventDefault();

    const value = event.target.newMessage.value ? event.target.newMessage.value : null;
    const userName = localStorage['preferences'] ? JSON.parse(localStorage['preferences']).userName : 'New User';

    if (value) {
        store.dispatch(newMessageAction(value, userName));
    }
})

render();

// Subscribe to changes in the store and call the render function
store.subscribe(render);
