import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function InputText({ variant, type, placeholder }) {
    return (
        <TextField
            id="outlined-basic"
            label={placeholder}
            variant={variant}
            type={type}

            />
    )
}