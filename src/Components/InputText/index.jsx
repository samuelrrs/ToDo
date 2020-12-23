
import React from 'react'
import TextField from '@material-ui/core/TextField';
import useStyles from './styles';


export default function InputText({ label, value, onChange, type, inputRef, row }) {

    const styles = useStyles()
    return (
        <>
            <TextField
                className={styles.input}
                type={type}
                label={label}
                variant="outlined"
                value={value}
                onChange={onChange}
                required={true}
                inputRef={inputRef}
                row={row}
                multiline={false}

            />
        </>
    )
}