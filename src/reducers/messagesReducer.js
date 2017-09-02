import userAction from './../constants/userAction';

export default (state = [] /*defaultState.messages*/, {type, value, postBy, date}) => {
    switch(type) {
        case userAction.CREATE_NEW_MESSAGE:
            // the state is immutable so return a new element with the new values and the existing state.
            const newState = [{date, postBy, content: value}, ...state];
            return newState;
            break;
    }

    return state;
}