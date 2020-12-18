import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './styles';

export default function InputText({ variant, type, placeholder }) {
    const styles = useStyles()

    return (
        <TextField
            id="outlined-basic"
            label={placeholder}
            variant={variant}
            type={type}
            className={styles.input}
        />
    )
}