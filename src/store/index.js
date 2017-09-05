import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import connectionStatusReducer from './../reducers/connectionStatusReducer';
import apiCommunicationStatusReducer from './../reducers/apiCommunicationStatusReducer';
import messagesReducer from './../reducers/messagesReducer';
import controlPanelReducer from './../reducers/controlPanelReducer';

const combinedReducer = combineReducers({
    apiCommunicationStatus: apiCommunicationStatusReducer,
    connectionStatus: connectionStatusReducer,
    messages: messagesReducer,
    controlPanel: controlPanelReducer,
})

export const store = createStore(
    combinedReducer,
    compose(
        // applyMiddleware(createLogger()),
        typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : (f) => f
    )
);
