import userAction from './../constants/userAction';
import userStatus from './../constants/userStatus';
import serverStatus from './../constants/serverStatus';

const defaultState = {
    messages: [
        {
            date: new Date(),
            postBy: 'Hello',
            content: 'Write something cheeky',
            userConnectionStatus: userStatus.ONLINE,
        },
    ]
}

export default (state = defaultState.messages, {type, value, postBy, date, userConnectionStatus}) => {
    console.log(type, value, postBy, date, userConnectionStatus);
    switch(type) {
        case userAction.CREATE_NEW_MESSAGE:
            // the state is immutable so return a new element with the new values and the existing state.
            const newState = [{date, postBy, userConnectionStatus, content: value}, ...state];
            return newState;
            break;
    }

    return state;
}
