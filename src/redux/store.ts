import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";

const setupStor = () => {
    return configureStore({
        reducer: rootReducer
    })
};

export  type RootState = ReturnType<typeof rootReducer>;
export  type AppStor = ReturnType<typeof setupStor>;
export  type AppDispatch = AppStor['dispatch'];