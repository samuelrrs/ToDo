import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Container } from '@material-ui/core';
import useStyles from './styles';
import CardTask from '../../../components/CardTask';
import { FormControlLabel } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import TodoForm from './../TodoForm/index';
import moment from 'moment';

function Todo ( { todos, completeTodo, removeTodo, updateTodo } ) {

    const styles = useStyles()
    const [ isFavorite, setIsfavorite ] = useState( false );


    const [ edit, setEdit ] = useState( {
        id: null,
        value: '',
        desc: '',
        date: '',
        isFavorite: ''
    } )

    function submitUpdate ( value, desc, date ) {
        updateTodo( edit.id, value, desc, date )
        setEdit( {
            id: null,
            value: '',
            desc: '',
            date: '',
            isFavorite
        } )
    }

    if ( edit.id ) {
        return <TodoForm edit={ edit } onSubmit={ submitUpdate } />
    }
    return (

        todos.map( ( todo, index ) => (
            <Container className={ styles.listaBody }>
                <CardTask
                    id={ todo.id }
                    title={ todo.title }
                    desc={ todo.desc }
                    date={ moment( todo.date ).format( 'DD/MM/YYYY' ) }
                    favorite={
                        <FormControlLabel
                            className={ styles.switch }
                            control={
                                <Switch checked={ todo.isFavorite } color="primary" onChange={ event => setIsfavorite( event.target.checked ) } name="checkedA" /> }
                            label="Importante"
                        />
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
