import React, {useState} from "react";
import '../css/TodoForm.css';

const TodoForm = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className='new-todo-form'>
            <input type='text' className='new-todo-input' value={inputValue} onChange={e=>e.target.value} />
            <button className='new-todo-button'>Create Todo</button>
        </div>
    )
}

export default TodoForm