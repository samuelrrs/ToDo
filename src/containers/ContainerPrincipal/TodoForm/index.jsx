import { yupResolver } from '@hookform/resolvers/yup';
import { Container, FormControlLabel } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import AddBoxIcon from '@material-ui/icons/AddBox';
import React, { useState /* , useRef, useEffect */ } from 'react';
import { useForm } from "react-hook-form";
import ButtonDefault from '../../../components/ButtonDefault/index';
import FieldForm from '../../../components/FieldForm/index';
import { schemaValidation } from './../../../utils/validation/taskValidation';
import useStyles from './styles';

function TodoForm ( props ) {

    const [ title, setTitle ] = useState( props.edit ? props.edit.value : '' )
    const [ desc, setDesc ] = useState( props.edit ? props.edit.desc : '' )
    const [ date, setDate ] = useState( props.edit ? props.edit.date : '' )
    const [ isFavorite, setIsfavorite ] = useState( false );

    const { register, handleSubmit, errors } = useForm( {
        resolver: yupResolver( schemaValidation ),
        reValidateMode: 'onBlur'
    } );

    function formSubmit () {

        props.onSubmit( {
            id: Math.floor( Math.random() * 1000 ),
            title: title,
            desc: desc,
            date: date,
            importante: isFavorite,
        } )



        setTitle( '' )
        setDesc( '' )
        setDate( '' )
        setIsfavorite( false )
        console.log( date )
    }
    const styles = useStyles()

    return (
        <form
            onSubmit={ handleSubmit( formSubmit ) }>
            {props.edit ? (
                <Container className={ styles.formedit }>
                    <FieldForm
                        label='Edite sua tarefa...'
                        value={ title }
                        onChange={ event => setTitle( () => event.target.value ) }
                        name='title'
                        color="secondary"
                    />
                    <p>{ errors.title?.message }</p>
                    <FieldForm
                        label='Edite a descrição'
                        name='desc'
                        value={ desc }
                        onChange={ event => setDesc( () => event.target.value ) }
                        className={ styles.inputEdit }
                        color="secondary"
                    />
                    <p>{ errors.desc?.message }</p>

                    <FieldForm
                        value={ date }
                        name='date'
                        type="date"
                        onChange={ event => setDate( () => event.target.value ) }
                        className={ styles.date }
                        error
                    />
                    <ButtonDefault onClick={ formSubmit } >
                        Salvar alteração
                    </ButtonDefault>
                </Container>
            ) : (
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
                            className={ styles.switch }
                            control={
                                <Switch checked={ isFavorite } color="primary" onChange={ event => setIsfavorite( event.target.checked ) } name="checkedA" /> }
                            label="Importante"
                        />
                        <ButtonDefault
                            color={ 'primary' }
                            type={ 'submit' }
                            onClick={ handleSubmit }
                            className={ styles.button } >
                            <AddBoxIcon />
                        </ButtonDefault>

                    </Container>
                ) }
        </form>
    )
}

export default TodoForm
