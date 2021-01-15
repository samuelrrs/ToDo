import { Typography, Container } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import useStyles from './styles';
import TodoForm from './../TodoForm/index';
import Todo from './../Todo/index';

function TodoList () {
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
        if ( !todo.title || /^\s*$/.test( todo.title ) ) {
            return
        }

        const newTodos = [ todo, ...todos ]
        setTodos( newTodos )
        console.log( ...todos )
    }

    function updateTodo ( todoId, newValue ) {
        if ( !newValue.title || /^\s*$/.test( newValue.title ) ) {
            return
        }
        setTodos( prev => prev.map( item => ( item.id === todoId ? newValue : item ) ) )
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
                <TodoForm onSubmit={ addTodo } />
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
