import React, { useState } from 'react'

function TodoForm({ addTodo }) {
    const [value, setvalue] = useState('');

    function handleChange(e) {
        setvalue(e.target.value)
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        if (value) {
            addTodo(value)
        }
    }
    return (
        <div className="container mt-3">
            <form action="" onSubmit={handleFormSubmit}>
                <input type="text" name="item" id="item" onKeyDown={handleChange} className="form-control w-50 d-inline" placeholder="type here.." required />
                <input type="submit" value="Add item" className="btn btn-primary" />
            </form>
        </div>
    )
}

export default TodoForm;
