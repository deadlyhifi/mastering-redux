import userPreference from './../constants/userPreference';

export default (name) => {
    return {
        type: userPreference.UPDATE_USERNAME,
        value: name
    }
};
