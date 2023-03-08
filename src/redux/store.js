// 1. crear el store y definir los reducers
// el store es el objeto central de una aplicación de React que almacena el estado global y proporciona una API para actualizar y acceder al estado.

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

export const store = createStore (
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);





