import React, { useRef } from 'react'

const TodoItem = (props) => {

    const {item, updateTodo, removeTodo, completeTodo, incompleteTodo} = props;

    const inputRef = useRef(true);
    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    }
    const update = (id,value,e) => {
        if(e.which === 13){
            //here 13 is key code for enter key
            updateTodo({id, item: value});
            inputRef.current.disabled = true;
        }
    }

    return (
        <li key={item.id} className="card">
            <div className="card-item">
                <input ref={inputRef} disabled={inputRef} defaultValue={item.item} onKeyPress={(e) => update(item.id, inputRef.current.value, e)}/>
            </div>
            <div className="btns card-item">
                <button onClick={() => changeFocus()} className="btnEdit">Edit</button>{" "} 
                {item.completed === false ? 
                    <button onClick={() => completeTodo(item.id)} className="btnCompleted">Complete</button> 
                    : 
                    <button onClick={() => incompleteTodo(item.id)} className="btninCompleted">Incomplete</button>
                }{" "}
                <button onClick={() => removeTodo(item.id)} className="btnDelete">Delete</button>{" "} 
            </div>
            <div className="card-item">
                {item.completed && <span className="completed statusT">✓</span>}
                {/* {item.completed === false && <span className="active statusT">X</span>} */}
            </div>
        </li>
    )
}

export default TodoItem
