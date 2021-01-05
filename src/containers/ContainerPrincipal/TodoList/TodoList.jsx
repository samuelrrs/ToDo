import { Typography, Container } from '@material-ui/core';
import React, { useState } from 'react'
import Todo from '../Todo/Todo';
import TodoForm from '../TodoForm/TodoForm';
import useStyles from './styles';

function TodoList() {
    const [todos, setTodos] = useState([])

    function addTodo(todo) {
        if (!todo.title || /^\s*$/.test(todo.title)) {
            return
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        console.log(...todos)
    }

    function updateTodo(todoId, newValue) {
        if (!newValue.title || /^\s*$/.test(newValue.title)) {
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
    const styles = useStyles()
    return (
        <Container className={styles.container}>
            <Typography className={styles.title}>Qual sua rotina pra hoje ?</Typography>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </Container>
    )
}

export default TodoList
