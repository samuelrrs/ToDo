import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './styles';

import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


import { Container } from '@material-ui/core';



export default function ActionsInAccordionSummary ( { id, title, desc, edit, remove, date, favorite } ) {
    const styles = useStyles();

    return (
        <Container>
            <Accordion
                className={ styles.acordionPrincipal }
            >
                <AccordionSummary
                    expandIcon={ <ExpandMoreIcon /> }
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id={ id }
                >

                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={ ( event ) => event.stopPropagation() }
                        onFocus={ ( event ) => event.stopPropagation() }
                        control={
                            <Container className={ styles.info }>
                                { remove }
                                { edit }
                            </Container>
                        }
                    />
                    <Container className={ styles.info }>
                        <Typography >{ title }</Typography>
                        <Typography >{ date }</Typography>
                    </Container>
                    <Tooltip title="IMPORTANTE">
                        <IconButton aria-label="delete">
                            { favorite }
                        </IconButton>
                    </Tooltip>

                </AccordionSummary>
                <AccordionDetails className={ styles.descContainer }>
                    <Container className={ styles.infoSec }>
                        <Typography color="textSecondary" className={ styles.desc }>
                            { desc }
                        </Typography>
                    </Container>
                </AccordionDetails>
            </Accordion>


        </Container>
    );
}
