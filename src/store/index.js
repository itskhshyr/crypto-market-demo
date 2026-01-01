import { createStore, combineReducers } from "redux";
import marketReducer from "./reducers/marketReducer";

const rootReducer = combineReducers({
  market: marketReducer,
});

const isClient = typeof window !== "undefined";

export const store = createStore(
  rootReducer,
  isClient && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
);
