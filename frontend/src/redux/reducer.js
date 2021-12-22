import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = [];
const URL = 'http://localhost:4000'


const addTodoReducer = createSlice({
    name: "todos",
    initialState,
    reducers:{
        //Get all todos
        getTodos: (state, action) => {
            const prueba = axios.get(`${URL}/todoList`)
            console.log(prueba.data);
            // let prueba;
            // const llamado = () => {
                /* axios.get(`${URL}/todoList/61c100601185bbe441a82b09`)
                .then(function(response) {
                    window.prueba = response.data;
                    // console.log(window.prueba);
                }) */
            // }
            //state.push({id: iden, item: nom, completed: est});
            // llamado();
            return prueba;
        },

        //add todo
        addTodos: (state, action) => {
            state.push(action.payload);
            const { item,completed } = action.payload;
            axios.post(`${URL}/newtask`, {nombre_tarea: item, completed: completed})
            // console.log(action.payload);
            return  state;
        },

        //remove todo
        removeTodos: (state, action) => {
            //Peticion para eliminar task
            //axios.delete(`${URL}/todoList/${action.payload.id}`) 
            return state.filter(item => item.id!== action.payload);
        },

        //update todo
        updateTodos: (state, action) => {
            return state.map(todo => {
                if(todo.id === action.payload.id){
                    //Peticion para realizar el update
                    //axios.put(`${URL}/todoList/${action.payload.id}`, {nombre_tarea: item, completed: completed})  
                    return{
                        ...todo,
                        item: action.payload.item,
                    }
                }
                return todo;
            })
        },

        //Mark completed todo
        completeTodos: (state, action) => {
            return state.map(todo => {
                if(todo.id === action.payload){
                    //Peticion para realizar el update para marcar como completed
                    //axios.put(`${URL}/todoList/${action.payload.id}`, {nombre_tarea: item, completed: completed}) 
                    return{
                        ...todo,
                        completed: true,
                    }
                }
                return todo;
            })
        },

        //Mark incompleted todo
        incompleteTodos: (state, action) => {
            return state.map(todo => {
                if(todo.id === action.payload){
                    //Peticion para realizar el update para marcar como incompleted
                    //axios.put(`${URL}/todoList/${action.payload.id}`, {nombre_tarea: item, completed: completed}) 
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