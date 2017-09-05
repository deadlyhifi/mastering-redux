import { store } from './store';

import userNameUpdateAction from './actions/userNameUpdateAction';
import fontSizePreferenceUpdateAction from './actions/fontSizePreferenceUpdateAction';

import userPreference from './constants/userPreference';

document.forms.fontSizeForm.fontSize.forEach(element => {
    element.addEventListener('change', ({target}) => {
        store.dispatch(fontSizePreferenceUpdateAction(target.value));
    })
});

document.getElementById('userNameInput').addEventListener('input', (event) => {
    const name = event.target.value ? event.target.value : null;
    store.dispatch(userNameUpdateAction(name));
});

document.forms.userPreferences.addEventListener('submit', (event) => {
    event.preventDefault();
});

const render = () => {
    const {
        controlPanel: {
            userName,
            fontSize
        }
    } = store.getState();

    localStorage[`preferences`] = JSON.stringify({ userName, fontSize });

    document.getElementById('userName').innerText = userName;
    document.getElementsByClassName('container')[0].style.fontSize = fontSize === "small" ? "16px" : "24px";
    document.forms.fontSizeForm.fontSize.value = fontSize;
}

render();

store.subscribe(render);
