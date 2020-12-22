import React from 'react'
import TodoList from './TodoList/TodoList'
import useStyles from './styles';
import { Container } from '@material-ui/core';

function ContainerPrincipal() {

    const styles = useStyles()
    return (
        <Container className={styles.container}>
            <TodoList  />
        </Container>
    )
}

export default ContainerPrincipal
