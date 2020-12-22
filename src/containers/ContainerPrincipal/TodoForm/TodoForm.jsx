import React, { useState, /* useRef */ } from 'react'
import AddBoxIcon from '@material-ui/icons/AddBox';
import InputText from '../../../components/InputText/index';
import ButtonDefault from './../../../components/ButtonDefault/index';
import { Container } from '@material-ui/core';
import useStyles from './styles';

function TodoForm(props) {


    const [input, setInput] = useState('')
    const [desc, setDesc] = useState('')
    const [date, setDate] = useState('')

    /* const inputRef = useRef(null) */

    /*   useEffect(() => {
          inputRef.current.focus()
      }) */
    function handleChange(e) {
        setInput(e.target.value)        
    }

    function handleSubmit(e) {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })
        setInput('')
    }
    const styles = useStyles()

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <InputText
                        label='Digite sua tarefa...'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        className='todo-input edit'
                    />
                    <ButtonDefault onClick={handleSubmit} className='todo-button edit'>
                        Update
                    </ButtonDefault>
                </>
            ) : (
                    <Container className={styles.form}>
                        <InputText
                            label='Digite sua tarefa...'
                            value={input}                            
                            onChange={handleChange}
                            name='text'
                            className='todo-input'
                        />
                        <InputText
                            label='Digite a descrição'
                            value={desc}
                        />
                        <InputText
                            value={date}
                            type="date"

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