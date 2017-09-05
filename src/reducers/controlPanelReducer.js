import userPreference from './../constants/userPreference';

const defaultState = localStorage[`preferences`] ? JSON.parse(localStorage[`preferences`]) :
    {
        userName: "Jim",
        fontSize: "small"
    }

export default (state = defaultState, {type, value}) => {
    switch(type) {
        case userPreference.UPDATE_FONT_SIZE_PREFERENCE:
            const { userName } = state;
            return { userName, fontSize: value };
            break;
        case userPreference.UPDATE_USERNAME:
            const { fontSize } = state;
            return { userName: value, fontSize };
            break;
    }

    return state;
}
