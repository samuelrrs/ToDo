import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Container } from '@material-ui/core';
import TodoForm from '../TodoForm/TodoForm';
import useStyles from './styles';
import CardTask from '../../../components/CardTask';

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
                <CardTask
                    id={todo.id}
                    title={todo.title}
                    desc={todo.desc}
                    date={todo.date}
                    remove={
                            <DeleteIcon
                                className={styles.icons}
                                onClick={() => removeTodo(todo.id)}
                            />
                    }
                    edit={
                        <EditIcon
                            className={styles.icons}
                            onClick={() => setEdit({ id: todo.id, value: todo.text })}
                        />
                    }
                />
            </Container>
        ))
    )
}
export default Todo
