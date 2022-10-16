import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counterSlice'
import fetchSlice from "./fetchSlice";
import  todosSLice  from "./todosSlice";
export const store = configureStore({
    reducer: {
        counter:counterReducer,
        todos:todosSLice,
        db:fetchSlice
    },
})