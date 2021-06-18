import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import photoReducer from "./reducers/photoReducer";

const reducer = combineReducers({
    photo: photoReducer,
});

const initialState: {} = {
    photo: {
        photos: [],
        loading: false,
        error: "",
        query: "",
    },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof store.getState>;

export default store;
