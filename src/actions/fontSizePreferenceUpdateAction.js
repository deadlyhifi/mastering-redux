import { store } from './../store';
import userPreference from './../constants/userPreference';

export default (name) => {
    return {
        type: userPreference.UPDATE_FONT_SIZE_PREFERENCE,
        value: name
    }
};
