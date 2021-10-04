import React from "react";
import TodoForm from "./TodoForm";
import TodoListItem from "./TodoListItem";
import '../css/TodoList.css';

const TodoList = ({ todos = ['new'] }) => (
    <div className='list-wrapper'>
        <TodoForm/>
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
)

export default TodoList