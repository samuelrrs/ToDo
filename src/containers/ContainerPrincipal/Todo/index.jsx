import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Container } from '@material-ui/core';
import useStyles from './styles';
import CardTask from '../../../components/CardTask';
import TodoForm from './../TodoForm/index';
import moment from 'moment';
import InfoIcon from '@material-ui/icons/Info';

function Todo ( { todos, completeTodo, removeTodo, updateTodo } ) {

    const styles = useStyles()


    const [ edit, setEdit ] = useState( {
        id: null,
        value: '',
        desc: '',
        date: '',
        isFavorite: null
    } )

    function submitUpdate ( value, desc, date, isFavorite ) {
        updateTodo( edit.id, value, desc, date, isFavorite )
        setEdit( {
            id: null,
            value: '',
            desc: '',
            date: '',
            isFavorite: null
        } )
    }

    if ( edit.id ) {
        return <TodoForm edit={ edit } onSubmit={ submitUpdate } />
    }
    return (

        todos.map( ( todo, index ) => (
            <Container className={ styles.listaBody }>
                <CardTask
                    className={ styles.cardListado }
                    id={ todo.id }
                    title={ todo.title }
                    desc={ todo.desc }
                    date={ moment( todo.date ).format( 'DD/MM/YYYY' ) }
                    favorite={
                        todo.isFavorite ? <InfoIcon /> : null
                    }
                    remove={
                        <DeleteIcon
                            className={ styles.icons }
                            onClick={ () => removeTodo( todo.id ) }
                        />
                    }
                    edit={
                        <EditIcon
                            className={ styles.icons }
                            onClick={ () => setEdit( { id: todo.id, value: todo.title, desc: todo.desc, date: todo.date } ) }
                        />

                    }
                />
            </Container>
        ) )
    )
}
export default Todo
