import React from 'react'
import ContainerPrincipal from './../../containers/ContainerPrincipal/index';
import Header from './../../components/Header/index';
import { Container } from '@material-ui/core';


function Main () {
    return (
        <Container>
            <Header />
            <ContainerPrincipal />
        </Container>
    )
}

export default Main;
