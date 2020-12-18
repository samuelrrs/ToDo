import React from 'react';
import { Container } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';
import InputText from '../../../Components/InputText/index';
import ButtonDefault from '../../../Components/ButtonDefault/index';

export default function FormSimple() {

    const styles = useStyles()

    return (
        <Container className={styles.container}>
            <InputText
                placeholder='Digite o nome da tarefa'
                className={styles.input} />
            <InputText
                placeholder='Digite a descrição'
            />
            <InputText
                type='date'
                placeholder=' '
            />
            <ButtonDefault buttonContent={
                <AddIcon />
            } />
        </Container>
    )
}