import React from 'react'

import { Container, Typography } from '@material-ui/core'
import TaskListContextProvider from '../../contexts/TaskListContext'
import TaskForm from './TodoForm/index';
import TodoList from './TodoList/index';
import useStyles from './styles';
import Header from './../../components/Header/index';

const ContainerPrincipal = () => {
    const styles = useStyles()
    return (
        <TaskListContextProvider>
            <Container className={styles.containerCard}>
                <Header />
                <Container className={styles.cardBackground}>
                    <Container className={styles.main}>
                        <Typography className={styles.title}>Qual sua rotina para hoje ?</Typography>
                        <TaskForm />
                        <TodoList />

                    </Container>
                </Container>
            </Container>
        </TaskListContextProvider>
    )
}

export default ContainerPrincipal
