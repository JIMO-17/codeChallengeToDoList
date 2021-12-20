import React, {useRef, useState} from 'react'
import { connect } from 'react-redux'
import { addTodos, removeTodos, updateTodos, completeTodos, incompleteTodos } from '../redux/reducer';

const mapStateToProps = (state) => {
    return {
        todos:state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completeTodo: (id) => dispatch(completeTodos(id)),
        incompleteTodo: (id) => dispatch(incompleteTodos(id))
    }
}

const Todos = (props) => {

    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    // console.log("props from store", props);

    return (
        <div className="addTodos"> 
           <input type="text" className="todo-input" placeholder="Type a new Task" onChange={ (e) => handleChange(e) }/>
           <button className="add-btn" onClick={() => props.addTodo({
               //here we will write object/todo
               id: Math.floor(Math.random() * 1000),
               item: todo,
               completed: false,
           })}>Add</button>
        </div>
    )
}

//we can use connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
