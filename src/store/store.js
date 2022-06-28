import { configureStore } from "@reduxjs/toolkit";
import cntReducer from "./reducers/cntReducer";

export default configureStore({
    reducer: {
        cnt: cntReducer
    }
})