import React from 'react';
import { Button } from '@material-ui/core';
import useStyles from './styles';

export default function ButtonDefault({buttonContent}) {

    const styles = useStyles()

    return (

        <Button variant="contained" color="secondary" className={styles.button}>
            {buttonContent}
        </Button>
    )
}