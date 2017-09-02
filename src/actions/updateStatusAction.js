import userAction from './../constants/userAction';

export default (value) => {
    return {
        type: userAction.UPDATE_STATUS,
        value,
    }
}
