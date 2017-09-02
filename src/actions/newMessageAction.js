import userAction from './../constants/userAction';

export default (content, postBy) => {
    const date = new Date();
    return {
        type: userAction.CREATE_NEW_MESSAGE,
        value: content,
        postBy,
        date,
    }
}
