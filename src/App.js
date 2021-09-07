import React, { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm'
import Todos from './Todos'

function App() {
    const [todos, setTodo] = useState([
        {
            title: 'Read python 101',
        },
        {
            title: 'Read python 101',
        },
        {
            title: 'Read python 101',
        },
    ])

    const addTodo = (title) => {
        setTodo([...todos, { title: title }]);
    }

    const deleteTodo = (index) => {
        const filteredTodos = todos.filter((todo, key) => key !== index)
        setTodo(filteredTodos)
    }

    const stuffForFrontEnd = {
        todos: todos,
        deleteTodo: deleteTodo,
    }

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <Todos props={stuffForFrontEnd} />
        </div>
    );
}

export default App;
