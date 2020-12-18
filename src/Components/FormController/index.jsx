import { FormControl } from '@material-ui/core';
import React from 'react';

export default function FormController({ formContent }) {

    return (
        <FormControl>
            {formContent}
        </FormControl>
    )

}