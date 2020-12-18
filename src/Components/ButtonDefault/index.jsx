import { Button } from '@material-ui/core';
import React from 'react';

export default function ButtonDefault({buttonContent}) {
    return (

        <Button variant="contained" color="secondary">
            {buttonContent}
        </Button>
    )
}