import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios'

export const getTodoAsync=createAsyncThunk('db/getTodoAsync',async()=>{
    // with fetch
    // const response=await fetch('https://jsonplaceholder.typicode.com/todos')
    // return await response.json()

    //with axios
    const response=await axios.get('https://jsonplaceholder.typicode.com/todos')
    return response.data
})

export const addTodoAsync=createAsyncThunk('db/addTodoAsync',async(data)=>{
   const response=await  axios.post('https://jsonplaceholder.typicode.com/posts',data)
   console.log(response);
   return response.data
})
const fetchSlice=createSlice({
    name:'db',
    initialState:{
        todos:[],
        isLoading:false,
        error:null
    },
    reducers:{

    },
    
    
    extraReducers:{

        //get todos
        [getTodoAsync.pending]:(state,action)=>{
            state.isLoading=true
        },
        [getTodoAsync.fulfilled]:(state,action)=>{
            state.todos=action.payload;
            state.isLoading=false
        },
        [getTodoAsync.rejected]:(state,action)=>{
            state.isLoading=false
            state.error=action.error.message
        },

        //add todo
        [addTodoAsync.pending]:(state,action)=>{
            state.isLoading=true
        },
        [addTodoAsync.fulfilled]:(state,action)=>{
            state.todos=[...state.todos,action.payload]
            state.isLoading=false
        },
        [addTodoAsync.rejected]:(state,action)=>{
            state.isLoading=false
            state.error=action.error.message
        },
    }

})

export const {} = fetchSlice.actions;
export default fetchSlice.reducer;