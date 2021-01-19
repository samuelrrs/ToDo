import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Container } from '@material-ui/core';
import TodoForm from './../TodoForm/index';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InfoIcon from '@material-ui/icons/Info';
export default function Todo ( { todos, removeTodo, updateTodo } ) {
    const styles = useStyles();
    const [ expanded, setExpanded ] = useState( false );
    const handleChange = ( panel ) => ( event, isExpanded ) => {
        setExpanded( isExpanded ? panel : false );
    };

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
        return <TodoForm edit={ edit } onSubmit={ submitUpdate }
        />
    }
    return (
        todos.map( ( todo, index ) => (
            <Container className={ styles.listaBody }
            >
                <Accordion className={ styles.acordionPrincipal }>
                    <AccordionSummary
                        expandIcon={ <ExpandMoreIcon /> }
                        aria-label="Expand"
                        aria-controls="additional-actions1-content"
                        id="additional-actions1-header"
                    >
                        <FormControlLabel
                            aria-label="Acknowledge"
                            onClick={ ( event ) => event.stopPropagation() }
                            onFocus={ ( event ) => event.stopPropagation() }
                            control={ <InfoIcon
                                onClick={ () => removeTodo( todo.id ) }
                            /> }
                            label=""
                        />

                        <Container className={ styles.info }>
                            <Typography>{ todo.title }</Typography>
                            <Typography >{ todo.date }</Typography>
                        </Container>
                        <Container className={ styles.icons }>
                            <DeleteIcon
                                onClick={ () => removeTodo( todo.id ) }
                            />
                            <EditIcon
                                className={ styles.icons }
                                onClick={ () => setEdit( { id: todo.id, value: todo.title, desc: todo.desc, date: todo.date } ) }
                            />
                        </Container>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            { todo.desc }
                        </Typography>
                    </AccordionDetails>
                </Accordion>


            </Container>
        ) )
    );
}
