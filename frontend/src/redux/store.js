import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

const store = configureStore({
    reducer:reducer
});

export default store;

//now let's connect this store to react app
