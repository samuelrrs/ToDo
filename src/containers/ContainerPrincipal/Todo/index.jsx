import React, { useContext, useState } from 'react'
import { TaskListContext } from './../../../contexts/TaskListContext';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Container } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InfoIcon from '@material-ui/icons/Info';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import moment from 'moment';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';

const Todo = ( { task } ) => {
  const { removeTask, findItem, editItem } = useContext( TaskListContext )
  const styles = useStyles();
  const [ expanded, setExpanded ] = useState( false );
  const handleChange = ( panel ) => ( event, isExpanded ) => {
    setExpanded( isExpanded ? panel : false );
  };
  return (

    <Container className={ styles.listaBody }
    >

      <Accordion expanded={ expanded === task.id } onChange={ handleChange( task.id ) } className={ styles.acordionPrincipal }>
        <AccordionSummary
          expandIcon={ <ExpandMoreIcon /> }
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id={ task.id }
        >
          <Container className={ styles.info }>
            <FormControlLabel
              aria-label="Acknowledge"
              onClick={ ( event ) => event.stopPropagation() }
              onFocus={ ( event ) => event.stopPropagation() }
              control={
                <Tooltip title={ <h2 style={ { fontSize: 14 } }>Editar tarefa ?</h2> } placement="left-start">
                  <EditIcon
                    className={ styles.icons }
                    onClick={ () => { findItem( task.id ); setExpanded( false ) } }
                  />
                </Tooltip>
              }
              label="" />
            <Divider orientation="vertical" flexItem className={ styles.divider } />

            <Container className={ styles.textContainer }>
              <Typography>{ task.title }</Typography>
            </Container>

            <Divider orientation="vertical" flexItem className={ styles.divider } />
            <Typography >{ moment( task.date ).format( 'DD/MM/YYYY' ) }</Typography>
            <Divider orientation="vertical" flexItem className={ styles.divider } />

          </Container>
          {
            editItem ? '' : <Container className={ styles.icons }>
              <DeleteIcon
                onClick={ () => removeTask( task.id ) }
              />
            </Container>
          }
          {
            task.isFavorite ?
              <Tooltip title={ <h2 style={ { fontSize: 14 } }>Essa tarefa é importante !</h2> } placement="right-start">
                <NewReleasesIcon className={ styles.important } />
              </Tooltip>
              :
              <Tooltip title={ <h2 style={ { fontSize: 14 } }>Tarefa simples :D</h2> } placement="right-start">
                <InfoIcon className={ styles.iconfalse } />
              </Tooltip>
          }
        </AccordionSummary>
        <AccordionDetails className={ styles.desc }>
          <Typography className={ styles.desc }>
            { task.desc }
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  )
}

export default Todo
