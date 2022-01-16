import { combineReducers } from "@reduxjs/toolkit";
import GameSlice from "./slices/GameSlice";

const rootReducer = combineReducers({
    GameSlice
});

export { rootReducer };