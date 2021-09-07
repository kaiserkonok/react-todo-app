import React from 'react'

function Todos({ props }) {
    const todos = props.todos
    return (
        <div className="container mt-5">
            <ul className="list-group">
                {todos.map((todo, index) => (
                    <li className="list-group-item" key={index}>{todo.title}<button className="btn btn-danger btn-sm float-end" onClick={() => props.deleteTodo(index)}>Delete</button></li>
                ))}
            </ul>
        </div>
    )
}

export default Todos;
