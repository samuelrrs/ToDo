import React, { useState } from 'react';
import { Container, FormControl } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';
import InputText from '../../../Components/InputText/index';
import ButtonDefault from '../../../Components/ButtonDefault/index';

export default function FormSimple() {
    const styles = useStyles()

    const [titleValue, setTitleValue] = useState('')
    const [descValue, setDescValue] = useState('')

    const [tarefas, setTarefas] = useState([])

    function handleinputChange(e) {
        setTitleValue(e.target.value)
    }

    function handleSubmit(e, tarefa) {
        e.preventDefault()

        const newTasks = [tarefa, ...tarefas]
        setTarefas(newTasks)
        setTitleValue('')        
        console.log(tarefas)
    }

    return (
        <Container className={styles.container}>

            <form onSubmit={handleSubmit}
                className={styles.form}
                children={
                    <>
                        <InputText
                            placeholder='Digite o nome da tarefa'
                            className={styles.input}
                            value={titleValue}
                            onChange={handleinputChange}
                        />
                      {/*   <InputText
                            placeholder='Digite o nome da tarefa'
                            className={styles.input}
                            value={descValue}
                            onChange={handleinputChange}
                        /> */}
                        <ButtonDefault
                            type='submit'
                            buttonContent={
                                <AddIcon />
                            } />

                    </>
                }
            />

        </Container >
    )
}