import { createStore, combineReducers } from 'redux';

import newMessageAction from './actions/newMessageAction';
import updateStatusAction from './actions/updateStatusAction';

import userAction from './constants/userAction';
import userStatus from './constants/userStatus';

const defaultState = {
    messages: [
        {
            date: new Date(),
            postBy: 'Hello',
            content: 'Write something cheeky',
        },
    ],
    connectionStatus: userStatus.ONLINE,
}

const connectionStatusReducer = (state = defaultState.connectionStatus, {type, value}) => {
    switch(type) {
        case userAction.UPDATE_STATUS:
            return value;
            break;
    }

    return state;
}

const messagesReducer = (state = defaultState.messages, {type, value, postBy, date}) => {
    switch(type) {
        case userAction.CREATE_NEW_MESSAGE:
            // the state is immutable so return a new element with the new values and the existing state.
            const newState = [{date, postBy, content: value}, ...state];
            return newState;
            break;
    }

    return state;
}

const combinedReducer = combineReducers({
    connectionStatus: connectionStatusReducer,
    messages: messagesReducer,
})

// Pass the combined reducers into the store
const store = createStore(combinedReducer);

const render = () => {
    const {messages, connectionStatus} = store.getState();

    document.getElementById('messages').innerHTML = messages
        .sort((a, b) => b.date - a.date)
        .map(message => (`
            <div>
                ${message.postBy} : ${message.content}
            </div>
        `)).join('');

    document.forms.newMessage.fields.disabled = (connectionStatus == userStatus.OFFLINE);
    document.forms.newMessage.newMessage.value = '';
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
