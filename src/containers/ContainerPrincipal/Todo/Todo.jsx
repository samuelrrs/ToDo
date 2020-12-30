import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import { Container } from '@material-ui/core';
import TodoForm from '../TodoForm/TodoForm';
import useStyles from './styles';

/* import EditIcon from '@material-ui/icons/Edit'; */
function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const styles = useStyles()
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    function submitUpdate(value) {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return (

        todos.map((todo, index) => (
            <Container className={styles.listaBody}>
                <Container className={styles.lista}

                    key={index}
                >
                    <Container key={todo.id} onClick={() => completeTodo(todo.id)}>
                        {todo.text}
                    </Container>
                    <Container className="icons">
                        <CloseIcon
                            onClick={() => removeTodo(todo.id)}
                            className='delete-icon'
                        />

                        <EditIcon
                            onClick={() => setEdit({ id: todo.id, value: todo.text })}
                            className='edit-icon'
                        />
                    </Container>
                </Container>
            </Container>
        ))
    )


}

export default Todo
