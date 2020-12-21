import { FormControl } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

export default function FormController({ onSubmit, error, children }) {
    const styles = useStyles()


    return (
        <>
           <FormControl
                className={styles.container}
                component='form'
                onSubmit={onSubmit}
                error={error} 
                children={children}
                />
        </>
    );
}
