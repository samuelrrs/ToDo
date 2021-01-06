import React, { useState/* , useRef, useEffect  */ } from 'react'
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Container, Typography } from '@material-ui/core';
import useStyles from './styles';
import ButtonDefault from '../../../components/ButtonDefault/index';
import InputText from '../../../components/InputText/index';
import { FormControlLabel } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function TodoForm(props) {

    const [title, setTitle] = useState(props.edit ? props.edit.value : '')
    const [desc, setDesc] = useState(props.edit ? props.edit.value : '')
    const [date, setDate] = useState(props.edit ? props.edit.value : '')
    const [isFavorite, setIsfavorite] = useState(false);

    const schema = yup.object().shape({
        title: yup.string().min(2, "Minimo de 2 caracteres"),
        desc: yup.string().min(2, "Minimo de 2 caracteres"),
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    function formSubmit() {

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            title: title,
            desc: desc,
            date: date,
            importante: isFavorite,
        })
        setTitle('')
        setDesc('')
        setDate('')
        setIsfavorite(false)

        console.log(isFavorite)
    }


    const styles = useStyles()

    return (
        <form
            onSubmit={handleSubmit(formSubmit)}>
            {props.edit ? (
                <Container className={styles.formedit}>
                    <InputText
                        label='Digite sua tarefa...'
                        value={title}
                        onChange={event => setTitle(() => event.target.value)}
                        name='title'
                        className='todo-input edit'

                    />
                    <p>{errors.title?.message}</p>

                    <InputText
                        label='Digite a descrição'
                        name='desc'
                        value={desc}
                        onChange={event => setDesc(() => event.target.value)}
                    />
                    <p>{errors.desc?.message}</p>

                    <InputText
                        value={date}
                        name='date'
                        type="date"
                        onChange={event => setDate(() => event.target.value)}
                        className={styles.date}
                    />
                    <ButtonDefault onClick={formSubmit} className='todo-button edit'>
                        Salvar alteração
                    </ButtonDefault>
                </Container>
            ) : (
                    <Container className={styles.form}>

                        <InputText
                            label='Digite sua tarefa...'
                            value={title}
                            onChange={event => setTitle(event.target.value)}
                            name='title'
                            inputRef={register({ required: true })}
                            type={"text"}
                        />
                        <Typography>{errors.title?.message}</Typography>

                        <InputText
                            label='Digite a descrição'
                            name='desc'
                            value={desc}
                            inputRef={register({ required: true })}
                            onChange={event => setDesc(event.target.value)}
                        />
                        <Typography>{errors.desc?.message}</Typography>

                        <InputText
                            className={styles.date}
                            value={date}
                            name='date'
                            type="date"
                            onChange={event => setDate(event.target.value)}
                        />
                        <FormControlLabel
                            className={styles.switch}
                            control={
                                <Switch checked={isFavorite} color="primary" onChange={event => setIsfavorite(event.target.checked)} name="checkedA" />}
                            label="Importante"
                        />
                        <ButtonDefault
                            color={'primary'}
                            type={'submit'}
                            onClick={handleSubmit}
                            className={styles.button} >
                            <AddBoxIcon />
                        </ButtonDefault>

                    </Container>
                    
                )}
        </form>
    )
}

export default TodoForm
