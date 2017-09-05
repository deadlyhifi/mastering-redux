import userAction from './../constants/userAction';
import userStatus from './../constants/userStatus';

const defaultState = {
    connectionStatus: userStatus.ONLINE,
}

export default (state = defaultState.connectionStatus, {type, value}) => {
    switch(type) {
        case userAction.UPDATE_STATUS:
            return value;
            break;
    }

    return state;
}
