import { Typography, Container } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import useStyles from './styles';
import TodoForm from './../TodoForm/index';
import Todo from './../Todo/index';

function TodoList () {
    const [ edit, setEdit ] = useState( {
        id: null,
        value: '',
        desc: '',
        date: '',
        isFavorite: false
    } )

    const [ todos, setTodos ] = useState( [] )
    useEffect( () => {
        const todoStorage = localStorage.getItem( 'tasks' )
        if ( todoStorage ) {
            setTodos( JSON.parse( todoStorage ) )
        }
    }, [] )
    useEffect( () => {
        localStorage.setItem( 'tasks', JSON.stringify( todos ) )
    }, [ todos ] )

    function addTodo ( todo ) {
        if ( todo.edit ) {
            editTask( todo )
        } else {
            const newTodos = [ todo, ...todos ]
            setTodos( newTodos )
        }

    }
    function updateTodo ( todo ) {
        setEdit( {
            id: todo.id,
            value: todo.value,
            desc: todo.desc,
            date: todo.date,
            isFavorite: todo.isFavorite
        } )
    }

    function editTask ( object ) {
        const newTodos = todos.map( todo => ( todo.id === object.id ? { id: object.id, title: object.title, desc: object.desc, date: object.date, isFavorite: object.isFavorite } : todo ) )
        localStorage.clear()
        localStorage.setItem( 'tasks', JSON.stringify( newTodos ) )
        setTodos( newTodos )
    }


    function removeTodo ( id ) {
        const removeArr = [ ...todos ].filter( todo => todo.id !== id )
        setTodos( removeArr )
    }
    const styles = useStyles()
    return (
        <Container>
            <Container className={ styles.container }>
                <Typography className={ styles.title }>Qual sua rotina pra hoje ?</Typography>
                <TodoForm onSubmit={ addTodo } edit={ edit } />
                <Todo
                    todos={ todos }
                    removeTodo={ removeTodo }
                    updateTodo={ updateTodo }
                />
            </Container>
        </Container>
    )
}

export default TodoList
