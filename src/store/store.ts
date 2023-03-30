import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./bookSlice";
import { combineReducers } from "redux";

import settingsReducer from "./settingsSlice";

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const rootReducer = combineReducers({
  books: booksReducer,
  theme: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
