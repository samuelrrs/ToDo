import React from 'react';
import { Button } from '@material-ui/core';
import useStyles from './styles';

export default function ButtonDefault({ buttonContent, type, onClick }) {

    const styles = useStyles()

    return (

        <Button
            variant="contained"
            color="secondary"
            type={type}
            onClick={onClick}
            className={styles.button}
            >
            {buttonContent}
        </Button>
    )
}