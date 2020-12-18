import React from 'react';
import { Button } from '@material-ui/core';

export default function ButtonDefault({buttonContent}) {
    return (

        <Button variant="contained" color="secondary">
            {buttonContent}
        </Button>
    )
}