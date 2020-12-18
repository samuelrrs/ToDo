import React from 'react';
import { Container } from '@material-ui/core';
import InputText from './../../Components/InputText/index';
import ButtonDefault from './../../Components/ButtonDefault/index';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';

export default function FormDefault() {

    const styles = useStyles()

    return (
        <Container className={styles.container}>
            <InputText
                placeholder='Digite o nome da tarefa'
                />
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