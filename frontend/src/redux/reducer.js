import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
    name: "todos",
    initialState,
    reducers:{
        //here we will write our reducer
        //adding todos
        addTodos: (state, action) => {
            state.push(action.payload);
            return state;
        },

        //remove todos
        removeTodos: (state, action) => {
            return state.filter(item => item.id!== action.payload);
        },

        //update todos
        updateTodos: (state, action) => {
            return state.map(todo => {
                if(todo.id === action.payload.id){
                    return{
                        ...todo,
                        item: action.payload.item,
                    }
                }
                return todo;
            })
        },

        //completed
        completeTodos: (state, action) => {
            return state.map(todo => {
                if(todo.id === action.payload){
                    return{
                        ...todo,
                        completed: true,
                    }
                }
                return todo;
            })
        },

        //uncompleted
        incompleteTodos: (state, action) => {
            return state.map(todo => {
                if(todo.id === action.payload){
                    return{
                        ...todo,
                        completed: false,
                    }
                }
                return todo;
            })
        }

    }
})

export const {addTodos, removeTodos, updateTodos, completeTodos, incompleteTodos} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;