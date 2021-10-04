import React from 'react'
import { hot } from 'react-hot-loader';
import './app.css'
import TodoList from './src/components/Todolist';

const App = () => (
    <div className='app'>
        <TodoList/>
    </div>
);

export default hot(module)(App)
