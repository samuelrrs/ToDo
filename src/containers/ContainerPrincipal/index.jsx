import React from 'react'
import useStyles from './styles';
import { Container } from '@material-ui/core';
import TodoList from './TodoList/TodoList';

function ContainerPrincipal () {

    const styles = useStyles()
    return (
        <Container className={ styles.container }>
            <TodoList />
        </Container>

    )
}

export default ContainerPrincipal
