import { combineReducers } from "@reduxjs/toolkit";
import GameSlice from "./Slices/GameSlice";

const rootReducer = combineReducers({
    GameSlice
});

export { rootReducer };