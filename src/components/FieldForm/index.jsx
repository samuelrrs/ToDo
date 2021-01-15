import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import TextField from '@material-ui/core/TextField';

function FieldForm ( { name, errors, variant = 'outlined', ...rest } ) {

    const error = errors && errors[ name ]
    const styles = useStyles()

    return (
        <>
            <TextField
                name={ name }
                variant={ variant }
                className={ styles.input }
                { ...rest }
            />
            { error && <Typography>{ error.message }</Typography> }
        </>

    )
}

export default FieldForm
