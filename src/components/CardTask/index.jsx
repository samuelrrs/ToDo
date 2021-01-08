import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './styles';
import { Container } from '@material-ui/core';



export default function ActionsInAccordionSummary ( { id, title, desc, edit, remove } ) {
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
                            <>
                                { edit }
                                { remove }
                            </>
                        }
                        label={ title }
                    />
                </AccordionSummary>
                <AccordionDetails className={ styles.descContainer }>
                    <Typography color="textSecondary" className={ styles.desc }>
                        { desc }
                    </Typography>
                </AccordionDetails>
            </Accordion>


        </Container>
    );
}
