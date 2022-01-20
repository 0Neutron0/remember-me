import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";

export const setupStor = () => {
    return configureStore({
        reducer: rootReducer,
        devTools: true,
    })
};

export  type RootState = ReturnType<typeof rootReducer>;
export  type AppStor = ReturnType<typeof setupStor>;
export  type AppDispatch = AppStor['dispatch'];