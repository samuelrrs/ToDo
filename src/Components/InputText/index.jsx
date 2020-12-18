import { TextField } from '@material-ui/core';
import React from 'react';

export default function InputText({ placeholder, type }) {
    return (
        <TextField 
        id="outlined-basic" 
        label="Outlined" 
        variant={placeholder} 
        type={type} />
    )
}