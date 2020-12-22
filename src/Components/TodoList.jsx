import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([])

    function addTodo(todo) {
        if (!todo.text || /^\s*$/.test(todo.text)) {

            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)

        console.log(...todos)
    }

    function updateTodo(todoId, newValue) {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {

            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))

    }

    function removeTodo(id) {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }



    function completeTodo(id) {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    return (
        <>
            <h1>Qual sua rotina pra hoje ?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </>
    )
}

export default TodoList