import React, { useState/* , useRef, useEffect  */ } from 'react'
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Container } from '@material-ui/core';
import useStyles from './styles';
import ButtonDefault from './../../../Components/ButtonDefault/index';
import InputText from './../../../Components/InputText/index';
import { FormControlLabel } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import { useForm } from "react-hook-form";


function TodoForm(props) {

    const [title, setTitle] = useState(props.edit ? props.edit.value : '')
    const [desc, setDesc] = useState(props.edit ? props.edit.value : '')
    const [date, setDate] = useState(props.edit ? props.edit.value : '')
    const { register, handleSubmit } = useForm();

    function formSubmit() {

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: title,
            desc: desc,
            date: date
        })
        setTitle('')
        setDesc('')
        setDate('')
    }

    const [state, setState] = React.useState({
        checkedA: true,
    });

    const switchChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const styles = useStyles()

    return (
        <form
            onSubmit={handleSubmit(formSubmit)}>
            {props.edit ? (
                <>
                    <InputText
                        label='Digite sua tarefa...'
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                        name='text'
                        className='todo-input edit'
                    />
                    <InputText
                        label='Digite a descrição'
                        name='desc'
                        value={desc}
                        onChange={event => setDesc(event.target.value)}
                    />
                    <InputText
                        value={date}
                        name='date'
                        type="date"
                        onChange={event => setDate(event.target.value)}
                    />
                    <ButtonDefault onClick={formSubmit} className='todo-button edit'>
                        Update
                    </ButtonDefault>
                </>
            ) : (
                    <Container className={styles.form}>
                        <InputText
                            label='Digite sua descrição...'
                            value={title}
                            onChange={event => setTitle(event.target.value)}
                            name='text'
                            register={register}
                            type={"text"}
                        />
                        <InputText
                            label='Digite a descrição'
                            name='desc'
                            value={desc}
                            onChange={event => setDesc(event.target.value)}
                        />
                        <InputText
                            value={date}
                            name='date'
                            type="date"
                            onChange={event => setDate(event.target.value)}
                        />
                        <FormControlLabel
                            control={<Switch checked={state.checkedA} onChange={switchChange} name="checkedA" />}
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
