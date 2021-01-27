import React, { useContext } from "react";
import { TaskListContext } from './../../../contexts/TaskListContext';
import useStyles from './styles';
import { Typography, Container } from '@material-ui/core';
import Todo from './../Todo/index';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

const TodoList = () => {
  const { tasks } = useContext( TaskListContext );
  const styles = useStyles()

  return (

    <Container>
      {tasks.length ? (
        <List className={ styles.list }>

          <ListItem className={ styles.listItem }>
            { tasks.map( task => {
              return <Todo task={ task } key={ task.id } />
            } ) }
          </ListItem>
          <Divider variant="inset" component="li" />

        </List>
      ) : (
          <Typography className={ styles.noTask }>Sem tarefas no momento</Typography>
        ) }
    </Container>
  );
};

export default TodoList;
