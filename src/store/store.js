import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit";

import sessionStorage from "redux-persist/es/storage/session";
import {persistReducer} from "redux-persist";

import loginReducer from "../features/loginSlice";

// creating a persisting reducer, that persist data in session storage
const persistConfig={
	key:"root",
	version:1,
	storage:sessionStorage
};
const reducer=combineReducers({
	logAction:loginReducer,
});
const persist_reducer=persistReducer(persistConfig,reducer);

/**
 * configureStore method will automatically creates root reducer,
 * a store from the root reducer, add thunk middleware and set up
 * redux dev tool extension.
 */
const store = configureStore({
	reducer: {
		// top level name : reducer name
		rootReducer:persist_reducer,
	},
});

export default store;