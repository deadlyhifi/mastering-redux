import userAction from './../constants/userAction';

export default (state = [] /*defaultState.connectionStatus*/, {type, value}) => {
    switch(type) {
        case userAction.UPDATE_STATUS:
            return value;
            break;
    }

    return state;
}
