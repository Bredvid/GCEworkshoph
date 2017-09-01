import React from 'react';
import './Todos.css';

function Todo(props) {
    const {id, task, done} = props.task;
    return ( <li key={id}>
        {task}
        <input type="checkbox" checked={done} onChange={() => props.markDone(id)} name="Ferdig"/>
        <input type="button" checked={done} onClick={() => props.delete(id)} value="x"/>
    </li>)
}
export default Todo;