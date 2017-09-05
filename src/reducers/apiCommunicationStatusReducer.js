import userAction from './../constants/userAction';
import serverStatus from './../constants/serverStatus';

const defaultState = {
    apiCommunicationStatus: serverStatus.READY
}

export default (state = defaultState.apiCommunicationStatus, {type}) => {
    switch(type) {
        case userAction.CREATE_NEW_MESSAGE:
            return serverStatus.WAITING;
        case serverStatus.NEW_MESSAGE_SERVER_ACCEPTED:
            return serverStatus.READY;
            break;
    }

    return state;
}
