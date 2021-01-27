import React from 'react';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import useStyles from './styles';

function FieldForm({ name, errors, variant = 'outlined', ...rest }) {

    const error = errors && errors[name]
    const styles = useStyles()

    return (
        <>
            <TextField
                name={name}
                variant={variant}
                className={styles.input}
                {...rest}
            />
            { error && <Alert severity="warning" className={styles.alerta}>{error.message}</Alert>}
        </>

    )
}

export default FieldForm
