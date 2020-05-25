import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

export const middleware = [thunk, loggerMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
