import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersSlice"

import postReducer from "./reducers/postSlice";
const rootReducer = combineReducers({
    postReducer,
    usersReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store