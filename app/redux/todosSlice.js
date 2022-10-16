import { createSlice } from "@reduxjs/toolkit";
import helper from "../helpers/helper";

export const todosSLice=createSlice({
    name:'todos',
    initialState:{
        todos:[
            {id:1,todo:"Wake up",completed:false}
        ]
    },
    reducers:{
        addTodo:(state,action)=>{
            state.todos=[...state.todos,{id:helper.uniqid(),todo:action.payload}]
        },
        completed:(state,action)=>{
            state.todos.forEach(todo=>{
                if(todo.id===action.payload){
                    todo.completed=!todo.completed
                }
            })
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter(todo=>todo.id!==action.payload)
        }
    }
})

export const {addTodo,completed,removeTodo} =todosSLice.actions
export default todosSLice.reducer