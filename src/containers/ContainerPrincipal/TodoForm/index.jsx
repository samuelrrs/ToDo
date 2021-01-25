import { yupResolver } from '@hookform/resolvers/yup';
import { Container, FormControlLabel } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import ButtonDefault from '../../../components/ButtonDefault/index';
import FieldForm from '../../../components/FieldForm/index';
import { schemaValidation } from './../../../utils/Validation/taskValidation';
import useStyles from './styles';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';

function TodoForm ( props ) {

    const [ title, setTitle ] = useState( '' )
    const [ desc, setDesc ] = useState( '' )
    const [ date, setDate ] = useState( '' )
    const [ isFavorite, setIsfavorite ] = useState( false );

    const [ isEdit, setIsEdit ] = useState( false )

    const { register, handleSubmit, errors } = useForm( {
        resolver: yupResolver( schemaValidation ),
        reValidateMode: 'onBlur'
    } );

    function formSubmit () {

        props.onSubmit( {
            id: props.edit.id !== null ? props.edit.id : Math.floor( Math.random() * 1000 ),
            title: title,
            desc: desc,
            date: date,
            isFavorite: isFavorite,
            edit: props.edit.id !== null ? true : false
        } )
        setTitle( '' )
        setDesc( '' )
        setDate( '' )
        setIsfavorite( false )
        setIsEdit( false )
        props.edit.id = null
    }

    useEffect( () => {
        setTitle( props.edit ? props.edit.value : '' )
        setDesc( props.edit ? props.edit.desc : '' )
        setDate( props.edit ? props.edit.date : '' )
        setIsfavorite( props.edit ? props.edit.isFavorite : false )
        if ( props.edit.id !== null ) {
            setIsEdit( true )
        }
    }, [ props.edit ] )

    const styles = useStyles()
    return (
        <form
            onSubmit={ handleSubmit( formSubmit ) }>
            <Container className={ styles.form }>
                <FieldForm
                    label='Digite sua tarefa...'
                    value={ title }
                    onChange={ event => setTitle( event.target.value ) }
                    name='title'
                    inputRef={ register( { required: true } ) }
                    type={ "text" }
                    errors={ errors }
                />
                <FieldForm
                    label='Digite a descrição'
                    name='desc'
                    value={ desc }
                    inputRef={ register( { required: true } ) }
                    onChange={ event => setDesc( event.target.value ) }
                    errors={ errors }
                />
                <FieldForm
                    value={ date }
                    name='date'
                    type="date"
                    onChange={ event => setDate( event.target.value ) }
                    errors={ errors }
                />
                <FormControlLabel
                    control={
                        <Tooltip title={ <h2 style={ { fontSize: 14 } }>Essa informação não poderá ser alterada após a tarefa ser cadastrada !</h2> } placement="left">
                            <Checkbox checked={ isFavorite } value={ isFavorite } onChange={ event => setIsfavorite( event.target.checked ) } name="checkedA" className={ styles.switch } />
                        </Tooltip>
                    }
                    label="Importante"
                    className={ styles.switch }

                />
                <ButtonDefault
                    color={ 'primary' }
                    type={ 'submit' }
                    onClick={ handleSubmit }
                    className={ styles.button } >
                    {
                        isEdit ? <EditIcon /> : <AddBoxIcon />
                    }

                </ButtonDefault>

            </Container>

        </form>
    )
}

export default TodoForm
