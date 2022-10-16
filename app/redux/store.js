import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counterSlice'
import  todosSLice  from "./todosSlice";
export const store = configureStore({
    reducer: {
        counter:counterReducer,
        todos:todosSLice
    },
})